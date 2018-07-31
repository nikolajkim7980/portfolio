let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height= window.innerHeight
let pen = canvas.getContext('2d');

let player = {
    x: canvas.width/2,
    y: canvas.height/2,
    vx: 0.1,
    vy: 0.1,
    radius: 10,
    color: 'skyblue',
    init: function(){
        document.addEventListener('keydown',function(){
            if (event.keyCode === 37) {
                this.vx -= 0.5;
            }
            if (event.keyCode === 38) {
                this.vy -= 0.5;
            }
            if (event.keyCode === 39) {
                this.vx += 0.5;
            }
            if (event.keyCode === 40) {
                this.vy += 0.5;
            }
            this.vx = Math.min(Math.max(this.vx, -1), 1);
            this.vy = Math.min(Math.max(this.vy, -1), 1);
        }.bind(this));
    },
    draw: function(){
        pen.beginPath();
        pen.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        pen.fillStyle = this.color;
        pen.fill();
    },
    move: function(){
        this.x+=this.vx;
        this.y+=this.vy;
    }
}

let enemy = Object.assign({}, player);
enemy.move = function(){
    if(this.x < player.x) this.x+=0.3;
    if(this.x > player.x) this.x-=0.3;
    if(this.y < player.y) this.y+=0.3;
    if(this.y > player.y) this.y-=0.3 ;
}
for(let i=0; i<=10; i++){
    let clone = Object.assign({}, enemy);
    clone.color = ['orange', 'green', 'red', 'blue', 'yellow'][i%5];
    clone.x = Math.random() * canvas.width;
    clone.y = Math.random() * canvas.height
    enemies.push(clone);
}


let game = function(){
    pen.clearRect(0, 0, canvas.width, canvas.height)
    player.draw();
    player.move();   
    enemies.forEach(function(enemy){
        enemy.draw();
        enemy.move();
    })
    requestAnimationFrame(game);
}
game();
player.init();