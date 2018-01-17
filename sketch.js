var x= -100;

function setup() {
 var myCanvas = createCanvas (800,250);
 colorMode(HSB, 800, 100, 100);
 myCanvas.parent ('mySketch');
 background(0);


}

function draw (){
  noCursor();

  if(x<810){
  noFill();
  stroke(x, 3*x, 1000*x)
  strokeWeight(40);
  ellipse(mouseX, mouseY, x, x);
  x+=.5;
}else{
  x=0;
}



// if(x<810){
//   noFill();
//   stroke(x, 3*x, 1000*x)
//   strokeWeight(40);
//   ellipse(x, -125, x, x);
//   x+=10;
// }else{
//   x=0;

}
