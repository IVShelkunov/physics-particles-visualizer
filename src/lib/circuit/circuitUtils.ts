import { ILine } from "./types"

export const createLine = (width: number, height: number): ILine => {
    const centerX = width / 2;
    const centerY = height / 2;
    const speed = 100;
    const diagSpeed = 70;

    // 1. choose a random spawn side
    const sides = ['top', 'left', 'right', 'down'] as const;
    const side = sides[Math.floor(Math.random() * sides.length)];

    let x = 0;
    let y = 0;
    let directions: { vx: number; vy: number }[] = [];

    // 2. calculate the parameters only for the selected side
    switch (side) {
        case 'top':
            x = centerX + (Math.random() - 0.5) * 600;
            y = centerY - 120;
            directions = [
                { vx: 0, vy: -speed },
                { vx: diagSpeed, vy: -diagSpeed },
                { vx: -diagSpeed, vy: -diagSpeed },
                { vx: speed, vy: 0 },
                { vx: -speed, vy: 0 },
            ];
            break;
        case 'left':
            x = centerX - 300;
            y = centerY + (Math.random() - 0.5) * 240;
            directions = [
                { vx: 0, vy: -speed },
                { vx: -diagSpeed, vy: -diagSpeed },
                { vx: -speed, vy: 0 },
                { vx: -diagSpeed, vy: diagSpeed },
                { vx: 0, vy: speed },
            ];
            break;
        case 'right':
            x = centerX + 300;
            y = centerY + (Math.random() - 0.5) * 240;
            directions = [
                { vx: 0, vy: -speed },
                { vx: diagSpeed, vy: -diagSpeed },
                { vx: speed, vy: 0 },
                { vx: diagSpeed, vy: diagSpeed },
                { vx: 0, vy: speed },
            ];
            break;
        case 'down':
            x = centerX + (Math.random() - 0.5) * 600;
            y = centerY + 120;
            directions = [
                { vx: -speed, vy: 0 },
                { vx: -diagSpeed, vy: diagSpeed },
                { vx: 0, vy: speed },
                { vx: diagSpeed, vy: diagSpeed },
                { vx: speed, vy: 0 },
            ];
            break;
    }
    // 3. select the speed only from the filtered set
    const randomDir = directions[Math.floor(Math.random() * directions.length)];

    return {
        x,
        y,
        vx: randomDir.vx,
        vy: randomDir.vy,
        length: 0,
        maxLength: Math.random() * (200 - 50) + 50,
        points: [{ x, y }],
        generation: 0
    };
}

export const updateLinePhysics = (line: ILine, dt: number) => {
    const step = 100 * dt;
    line.length += step;
    line.x += line.vx * dt;
    line.y += line.vy * dt;
    line.points.push({ x: line.x, y: line.y });
}
export const createBranch = (
    x: number,
    y: number,
    vx: number,
    vy: number,
    generation: number
): ILine => {
    return {
        x,
        y,
        vx,
        vy,
        length: 0,
        maxLength: Math.random() * (100 - 30) + 30,
        generation,
        points: [{ x, y }]
    };
};
export const lineManager = (lines: ILine[], dt: number) => {
    const nextLines: ILine[] = [];
    for (const line of lines) {
        if (line.length < line.maxLength) {
            updateLinePhysics(line, dt);
            nextLines.push(line);
        } else {
            if (line.generation < 2 && Math.random() < 0.5) {
                const vx1 = -line.vy;
                const vy1 = line.vx;

                const vx2 = line.vy;
                const vy2 = -line.vx;
                nextLines.push(createBranch(line.x, line.y, vx1, vy1, line.generation + 1));
                if (Math.random() < 0.5) {
                    nextLines.push(createBranch(line.x, line.y, vx2, vy2, line.generation + 1));
                }
            }
        }
    }
    return nextLines;
}
export const drawLine = (ctx: CanvasRenderingContext2D, line: ILine, width: number, height: number) => {
    ctx.save();
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 1;
    ctx.beginPath();
    line.points.forEach(point => {
        ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(line.x, line.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#67e8f9';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#06b6d4';
    ctx.fill();
    ctx.restore();
}