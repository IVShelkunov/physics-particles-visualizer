"use client";
import { useState } from "react";
import ControlWidget from "../ui/ControlWidget";
import CanvasContainer from "./CanvasContainer";

export default function SimulationManager() {
  const [isPaused, setIsPaused] = useState(false);
  const [particleCount, setParticleCount] = useState(100);
  const [isColliding, setIsColliding] = useState(true);
  return (
    <div className="flex flex-col lg:flex-row flex-1 justify-center gap-4 my-6">
      <ControlWidget
        isPaused={isPaused}
        onTogglePaused={setIsPaused}
        particleCount={particleCount}
        onChangeParticleCount={setParticleCount}
        isColliding={isColliding}
        onToggleColliding={setIsColliding}
      />
      <CanvasContainer
        isPaused={isPaused}
        particleCount={particleCount}
        isColliding={isColliding}
      />
    </div>
  );
}
