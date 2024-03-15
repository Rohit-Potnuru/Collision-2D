class Pacman {
    private pos: Vector;
    private r: number;
    private mouthAngle: number;
    private state: number;
    private speed: number;
    private color: string;
    private vel : Vector;
    private acc : Vector;
    private acceleration : number;
    private player : boolean;

    constructor(x: number, y: number, r: number, color = "yellow") {
        this.pos = new Vector(x, y);
        this.r = r;
        this.color = color;
        this.mouthAngle = Math.PI/10;
        this.state = 0;
        this.speed = 10;

        this.vel = new Vector(0, 0);
        this.acc = new Vector(0, 0);
        this.acceleration = 1;
        this.player = false;

        TOTALPACMAN.push(this);
    }

    drawPacMan(ctx: CanvasRenderingContext2D) {
        let dir = 0;
        if(this.vel.mag() !== 0) {
            dir = Math.acos(this.vel.x/this.vel.mag());
            if (this.vel.y < 0)
                dir = -dir;
        }

        ctx.beginPath();
        let angle = (this.state/this.speed)  * this.mouthAngle;
        ctx.arc(this.pos.x, this.pos.y, this.r, dir + angle, dir + 2 * Math.PI - angle);
        ctx.lineTo(this.pos.x - 5, this.pos.y);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
        this.state = (this.state + 1)% (3 * this.speed);
    }
}