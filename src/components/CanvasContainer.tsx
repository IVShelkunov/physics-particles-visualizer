"use client";

import { useEffect, useRef } from "react";

export default function CanvasContainer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#6366f1";
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  return (
    <div className="relative border border-slate-800 rounded-lg overflow-hidden bg-slate-900">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="block max-w-full h-auto"
      />
    </div>
  );
}
