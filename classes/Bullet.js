class Bullet{
    constructor(canvas) {
        this.canvas = canvas;
        this.x = 0;
        this.y = 0;
        this.speed = 10;
        this.width = 10;
        this.height = 10;
        this.direction = "ArrowRight";

    }

    render() {
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }

    

    move() {
        switch (this.direction) {
            case "a":
            case "ArrowLeft":
            case "left":
                this.x -= this.speed;
                break;
            case "d":
            case "ArrowRight":
            case "right":
                this.x += this.speed;
                break;
            case "w":
            case "ArrowUp":
            case "up":
                this.y -= this.speed;
                break;
            case "s":
            case "ArrowDown":
            case "down":
                this.y += this.speed;
                break;
            default:
                break;
        }
    }
}