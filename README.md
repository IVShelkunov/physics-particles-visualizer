# Physics Particles Visualizer

> High-performance 2D physics simulation optimized with recursive space partitioning (Quadtree) and rendered directly via HTML5 Canvas API in a Next.js environment.

[🔗 Live Demo on Vercel](https://physics-particles-visualizer.vercel.app/)

![Physics particles and circuit board visualizer](https://github.com/user-attachments/assets/064b0820-4a92-429c-b47c-d94142b3c1ec)

---

## 📌 Project Overview

This project is a high-frequency 2D physics simulation that models elastic collisions between particles. It serves as a visual demonstration of spatial partitioning. 

Instead of checking every particle against every other particle (which runs in **$O(N^2)$** time complexity and lags quickly), this engine utilizes a custom-built, recursive **Quadtree** data structure to group particles dynamically, reducing collision detection complexity to **$O(N \log N)$**.

The landing page features a decorative, procedurally generated circuit board canvas background with glowing electric pulses, designed in a modern dark-themed SaaS aesthetic.

---

## ⚡ The Technical Challenge: $O(N^2)$ vs $O(N \log N)$

In standard collision detection (the "naive" approach), we check every particle pair. For $N$ particles, this requires $\frac{N(N-1)}{2}$ checks.
* At $N = 100$ particles: **~4,950** checks (0.1ms frame budget).
* At $N = 1000$ particles: **~499,500** checks (frame rate drops to ~30 FPS).
* At $N = 2000$ particles: **~1,999,000** checks (the browser thread freezes).

By introducing a **Quadtree**, we recursively divide the 2D canvas into four quadrants whenever a sector gets overcrowded. To check a collision, each particle queries the tree for neighboring nodes within its immediate collision range. This shrinks the search pool to just 2-5 local candidates.

### Performance Benchmarks (at 1000 Particles)

| Algorithm | Frame Calculation Time (Calc Time) | Frame Stability (FPS) |
| :--- | :---: | :---: |
| **Naive $O(N^2)$** | ~15.4 ms | Framerate drops below 30 FPS |
| **Quadtree $O(N \log N)$** | **~1.2 ms** | **Locked at 60 FPS** |

![Big O Complexity Graph](https://github.com/user-attachments/assets/01855cd7-5b39-49fe-9ad4-4f86ae84e70f)

---

## 🌟 Key Features

* **Interactive Physics Engine:** Real-time elastic collisions of up to 2000 particles running smoothly in the browser.
* **Recursive Quadtree Optimization:** Live grid rendering (toggled via HUD controls) showing the spatial partitioning lines split and merge.
* **Sleek Control Panel:** Dashboard controls to toggle Play/Pause, adjust particle count (10 to 1000), enable/disable physics collisions, and toggle the Quadtree grid overlay.
* **High-Precision HUD:** Monospace performance monitor measuring actual calculations overhead (`performance.now()`) and averaged FPS.
* **Procedural Circuit Background:** Beautiful generative circuit board traces flowing from a central CPU node, equipped with neon cyan glow effects and custom Base64 SVG noise texture.


![Simulation Workspace and Controls](https://github.com/user-attachments/assets/064b0820-4a92-429c-b47c-d94142b3c1ec)

---

## 🛠️ Architecture & Tech Stack

This project was built from scratch with an emphasis on modularity, clean code, and separation of concerns (decoupling static copy, engine math, and React view logic).

* **Next.js (App Router):** Fast, server-side rendered landing page with dynamic, client-side only routing for high-frequency Canvas animation loops (bypassing SSR hydration mismatches).
* **TypeScript:** Strict type safety across the physics engine math (Rectangle, Quadtree, Particles) and configuration constants.
* **Tailwind CSS + clsx:** Modern glassmorphic styles, transitions, and unified color tokens with clean class name merging.
* **HTML5 Canvas API:** Low-level 2D rendering pipeline communicating directly with the GPU, achieving minimal bundle size.

### Project Directory Layout

```text
/src
  /app                       # Next.js App Router structure
    /simulation              # Interactive app dashboard
    page.tsx                 # Main landing page (Server Component)
  /components
    /shared                  # Decomposed structural components (TechStack, SvgChart, Footer)
    /ui                      # Tiny isolated UI elements (ActionButton, ControlWidget, etc.)
  /lib
    /circuit                 # Logic for the background generative circuit board
    /engine                  # Logic for the particle simulator, Quadtree, and geometry helpers
    /landing-page-data       # Isolated static text assets (Separation of Data and Markup)
```

---

## 🚀 Local Installation

Make sure you have [pnpm](https://pnpm.io/) installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/IVShelkunov/physics-particles-visualizer.git
   cd physics-particles-visualizer
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Build the production output:**
   ```bash
   pnpm build
   ```
