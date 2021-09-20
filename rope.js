class Rope{

	constructor(body1,body2, offsetX)
	{

		var options = {
			bodyA: body1,
			bodyB: body2
			//pointB:{x:this.pointA, y: this.pointB}
		}
	//create rope constraint here
		this.rope = Constraint.create(options);
		World.add(world,this.rope);
		this.offsetX = offsetX;
	}

	

    //create display() here 
	display() {
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2);
		line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y);
	}
}
