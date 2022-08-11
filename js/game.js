class Game{
	static canvas=document.querySelector("#mycanvas")
	static ctx=Game.canvas.getContext("2d")
	constructor(){
	   
	    this.snake=new Snake()
	    this.food=new Food()
	    this.move()
	  	Game.int=setInterval(this.play,200)

	}

	create(){
		Game.ctx.fillStyle="black"
	    Game.ctx.fillRect(0,0,Game.canvas.width,Game.canvas.height)
		}

	play =()=>{
    	 this.create()
    	 this.snake.create()
    	 this.food.create()
    	 this.check()

    }
	move(){
		document.addEventListener("keydown",(e)=>{
			if(e.key=="ArrowRight" && this.snake.vx==0){
				this.snake.vx=1 
				this.snake.vy=0

			}
			else if(e.key=="ArrowLeft" && this.snake.vx==0){
				this.snake.vx=-1
				this.snake.vy=0
			}
			else if (e.key=="ArrowUp" && this.snake.vy==0) {
				this.snake.vx=0 
				this.snake.vy=-1
				
			}
			else if(e.key=="ArrowDown" && this.snake.vy==0){
				this.snake.vx=0
				this.snake.vy=1

			}
		})
	}

	check(){
		let head=this.snake.body[this.snake.body.length-1]
		if(head.x==this.food.x && head.y==this.food.y){
			this.snake.count++
			this.food=new Food()
		}
		for(let i=0;i<this.snake.body.length-1;i++){
			if(head.x==this.snake.body[i].x && head.y==this.snake.body[i].y ){
				clearInterval(Game.int)
				Game.ctx.fillStyle="red"
				Game.ctx.font ="60px cursive"
				Game.ctx.fillText("GAME over",200,200)
			}
		}
    

		if(this.snake.x<0){
    		this.snake.x=Game.canvas.width/20
	    }
	    if(this.snake.y<0){
	    	this.snake.y=Game.canvas.height/20
	    }
		if(this.snake.x*20>Game.canvas.width){
			this.snake.x=0
		}
		if(this.snake.y*20>Game.canvas.height){
			this.snake.y=0
		}
    }
}

let game= new Game()
const pause=document.querySelector(".pause")
pause.addEventListener("click",function(){
	clearInterval(Game.int)
	if(this.classList.contains("active")){
		Game.int=setInterval(game.play, 100)
		this.innerHTML="Pause"
	}
	else{
		clearInterval(Game.int)
		this.innerHTML="play"
	}
	this.classList.toggle("active")
})


function random(a){

           return Math.round(Math.random()*a)
     }
function randomColor(){
           return `rgb(${random(255)},${random(255)},${random(255)})`
     }
