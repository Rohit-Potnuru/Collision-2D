class Wall {
    private start: Vector;
    private end: Vector;
    private color: string;
    private vel : Vector;
    private acc : Vector;
    private acceleration : number;
    private player : boolean;

    constructor(x1: number, y1: number, x2: number, y2: number, color = "yellow") {
        this.start = new Vector(x1, y1);
        this.end = new Vector(x2, y2);
        this.color = color;

        this.vel = new Vector(0, 0);
        this.acc = new Vector(0, 0);
        this.acceleration = 1;
        this.player = false;
        TOTALWALL.push(this);
    }

    drawWall(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
    }

    wallUnit() {
        return this.end.sub(this.start).unit();
    }
}