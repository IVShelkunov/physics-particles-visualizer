export interface IPoint {
    x: number;
    y: number;
}
export interface ILine {
    x: number;
    y: number;
    vx: number;
    vy: number;
    length: number;
    maxLength: number;
    points: IPoint[];
    generation: number;
}