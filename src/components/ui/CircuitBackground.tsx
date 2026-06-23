"use client";

import { createLine, drawLine, lineManager } from "@/lib/circuit/circuitUtils";
import { ILine } from "@/lib/circuit/types";
import { useEffect, useRef } from "react";

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    let lines: ILine[] = [];
    for (let i = 0; i < 50; i++) {
      lines.push(createLine(canvas.width, canvas.height));
    }
    let animationId: number;
    let lastTime: number = 0;
    const loop = (time: number) => {
      let dt = lastTime ? (time - lastTime) / 1000 : 0;
      lastTime = time;
      if (dt > 0.1) dt = 0;
      //Clear
      const width = canvas.width;
      const height = canvas.height;
      ctx.fillStyle = "#020618";
      ctx.fillRect(0, 0, width, height);
      //Update
      lines = lineManager(lines, dt);
      while (lines.length < 50) {
        lines.push(createLine(width, height));
      }
      //Draw
      lines.forEach((line) => {
        drawLine(ctx, line, width, height);
      });
      console.log(lines);
      animationId = requestAnimationFrame(loop);
    };
    animationId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
      <canvas ref={canvasRef} />
    </div>
  );
}
