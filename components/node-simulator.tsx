"use client";

import { useEffect, useState } from "react";
import { Activity, Radio } from "lucide-react";

type NodeReading = {
  id: string;
  name: string;
  base: number;
  min: number;
  max: number;
  ms: number;
};

const INITIAL_NODES: NodeReading[] = [
  { id: "JKT-01", name: "Node-Jakarta", base: 2, min: 1, max: 3, ms: 2 },
  { id: "SBY-01", name: "Node-Surabaya", base: 4, min: 4, max: 5, ms: 4 },
  { id: "MDN-01", name: "Node-Medan", base: 3, min: 2, max: 3, ms: 3 },
  { id: "DPS-01", name: "Node-Bali", base: 5, min: 4, max: 6, ms: 5 },
];

function tierFor(ms: number) {
  return ms <= 3 ? "Ultra Fast" : "Optimal";
}

function signalFor(ms: number) {
  return Math.max(18, Math.min(100, Math.round(((8 - ms) / 7) * 100)));
}

export function NodeSimulator() {
  const [nodes, setNodes] = useState(INITIAL_NODES);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNodes((current) =>
        current.map((node) => {
          const delta = Math.floor(Math.random() * 3) - 1;
          const ms = Math.min(node.max, Math.max(node.min, node.base + delta));
          return { ...node, ms };
        }),
      );
      setCycles((value) => value + 1);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  const average =
    nodes.reduce((total, node) => total + node.ms, 0) / nodes.length;

  return (
    <div className="relative overflow-hidden rounded-3xl glow-card p-5 shadow-[0_0_40px_rgba(239,68,68,0.12)] sm:p-7">
      <div
        className="scanline pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-gold/10 to-transparent"
        aria-hidden="true"
      />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="flex items-center gap-2 font-display text-[11px] tracking-[0.22em] text-gold">
            <Radio className="size-3.5" aria-hidden="true" />
            LIVE TELEMETRY
          </p>
          <h2
            id="latency-heading"
            className="mt-2 font-display text-2xl text-white sm:text-3xl"
          >
            Latensi Server Node Regional
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
            Simulator status node GOAT188. Angka awal mengikuti benchmark
            gateway, lalu berfluktuasi di sekitar jalur Ultra Fast dan Optimal.
          </p>
        </div>
        <div className="rounded-2xl border border-gold/30 bg-void/70 px-4 py-3 text-right">
          <p className="flex items-center justify-end gap-2 text-[11px] tracking-widest text-emerald-300">
            <Activity className="size-3.5" aria-hidden="true" />
            MESH ONLINE
          </p>
          <p className="mt-1 font-mono text-2xl text-gold">
            {average.toFixed(1)}
            <span className="text-sm text-zinc-400">ms avg</span>
          </p>
        </div>
      </div>

      <ul className="relative mt-6 space-y-3" aria-label="Ping node regional">
        {nodes.map((node) => {
          const tier = tierFor(node.ms);
          const ultra = tier === "Ultra Fast";
          return (
            <li
              key={node.id}
              className="rounded-2xl border border-white/10 bg-void/75 px-4 py-3 backdrop-blur-md"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium text-white">
                  {node.name}{" "}
                  <span className="font-mono text-sm text-zinc-400">
                    ({node.id})
                  </span>
                </p>
                <p className="font-mono text-sm sm:text-base">
                  <span className={ultra ? "text-gold" : "text-fire"}>
                    {node.ms}ms
                  </span>{" "}
                  <span className="text-zinc-300">({tier})</span>
                </p>
              </div>
              <div
                className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"
                aria-hidden="true"
              >
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${
                    ultra ? "from-gold-deep to-gold" : "from-fire-deep to-fire"
                  }`}
                  style={{ width: `${signalFor(node.ms)}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <p className="relative mt-4 font-mono text-[11px] tracking-wide text-zinc-500">
        SIKLUS TELEMETRI {String(cycles).padStart(3, "0")} · MOCK NODE MESH 2027
      </p>
    </div>
  );
}
