#!/usr/bin/env node
/**
 * @pokelabshq/poke-cli v1.0.0
 * Poke Labs CLI — Manage Poke Labs services from the terminal
 * 
 * Commands:
 *   status              Check all service health
 *   preview <url>       Preview a URL (title, desc, image)
 *   repos               List all pokelabshq repos
 *   deps                Check for outdated dependencies
 *   deploy              Restart all services
 *   help                Show this help
 * 
 * Examples:
 *   poke status
 *   poke preview https://github.com
 *   poke deps
 */

const https = require('https');
const http = require('http');
const { execSync } = require('child_process');

const VERSION = '1.0.0';
const BASE = 'https://api.github.com';

const SERVICES = [
  { name: 'Link Preview API', port: 8765, path: '/api/health' },
  { name: 'Poke Labs Site',  port: 8766, path: '/api/health' },
  { name: 'Poke Bot',        port: 8770, path: '/' },
  { name: 'Discord Bot',     port: 8775, path: '/api/health' },
  { name: 'Telegram Bot',    port: 8777, path: '/api/health' },
  { name: 'Skills Hub',      port: 8780, path: '/api/health' },
  { name: 'Pricing API',     port: 8790, path: '/api/health' },
];

function httpGet(url, opts = {}) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { timeout: 5000, ...opts }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, body: d }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function checkService(svc) {
  try {
    const r = await httpGet(`http://127.0.0.1:${svc.port}${svc.path}`);
    return r.status >= 200 && r.status < 400;
  } catch { return false; }
}

async function cmdStatus() {
  console.log(`\n🐾 Poke Labs Service Status v${VERSION}\n`);
  let up = 0;
  for (const svc of SERVICES) {
    const ok = await checkService(svc);
    if (ok) up++;
    console.log(`  ${ok ? '✅' : '❌'} ${svc.name.padEnd(20)} :${svc.port}`);
  }
  console.log(`\n  ${up}/${SERVICES.length} services online\n`);
}

async function cmdPreview(url) {
  if (!url) { console.log('Usage: poke preview <url>'); return; }
  try {
    const r = await httpGet(`http://127.0.0.1:8766/api/preview`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    // Actually use POST properly
    const data = JSON.stringify({ url });
    const result = await new Promise((resolve, reject) => {
      const req = http.request('http://127.0.0.1:8766/api/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': data.length },
        timeout: 10000,
      }, res => {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => resolve(d));
      });
      req.on('error', reject);
      req.write(data);
      req.end();
    });
    const j = JSON.parse(result);
    console.log(`\n🔗 ${j.title || 'No title'}`);
    console.log(`   ${j.description || 'No description'}`);
    console.log(`   Image: ${j.image || 'None'}`);
    console.log(`   Site: ${j.site_name || new URL(url).host}\n`);
  } catch (e) {
    console.log(`\n⚠️  Preview service unavailable: ${e.message}`);
    console.log(`   Make sure the Poke Labs Site is running on :8766\n`);
  }
}

async function cmdRepos() {
  console.log('\n📦 Poke Labs Repositories:\n');
  try {
    const r = await httpGet(`${BASE}/users/pokelabshq/repos?per_page=30&sort=updated`);
    const repos = JSON.parse(r.body);
    if (Array.isArray(repos)) {
      repos.forEach(r => {
        const lang = r.language || '—';
        const stars = r.stargazers_count || 0;
        const updated = r.updated_at ? r.updated_at.slice(0, 10) : '—';
        console.log(`  ${r.name.padEnd(20)} ${lang.padEnd(12)} ⭐${stars}  ${updated}`);
        if (r.description) console.log(`    ${r.description}`);
      });
    } else {
      console.log('  (API rate limited or unavailable)');
    }
  } catch (e) {
    console.log(`  ⚠️  GitHub API error: ${e.message}`);
  }
  console.log('');
}

async function cmdDeps() {
  console.log('\n📋 Dependency Check:\n');
  const dirs = [
    { name: 'poke', path: '/home/alx/repo-work/poke' },
    { name: 'council', path: '/home/alx/repo-work/council' },
  ];
  for (const dir of dirs) {
    try {
      const out = execSync('npm outdated --json 2>/dev/null || true', {
        cwd: dir.path, timeout: 15000, encoding: 'utf8'
      });
      const pkgs = JSON.parse(out || '{}');
      const keys = Object.keys(pkgs);
      if (keys.length === 0) {
        console.log(`  ✅ ${dir.name}: All dependencies up to date`);
      } else {
        console.log(`  ⚠️  ${dir.name}: ${keys.length} outdated packages`);
        keys.slice(0, 5).forEach(k => {
          const p = pkgs[k];
          console.log(`     ${k}: ${p.current} → ${p.latest}`);
        });
        if (keys.length > 5) console.log(`     ... and ${keys.length - 5} more`);
      }
    } catch (e) {
      console.log(`  ⚠️  ${dir.name}: Could not check (${e.message.slice(0, 60)})`);
    }
  }
  console.log('');
}

async function cmdDeploy() {
  console.log('\n🚀 Deploying Poke Labs services...\n');
  try {
    execSync('bash /home/alx/start.sh', { timeout: 30000, stdio: 'inherit' });
  } catch (e) {
    console.log(`\n⚠️  Deploy error: ${e.message}`);
    console.log('   Services may need to be started manually.\n');
  }
}

function cmdHelp() {
  console.log(`
  @pokelabshq/poke-cli v${VERSION}

  Commands:
    status              Check all service health
    preview <url>       Preview a URL (title, desc, image)
    repos               List all pokelabshq repos
    deps                Check for outdated dependencies
    deploy              Restart all services
    help                Show this help

  Examples:
    poke status
    poke preview https://github.com
    poke deps
    poke deploy
  `);
}

// Main
const [,, cmd, ...args] = process.argv;
const commands = { status: cmdStatus, preview: cmdPreview, repos: cmdRepos, deps: cmdDeps, deploy: cmdDeploy, help: cmdHelp };
const fn = commands[cmd] || cmdHelp;
fn(args[0]).catch(e => { console.error('Error:', e.message); process.exit(1); });
