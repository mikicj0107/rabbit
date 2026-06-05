let x1=20;
let y1=70;
let x2=790;
let y2=-80;
let x=0;
let y=350;
let x3=-850;
let y3=350;

function setup(){
  createCanvas(500,500);
  background(255);
  frameRate(80);
}

function draw() {
  background(120,220,230);
  if(x3>-100) {background(0);
  }
  
  noStroke();
  fill(100)
  rect(300,100,100,250);
  rect(200,150,100,200);
  rect(100,200,100,150);
  rect(0,150,100,200);
  rect(400,150,100,200);
  
  fill(200);
  rect(0,350,500,850);
  fill(250);
  rect(20,425,100,20);
  rect(180,425,100,20);
  rect(340,425,100,20);
  rect(500,425,100,20);
  
  rect(10,170,35,30);
  rect(10,210,35,30);
  rect(55,170,35,30);
  rect(55,210,35,30);
  rect(10,250,35,30);
  rect(55,250,35,30);
  
  rect(105,220,35,30);
  rect(155,220,35,30);
  rect(105,260,35,30);
  rect(155,260,35,30);

  rect(210,170,35,30);
  rect(210,210,35,30);
  rect(255,170,35,30);
  rect(255,210,35,30);
  rect(210,250,35,30);
  rect(255,250,35,30);
  
  rect(410,170,35,30);
  rect(410,210,35,30);
  rect(455,170,35,30);
  rect(455,210,35,30);
  rect(410,250,35,30);
  rect(455,250,35,30);
  
  rect(310,160,35,30);
  rect(310,200,35,30);
  rect(355,160,35,30);
  rect(355,200,35,30);
  rect(310,120,35,30);
  rect(355,120,35,30);
    
  
  x=x+ 4;
  if (x>width + 100) x=-1000
  rabit(x,y)
  
  x3=x3+ 4;
  if (x3>width + 150) x3=-950
  rabit2(x3,y3)
  
  x1=x1+ 4;
  y1=y1 - 0.8;
  if (x1>width + 900) x1=-200
  if (y1<height - 666) y1=155
  sun(x1,y1)
  
  x2=x2 + 4;
  y2=y2 - 0.8;
  if (x2>width + 900) x2=-200
  if (y2<height - 666) y2=155
  moon(x2,y2)

}


function sun(x1,y1) {
  noStroke();
  fill(250,100,100);
  ellipse(x1,y1,70,70);
  fill(0);
  ellipse(x1-10, y1-8, 7, 10);
  ellipse(x1+10, y1-8, 7, 10);
  noFill();
  stroke(0);
  arc(x1,y1-20,60,70,radians(70),radians(110));
}

function moon(x2,y2){
  noStroke();
  fill(250,200,0);
  ellipse(x2,y2,70,70);
  fill(0);
  ellipse(x2-10, y2-8, 7, 10);
  ellipse(x2+10, y2-8, 7, 10);
  noFill();
  stroke(0);
}


function rabit(x, y) {
  fill(250,100,150);
  ellipse(x,y,150,150);
  ellipse(x-40, y-80, 50, 100);
  ellipse(x+40, y-80, 50, 100);
  fill(250)
  ellipse(x+40, y-90, 30, 60);

  ellipse(x-40, y-90, 30, 60);
  fill(255,137,138)
  ellipse(x-37, y+25, 20, 20);
  ellipse(x+37, y+25, 20, 20);
  
  //目
  fill(0)
  ellipse(x-25, y-10, 30, 30);
  ellipse(x+25, y-10, 30, 30);
  ellipse(x,y+15,10,10);

  fill(250)
  ellipse(x+22, y-15, 10, 10);
  ellipse(x-22, y-15, 10, 10);
  
  //口
  stroke(0);
  strokeWeight(4);
  line(x,y+15,x,y+25)
  line(x,y+25,x-8,y+35);
  line(x,y+25,x+8,y+35);
}

function rabit2(x3, y3) {
  noStroke();
  fill(250,100,150);
  ellipse(x3,y3,150,150);
  ellipse(x3-40, y3-80, 50, 100);
  ellipse(x3+40, y3-80, 50, 100);
  fill(250)
  ellipse(x3+40, y3-90, 30, 60);

  ellipse(x3-40, y3-90, 30, 60);
  fill(255,137,138)
  ellipse(x3-37, y3+25, 20, 20);
  ellipse(x3+37, y3+25, 20, 20);
  
  //目
  fill(0)
  ellipse(x3-25, y3-10, 30, 30);
  ellipse(x3+25, y3-10, 30, 30);
  ellipse(x3,y3+15,10,10);

  fill(250)
  ellipse(x3+22, y3-15, 10, 10);
  ellipse(x3-22, y3-15, 10, 10);
  
  //口
  stroke(0);
  strokeWeight(4);
  line(x3,y3+15,x3,y3+25)
  line(x3,y3+25,x3-8,y3+35);
  line(x3,y3+25,x3+8,y3+35);
}