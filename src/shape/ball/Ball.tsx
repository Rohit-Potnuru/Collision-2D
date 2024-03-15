class Ball {
    private pos: Vector;
    private r: number;
    private mass: number;
    private elasticity: number;
    private inverseMass: number;
    private color: string;
    private vel : Vector;
    private acc : Vector;
    private acceleration : number;
    private player : boolean;

    constructor(x: number, 
                y: number, 
                r: number, 
                mass = 1, 
                elasticity  = ELASTICITY, 
                color = "yellow") {
        this.pos = new Vector(x, y);
        this.r = r; 
        this.mass = mass;
        this.elasticity = elasticity;
        this.inverseMass = 0;
        if(mass !== 0)
            this.inverseMass = 1/mass;
        this.color = color;

        this.vel = new Vector(0, 0);
        this.acc = new Vector(0, 0);
        this.acceleration = 1;
        this.player = false;
        TOTALBALL.push(this);
    }

    reposition() {
        this.vel = this.vel.add(this.acc);
        this.vel = this.vel.mul(1 - FRICTION);
        this.pos = this.pos.add(this.vel);

        this.pos.x = (this.pos.x + WIDTH)% WIDTH;
        this.pos.y = (this.pos.y + HEIGHT)% HEIGHT;
    }

    drawBall(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI);
        
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
    }

    display(ctx: CanvasRenderingContext2D) {
        this.acc.drawVector(ctx, this.pos, 100, "white");
        this.vel.drawVector(ctx, this.pos, 10, "red");

        // ctx.beginPath();
        // ctx.arc(800, 800, 40, 0, 2 * Math.PI);
        // ctx.fillStyle = "white";
        // ctx.fill();
        // ctx.strokeStyle = "black";
        // ctx.stroke();
        // this.acc.drawVector(800, 800, 10, "white");
        // this.vel.drawVector(800, 800, 20, "red");   
    }
}