"use client";

import {
  checkParticlesCollision,
  collisionResolveParticles,
  drawParticle,
  generateParticles,
  updateParticlePhysics,
} from "@/lib/engine/particlesUtils";
import { IParticle } from "@/lib/engine/types";
import { useEffect, useRef } from "react";

export default function CanvasContainer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<IParticle[]>([]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const width = canvas.width;
    const height = canvas.height;
    particlesRef.current = generateParticles(50, width, height);
    let animationId: number;
    let lastTime: number = 0;
    const loop = (time: number) => {
      let dt = lastTime ? (time - lastTime) / 1000 : 0;
      lastTime = time;
      if (dt > 0.1) dt = 0;
      ctx.fillStyle = "rgba(15, 23, 42, 0.25)";
      ctx.fillRect(0, 0, width, height);
      particlesRef.current.forEach((particle) => {
        updateParticlePhysics(particle, width, height, dt);
      });
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const isCollision = checkParticlesCollision(
            particlesRef.current[i],
            particlesRef.current[j],
          );
          if (isCollision) {
            collisionResolveParticles(
              particlesRef.current[i],
              particlesRef.current[j],
            );
          }
        }
      }
      particlesRef.current.forEach((particle) => {
        drawParticle(ctx, particle);
      });
      animationId = requestAnimationFrame(loop);
    };
    animationId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animationId);
    };
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
