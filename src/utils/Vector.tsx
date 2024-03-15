class Vector {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return [this.x, this.y];
    }

    add(vec: Vector) {
        return new Vector(this.x + vec.x, this.y + vec.y);
    }

    sub(vec: Vector) {
        return new Vector(this.x - vec.x, this.y - vec.y);
    }

    mul(val: number) {
        return new Vector(this.x * val, this.y * val);
    }

    mag() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    unit() { 
        if(this.mag() === 0)
            return new Vector(0, 0);
        else
            return new Vector(this.x/this.mag(), this.y/this.mag());
    }

    normal() {
        return new Vector(-this.y, this.x).unit();
    }

    static dot(vec1: Vector, vec2: Vector) {
        return vec1.x * vec2.x + vec1.y * vec2.y;
    }

    drawVector(ctx: CanvasRenderingContext2D, start: Vector, n = 1,  color = "white") {
        let [start_x, start_y] = start.getX();
        ctx.beginPath();
        ctx.moveTo(start_x, start_y);
        ctx.lineTo(start_x + this.x * n, start_y + this.y * n);
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}