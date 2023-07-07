class Tank {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = 0;
        this.y = 0;
        this.speed = 10;
        this.width = 50;
        this.height = 50;
        this.direction = "";
        this.state = "idle";
        this.image = new Image();
        this.image.src = "assets/tank-up.png";
    }

    render() {
        // let canvas = document.getElementById(id);
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }

    renderImg() {
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.closePath();
    }

    move() {
        if (this.state == "idle") return;
        switch (this.direction) {
            case "a":
            case "ArrowLeft":
            case "left":
                this.image.src = "assets/tank-left.png";
                if (this.x + this.width <= 0)
                    this.x = this.canvas.width;
                this.x -= this.speed;
                break;
            case "d":
            case "ArrowRight":
            case "right":
                this.image.src = "assets/tank-right.png";
                if (this.x >= this.canvas.width)
                    this.x = 0 - this.width;
                this.x += this.speed;
                break;
            case "w":
            case "ArrowUp":
            case "up":
                this.image.src = "assets/tank-up.png";
                this.y -= this.speed;
                break;
            case "s":
            case "ArrowDown":
            case "down":
                this.image.src = "assets/tank-down.png";
                this.y += this.speed;
                break;
            case "e":
                this.x += this.speed;
                this.y -= this.speed;
                break;
            default:
                break;
        }
    }

    fire() {
        let bullet = new Bullet(this.canvas);
        bullet.direction = this.direction;
        bullet.x = this.x + (this.width / 2);
        bullet.y = this.y + (this.height / 2);
        return bullet;
    }
}