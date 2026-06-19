"use client";

import {
  checkParticlesCollision,
  collisionResolveParticles,
  drawParticle,
  generateParticles,
  updateParticlePhysics,
} from "@/lib/engine/particlesUtils";
import {
  drawPerformanceMonitor,
  drawQuadTree,
} from "@/lib/engine/performanceMonitorUtils";
import { QuadTree } from "@/lib/engine/QuadTree";
import { Rectangle } from "@/lib/engine/Rectangle";
import { IParticle } from "@/lib/engine/types";
import { useEffect, useRef } from "react";
interface CanvasContainerProps {
  isPaused: boolean;
  particleCount: number;
  isColliding: boolean;
  isGridVisible: boolean;
}
export default function CanvasContainer({
  isPaused,
  particleCount,
  isColliding,
  isGridVisible,
}: CanvasContainerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<IParticle[]>([]);
  const isPausedRef = useRef(false);
  const isCollidingRef = useRef(true);
  const isGridVisibleRef = useRef(true);
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);
  useEffect(() => {
    isCollidingRef.current = isColliding;
  }, [isColliding]);
  useEffect(() => {
    isGridVisibleRef.current = isGridVisible;
  }, [isGridVisible]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const width = canvas.width;
    const height = canvas.height;
    particlesRef.current = generateParticles(particleCount, width, height);
    let updateTimer = 0;
    let displayedFps = 0;
    let displayedCalc = 0;
    let fpsReadings: number[] = [];
    let calcReadings: number[] = [];
    let animationId: number;
    let lastTime: number = 0;
    const loop = (time: number) => {
      let dt = lastTime ? (time - lastTime) / 1000 : 0;
      lastTime = time;
      if (dt > 0.1) dt = 0;
      if (isPausedRef.current) {
        animationId = requestAnimationFrame(loop);
        return;
      }
      //Clear
      ctx.fillStyle = "rgba(15, 23, 42, 0.25)";
      ctx.fillRect(0, 0, width, height);
      const start = performance.now();
      const fps = 1 / dt;
      const rect = new Rectangle(width / 2, height / 2, width / 2, height / 2);
      const qTree = new QuadTree(rect, 4);
      particlesRef.current.forEach((particle) => {
        qTree.insert(particle);
      });
      //Update
      particlesRef.current.forEach((p1) => {
        const range = new Rectangle(p1.x, p1.y, p1.radius * 2, p1.radius * 2);
        const closeParticles = qTree.query(range);
        if (isCollidingRef.current) {
          for (const p2 of closeParticles) {
            if (p1 !== p2 && checkParticlesCollision(p1, p2)) {
              collisionResolveParticles(p1, p2);
            }
          }
        }
      });
      particlesRef.current.forEach((particle) => {
        updateParticlePhysics(particle, width, height, dt);
      });
      const end = performance.now();
      const calcTime = end - start;
      updateTimer += dt;
      if (dt > 0) {
        fpsReadings.push(fps);
      }
      calcReadings.push(calcTime);
      if (updateTimer > 0.3) {
        displayedFps =
          fpsReadings.reduce((acc, item) => acc + item, 0) / fpsReadings.length;
        displayedCalc =
          calcReadings.reduce((acc, item) => acc + item, 0) /
          calcReadings.length;
        fpsReadings = [];
        calcReadings = [];
        updateTimer = 0;
      }
      //Draw
      if (isGridVisibleRef.current) {
        drawQuadTree(ctx, qTree);
      }
      particlesRef.current.forEach((particle) => {
        drawParticle(ctx, particle);
      });
      drawPerformanceMonitor(ctx, 30, 30, 100, 60, displayedFps, displayedCalc);
      animationId = requestAnimationFrame(loop);
    };
    animationId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [particleCount]);

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
