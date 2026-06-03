"use client";

import { useState, useEffect } from "react";

interface ServiceHealth {
  name: string;
  port: number;
  status: "up" | "down" | "unknown";
  latency?: number;
}

interface RepoInfo {
  name: string;
  stars: number;
  openIssues: number;
  language: string;
  updatedAt: string;
}

const SERVICES = [
  { name: "link-preview", port: 8765 },
  { name: "keyword", port: 8766 },
  { name: "summarize", port: 8767 },
  { name: "qr", port: 8768 },
  { name: "dns", port: 8769 },
  { name: "portal", port: 8770 },
  { name: "color", port: 8771 },
  { name: "url", port: 8772 },
  { name: "template-gen", port: 8773 },
  { name: "health-agg", port: 8774 },
  { name: "json2ts", port: 8775 },
  { name: "github-webhook", port: 8776 },
];

const REPOS = ["pokelabshq/council", "pokelabshq/poke"];

export default function StatusPage() {
  const [services, setServices] = useState<ServiceHealth[]>([]);
  const [repos, setRepos] = useState<RepoInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch repo info from GitHub API (client-side, no auth needed for public repos)
    Promise.all(
      REPOS.map(async (repo) => {
        try {
          const r = await fetch(`https://api.github.com/repos/${repo}`);
          const d = await r.json();
          return {
            name: d.full_name,
            stars: d.stargazers_count,
            openIssues: d.open_issues_count,
            language: d.language,
            updatedAt: d.updated_at,
          };
        } catch {
          return { name: repo, stars: 0, openIssues: 0, language: "?", updatedAt: "" };
        }
      })
    ).then(setRepos);

    // Check service health via gateway
    Promise.all(
      SERVICES.map(async (svc) => {
        const start = Date.now();
        try {
          const r = await fetch(`http://localhost:8700/${svc.name}/api/health`, {
            signal: AbortSignal.timeout(3000),
          });
          const latency = Date.now() - start;
          return { ...svc, status: r.ok ? "up" : "down" as const, latency };
        } catch {
          return { ...svc, status: "down" as const };
        }
      })
    ).then((results) => {
      setServices(results);
      setLoading(false);
    });
  }, []);

  const upCount = services.filter((s) => s.status === "up").length;

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-sm font-mono font-bold tracking-tight">
            poke<span className="text-[#555]">labs</span>
          </a>
          <div className="flex items-center gap-8">
            <a href="/" className="text-xs font-mono text-[#666] hover:text-white transition-colors">home</a>
            <a href="https://github.com/pokelabshq" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#666] hover:text-white transition-colors">github</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl font-mono font-bold mb-2">System Status</h1>
        <p className="text-[#666] font-mono text-sm mb-8">
          {loading ? "Checking..." : `${upCount}/${services.length} services online`}
        </p>

        {/* Services */}
        <div className="mb-12">
          <h2 className="text-lg font-mono font-bold mb-4 text-[#00d4ff]">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((svc) => (
              <div
                key={svc.name}
                className={`border rounded-lg p-4 ${
                  svc.status === "up"
                    ? "border-[#22c55e]/30 bg-[#22c55e]/5"
                    : "border-[#ef4444]/30 bg-[#ef4444]/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold">{svc.name}</span>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded ${
                      svc.status === "up"
                        ? "bg-[#22c55e]/20 text-[#22c55e]"
                        : "bg-[#ef4444]/20 text-[#ef4444]"
                    }`}
                  >
                    {svc.status === "up" ? "UP" : "DOWN"}
                  </span>
                </div>
                <div className="text-[#555] text-xs font-mono mt-1">
                  port {svc.port}
                  {svc.latency ? ` · ${svc.latency}ms` : ""}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Repos */}
        <div>
          <h2 className="text-lg font-mono font-bold mb-4 text-[#00d4ff]">Repositories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#1a1a1a] rounded-lg p-4 hover:border-[#333] transition-colors"
              >
                <div className="font-mono text-sm font-bold mb-2">{repo.name}</div>
                <div className="flex gap-3 text-xs font-mono text-[#666]">
                  <span>⭐ {repo.stars}</span>
                  <span>📋 {repo.openIssues}</span>
                  <span>{repo.language}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-[#333] text-xs font-mono">
          Last checked: {new Date().toLocaleString()} · Poke Labs
        </div>
      </div>
    </div>
  );
}
