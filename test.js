#!/usr/bin/env node
const assert = require('assert');
const { execSync } = require('child_process');

let passed = 0, failed = 0;

function test(name, fn) {
    try { fn(); passed++; console.log(`✅ ${name}`); }
    catch(e) { failed++; console.log(`❌ ${name}: ${e.message}`); }
}

test('help command works', () => {
    const out = execSync('node poke.js help').toString();
    assert(out.includes('status'));
    assert(out.includes('preview'));
});

test('status command runs without crash', () => {
    execSync('node poke.js status', { timeout: 10000 });
});

test('preview returns data for example.com', () => {
    const out = execSync('node poke.js preview https://example.com', { timeout: 15000 }).toString();
    assert(out.length > 10, 'should return some output');
});

test('repos command runs', () => {
    execSync('node poke.js repos', { timeout: 15000 });
});

test('deps command runs', () => {
    execSync('node poke.js deps', { timeout: 10000 });
});

console.log(`\n${passed} passed, ${failed} passed`);
process.exit(failed > 0 ? 1 : 0);
