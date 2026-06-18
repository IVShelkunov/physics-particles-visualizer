import { QuadTree } from "./QuadTree";

export const drawText = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    fps: number,
    calc: number,

) => {
    ctx.save();
    ctx.fillStyle = '#f09424';
    ctx.textAlign = 'center'
    ctx.font = "12px monospace";
    ctx.fillText(`FPS:${fps.toFixed(2)}`, x, y);
    ctx.fillText(`Calc:${calc.toFixed(2)}`, x, y + 18);
    ctx.restore();
}
export const drawPerformanceMonitor = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    fps: number,
    calc: number
) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = 'rgba(25, 23, 42, 0.6)';
    ctx.fillRect(0, 0, 100, 72);
    drawText(ctx, w / 2, h / 2, fps, calc);
    ctx.restore();
}
export const drawQuadTree = (ctx: CanvasRenderingContext2D, qTree: QuadTree) => {
    const left = qTree.boundary.x - qTree.boundary.w;
    const top = qTree.boundary.y - qTree.boundary.h;
    const width = qTree.boundary.w * 2;
    const height = qTree.boundary.h * 2;
    ctx.save();
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
    ctx.strokeRect(left, top, width, height);
    if (qTree.divided) {
        if (qTree.northwest) drawQuadTree(ctx, qTree.northwest);
        if (qTree.northeast) drawQuadTree(ctx, qTree.northeast);
        if (qTree.southwest) drawQuadTree(ctx, qTree.southwest);
        if (qTree.southeast) drawQuadTree(ctx, qTree.southeast);
    }
    ctx.restore();
}