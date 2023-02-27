var canvas=new fabric.canvas('myCanvas');

ball_x=0;
ball_y=0;
hole_x=400;
hole_y=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.formURL("golf-h1.png", function(img){
		hole_obj =img;
		hole_obj.scaleTowidth(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		})
	})
	new_image();
}

function new_image()
{
	fabric.Image.formURL("ball.png", function(img){
		ball_obj =Img;
		ball_obj.scaletoWidth(50);
		ball_obj.scaletoHeight(50);
		ball_objset({
			top:ball_y,
			left:hole_x
		})
		canvas.add(ball_obj)
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((ball_x==hole_x)(ball_y==hole_y)){
		canvas.remove(ball_Obj)
	}
	document.getElementById("hd3").innterHTML="you have hit the goal!",
	document.getElementById("myCanvas").style.borderColor="red";
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		if(ball_y <=450){
		ball_y = ball_y + block_image_height;
		console.log("block mgae height=" + block_image_height);
		console.log("when down arrow key is pressed,X = " + ball_x ", y ="+ball_y);
		canvas.remove(ball_obj);
		newimage();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

