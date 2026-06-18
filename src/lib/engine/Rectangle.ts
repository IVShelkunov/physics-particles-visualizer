import { IParticle } from "./types";

export class Rectangle {
    constructor(
        public x: number,
        public y: number,
        public w: number,
        public h: number
    ) { }
    contains(particle: IParticle): boolean {
        return particle.x > this.x - this.w && particle.x < this.x + this.w &&
            particle.y > this.y - this.h && particle.y < this.y + this.h;
    }
    intersects(range: Rectangle): boolean {
        return Math.abs(this.x - range.x) < this.w + range.w &&
            Math.abs(this.y - range.y) < this.h + range.h;
    }
}