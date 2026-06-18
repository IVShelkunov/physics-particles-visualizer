import { Rectangle } from "./Rectangle";
import { IParticle } from "./types";

export class QuadTree {
    public particles: IParticle[] = [];
    public divided: boolean = false;
    public northwest: QuadTree | null = null;
    public northeast: QuadTree | null = null;
    public southwest: QuadTree | null = null;
    public southeast: QuadTree | null = null;
    constructor(
        public boundary: Rectangle,
        public capacity: number
    ) { }
    subdivide(): void {
        const newW = this.boundary.w / 2;
        const newH = this.boundary.h / 2;
        const NW = new Rectangle(this.boundary.x - newW, this.boundary.y - newH, newW, newH);
        const NE = new Rectangle(this.boundary.x + newW, this.boundary.y - newH, newW, newH);
        const SW = new Rectangle(this.boundary.x - newW, this.boundary.y + newH, newW, newH);
        const SE = new Rectangle(this.boundary.x + newW, this.boundary.y + newH, newW, newH);
        this.northwest = new QuadTree(NW, this.capacity);
        this.northeast = new QuadTree(NE, this.capacity);
        this.southwest = new QuadTree(SW, this.capacity);
        this.southeast = new QuadTree(SE, this.capacity);
        this.divided = true;
    }
    insert(particle: IParticle): boolean {
        if (!this.boundary.contains(particle)) return false;
        if (this.particles.length < this.capacity && !this.divided) {
            this.particles.push(particle);
            return true;
        }
        if (!this.divided) {
            this.subdivide();
        }
        if (this.northwest?.insert(particle)) return true;
        if (this.northeast?.insert(particle)) return true;
        if (this.southwest?.insert(particle)) return true;
        if (this.southeast?.insert(particle)) return true;

        return false;
    }
    query(range: Rectangle, found: IParticle[] = []): IParticle[] {
        if (!this.boundary.intersects(range)) return found;
        this.particles.forEach(particle => {
            if (range.contains(particle)) {
                found.push(particle);
            }
        });
        if (this.divided) {
            this.northwest?.query(range, found);
            this.northeast?.query(range, found);
            this.southwest?.query(range, found);
            this.southeast?.query(range, found);
        }
        return found;
    }

}