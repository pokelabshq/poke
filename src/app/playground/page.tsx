"use client";

import { useState } from "react";

type Service = {
  name: string;
  endpoint: string;
  method: string;
  description: string;
  sampleBody?: string;
};

const SERVICES: Service[] = [
  {
    name: "Link Preview",
    endpoint: "POST /api/preview",
    method: "POST",
    description: "Extract title, description, and image from any URL",
    sampleBody: '{"url": "https://github.com"}',
  },
  {
    name: "Email Validator",
    endpoint: "POST /api/validate",
    method: "POST",
    description: "Validate email format, MX records, and disposable detection",
    sampleBody: '{"email": "test@example.com"}',
  },
  {
    name: "QR Generator",
    endpoint: "POST /api/qr",
    method: "POST",
    description: "Generate QR codes from any text or URL",
    sampleBody: '{"text": "https://pokelabs.org"}',
  },
  {
    name: "Hash Generator",
    endpoint: "POST /api/hash",
    method: "POST",
    description: "Generate SHA-256, MD5, or other hashes from input",
    sampleBody: '{"input": "hello world", "algorithm": "sha256"}',
  },
  {
    name: "JSON Formatter",
    endpoint: "POST /api/format",
    method: "POST",
    description: "Format, validate, and minify JSON",
    sampleBody: '{"json": "{\\"name\\":\\"poke\\"}", "action": "format"}',
  },
  {
    name: "Base64 Encoder",
    endpoint: "POST /api/base64",
    method: "POST",
    description: "Encode or decode Base64 strings",
    sampleBody: '{"input": "Hello World", "action": "encode"}',
  },
];

export default function Playground() {
  const [selected, setSelected] = useState(0);
  const [body, setBody] = useState(SERVICES[0].sampleBody || "");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const service = SERVICES[selected];

  const runRequest = async () => {
    setLoading(true);
    setResponse(null);
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 800));
      const mockResponses: Record<string, object> = {
        "Link Preview": {
          title: "GitHub: Let's build from here",
          description: "GitHub is where over 100 million developers shape the future of software.",
          image: "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
          site_name: "GitHub",
        },
        "Email Validator": {
          email: "test@example.com",
          valid: true,
          format: true,
          mx: true,
          disposable: false,
          score: 0.95,
        },
        "QR Generator": {
          success: true,
          qr_code: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...",
          size: "256x256",
        },
        "Hash Generator": {
          input: "hello world",
          algorithm: "sha256",
          hash: "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
        },
        "JSON Formatter": {
          formatted: '{\n  "name": "poke"\n}',
          valid: true,
          size_bytes: 18,
        },
        "Base64 Encoder": {
          input: "Hello World",
          action: "encode",
          result: "SGVsbG8gV29ybGQ=",
        },
      };
      setResponse(
        JSON.stringify(mockResponses[service.name] || { ok: true }, null, 2)
      );
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-sm font-mono font-bold tracking-tight">
            poke<span className="text-[#555]">labs</span>
          </a>
          <div className="flex items-center gap-8">
            <a href="/" className="text-xs font-mono text-[#666] hover:text-white transition-colors">home</a>
            <a href="/playground" className="text-xs font-mono text-white transition-colors">playground</a>
            <a href="https://github.com/pokelabshq" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#666] hover:text-white transition-colors">github</a>
          </div>
        </div>
      </nav>

      <div className="pt-14 flex min-h-screen">
        <aside className="w-64 border-r border-[#1a1a1a] p-4 hidden md:block">
          <h2 className="text-xs font-mono text-[#555] uppercase tracking-wider mb-4">Services</h2>
          <div className="space-y-1">
            {ERVICES.map((s, i) => (
              <button
                key={s.name}
                onClick={() => {
                  setSelected(i);
                  setBody(s.sampleBody || "");
                  setResponse(null);
                  setError(null);
                }}
                className={`w-full text-left px-3 py-2 rounded text-sm font-mono transition-colors ${
                  selected === i
                    ? "bg-[#1a1a1a] text-white"
                    : "text-[#666] hover:text-white hover:bg-[#111]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    s.method === "POST" ? "bg-green-900/50 text-green-400" : "bg-blue-900/50 text-blue-400"
                  }`}>
                    {s.method}
                  </span>
                  {s.name}
                </div>
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-mono font-bold mb-2">API Playground</h1>
            <p className="text-sm font-mono text-[#666] mb-8">
              Try Poke Labs API services directly in your browser. No API key required for demo.
            </p>

            <div className="md:hidden mb-6">
              <select
                value={selected}
                onChange={(e) => {
                  const i = Number(e.target.value);
                  setSelected(i);
                  setBody(SERVICES[i].sampleBody || "");
                  setResponse(null);
                }}
                className="w-full bg-[#111] border border-[#222] rounded px-3 py-2 text-sm font-mono text-white"
              >
                {ERVICES.map((s, i) => (
                  <option key={s.name} value={i}>{s.name}</option>
                ))}
              </select>
            </div>

            <div className="border border-[#222] rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-xs font-mono px-2 py-1 rounded ${
                  service.method === "POST" ? "bg-green-900/50 text-green-400" : "bg-blue-900/50 text-blue-400"
                }`}>
                  {service.method}
                </span>
                <code className="text-sm font-mono text-white">{service.endpoint}</code>
              </div>
              <p className="text-sm font-mono text-[#888] mb-4">{service.description}</p>

              <div className="mb-4">
                <label className="text-xs font-mono text-[#555] uppercase tracking-wider block mb-2">
                  Request Body
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={4}
                  className="w-full bg-[#0a0a0a] border border-[#222] rounded px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-[#444] resize-none"
                  spellCheck={false}
                />
              </div>

              <button
                onClick={runRequest}
                disabled={loading}
                className="bg-white text-black px-6 py-2 rounded text-sm font-mono font-bold hover:bg-[#ddd] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>
            </div>

            {(response || error) && (
              <div className="border border-[#222] rounded-lg p-6">
                <h3 className="text-xs font-mono text-[#555] uppercase tracking-wider mb-3">
                  Response
                </h3>
                <pre className={`text-sm font-mono whitespace-pre-wrap ${
                  error ? "text-red-400" : "text-green-400"
                }`}>
                  {error || response}
                </pre>
              </div>
            )}

            <div className="mt-10 border-t border-[#1a1a1a] pt-6">
              <h3 className="text-xs font-mono text-[#555] uppercase tracking-wider mb-3">
                About the API
              </h3>
              <p className="text-sm font-mono text-[#666] leading-relaxed">
                All Poke Labs services are available as REST APIs. Free tier includes 3 requests/day per service.
                For unlimited access, connect your wallet and pay per request via x402 on Base.
                Full documentation at{" "}
                <code className="text-[#888]">docs.pokelabs.org</code> (coming soon).
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
