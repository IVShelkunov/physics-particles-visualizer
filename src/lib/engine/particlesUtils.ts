import { IParticle } from "./types"

export const createParticle = (canvasWidth: number, canvasHeight: number): IParticle => {
    const colors = ["#818cf8", "#34d399", "#f472b6", "#fbbf24", "#60a5fa"];
    const radius = Math.random() * 3 + 2;
    return {
        x: Math.random() * (canvasWidth - radius * 2) + radius,
        y: Math.random() * (canvasHeight - radius * 2) + radius,
        vx: (Math.random() - 0.5) * 200,
        vy: (Math.random() - 0.5) * 200,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
    }
}

export const generateParticles = (count: number, canvasWidth: number, canvasHeight: number): IParticle[] => {
    const particles: IParticle[] = [];
    for (let i = 0; i < count; i++) {
        particles.push(createParticle(canvasWidth, canvasHeight));
    }
    return particles;
}

export const updateParticlePhysics = (
    particle: IParticle,
    width: number,
    height: number,
    dt: number
): void => {
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    if (particle.x - particle.radius < 0) {
        particle.vx = Math.abs(particle.vx);
    }
    if (particle.x > width - particle.radius) {
        particle.vx = -Math.abs(particle.vx);
    }
    if (particle.y - particle.radius < 0) {
        particle.vy = Math.abs(particle.vy);
    }
    if (particle.y > height - particle.radius) {
        particle.vy = - Math.abs(particle.vy);
    }

}
export const checkParticlesCollision = (p1: IParticle, p2: IParticle): boolean => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const distanceQuad = dx * dx + dy * dy;
    const isCollision = distanceQuad < (p1.radius + p2.radius) * (p1.radius + p2.radius);
    return isCollision;
}
export const collisionResolveParticles = (p1: IParticle, p2: IParticle) => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const overlap = p1.radius + p2.radius - distance;
    if (distance === 0) return;
    const nx = dx / distance;
    const ny = dy / distance;
    p1.x -= nx * (overlap / 2);
    p1.y -= ny * (overlap / 2);
    p2.x += nx * (overlap / 2);
    p2.y += ny * (overlap / 2);
    const kx = p1.vx - p2.vx;
    const ky = p1.vy - p2.vy;
    const p = kx * nx + ky * ny;
    if (p < 0) return;
    const impulse = p;
    p1.vx -= impulse * nx;
    p1.vy -= impulse * ny;
    p2.vx = impulse * nx;
    p2.vy = impulse * ny;
}
export const drawParticle = (
    ctx: CanvasRenderingContext2D,
    particle: IParticle
): void => {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
};

export const drawParticles = (ctx: CanvasRenderingContext2D, particles: IParticle[]) => {
    particles.forEach(particle => {
        drawParticle(ctx, particle);
    });
}