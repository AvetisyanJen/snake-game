class Snake{
 constructor(){
 	this.x=0
 	this.y=0
 	this.vx=0
 	this.vy=1
 	this.radius=20
 	this.count=3
 	this.body=[]
 }
 create(){
 	this.body.push({
 		x:this.x,
 		y:this.y

 	})
 	this.x+=this.vx
 	this.y+=this.vy

 	for(let i=0;i<this.body.length;i++){
 		Game.ctx.beginPath()
 		Game.ctx.fillStyle="lime"
 		Game.ctx.fillRect(this.body[i].x*this.radius,this.body[i].y*this.radius,this.radius,this.radius)
 	}
 	while(this.body.length>=this.count){
 		this.body.shift()
 	}


 }
}