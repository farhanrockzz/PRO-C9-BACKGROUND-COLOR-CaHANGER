
function setup() {
  createCanvas(400,400);

   

}

function draw() 
{
  background(70);

 if (keyIsDown(RIGHT_ARROW))
 {
   background('red');
 }


if (keyIsDown(LEFT_ARROW))
{
  background('green');
}


if (keyIsDown(UP_ARROW))
{
  background('yellow')
}

if (keyIsDown(DOWN_ARROW))
{
  background('pink')
}



}




