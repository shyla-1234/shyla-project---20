var wall,car;



function setup() {
  createCanvas(800,400);
  wall=createSprite(400, 200, 50, 50);
  wall.shapeColor="green";
  car=createSprite(300,100,50,50);
  car.shapeColor="green";
  wall.debug=true;
  car.debug=true;
}

function draw() {
  background(255,255,255);  
  car.x=World.mouseX;
  car.y=World.mouseY;
  if(car.x-wall.x>wall.width/2+car.width/2 && 
    wall.x-car.x>wall.width/2+car.width/2 &&  
    car.y-wall.y>wall.heigth/2+car.y/2 &&
    wall.y-car.y>wall.heigth/2+car.y/2 &&
    
    ){
      walla.shapeColor="red";
      car.shapeColor="red";
    }
 else {
  car.shapeColor="green";
  wall.shapeColor="green";
   
 }

 
  drawSprites();
}