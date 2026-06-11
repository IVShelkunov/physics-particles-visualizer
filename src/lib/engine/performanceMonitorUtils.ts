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