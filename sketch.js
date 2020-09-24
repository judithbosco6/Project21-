
var wall,thickness; 
var bullet,speed,weight;
var deformation; 
function setup() 
 { 
  createCanvas(1600,400);
  bullet=createSprite(50,200,75,20);
  bullet.shapeColor="white"
  thickness=random(22,83); 
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=("green");
  speed=random(223,321); 
  weight=random(30,52); 
  bullet.velocityX=speed; 
  deformation = 0.5* weight* speed* speed/22509;
  
}
function draw() 
{ 
  background("black"); 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness *thickness *thickness);

    if(damage>=10)
    {
      wall.shapeColor="red";
    }

    if(damage<10)
    {
      wall.shapeColor="green";
    }
      bullet.visible=false;
  }
     
      drawSprites(); 
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  } 
  return false;
}




