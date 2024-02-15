let phase = 0;
let dayLength = 0.002;
let y = 0 ;
let x = 0 ;
let radiusX = 420;
let radiusY = 350;

function setup() {
  createCanvas(600, 370);
  noStroke();
}

function draw() {
  background(y*.5,y*.75,y);

  landscape();

  phases();

  drawMoon(x,y,phase);

}


function phases() {
  // day length slowly moves objects by fraction of a pixel
  // the phase increases by 0.001  
  phase += dayLength;

  // modulo 30 
  phase = phase % 30 ;
  discreetPhase = Math.floor (phase);
  console.log(discreetPhase);

 

  // sets bottom center of canvas as 0,0
  translate(width*.5, height+50);

  // 
  let moonAngle = map(phase, 0, 30, 0, 60*PI);
  y = sin(moonAngle)* radiusY;
  x = cos(moonAngle)* radiusX;

  // circle that is the path of orbit 
  noFill();
  ellipse(0, 0, radiusX*2, radiusY*2);

  // moon
  // fill(220,220,220);
  // ellipse(x,y,50,50);

  // sun
  fill(255,255,0);
  ellipse(-x,-y,70,70);
}



function landscape() {
  
  // foreground grass
  fill(50,150,120);
rect(0,height-50,width,50);

// purple hills
    fill(100,20,100);
beginShape();
vertex(-50,height-50);
quadraticVertex(50,height-150,300,height-100);
quadraticVertex(500,height-100,width+50,height-50);
endShape();

// mountain
  fill(215,225,240);
beginShape();
vertex(20,height-70);
quadraticVertex(100,height*.66,180,200);
quadraticVertex(270,height*.7,450,height-63);
endShape();

// green hills
  fill(0,120,120);
beginShape();
vertex(-20,height-50);
quadraticVertex(50,height-100,220,height-70);
quadraticVertex(400,height-100,width-50,height-50);
endShape();
}

function drawMoon(x2,y2,discreetPhase){

  stroke(255,255,220);
  if (discreetPhase < 15 ) {
      // stroke(255,0,0);
    phasePos = (discreetPhase * 9.1 )-15;
  }
    else {
      //stroke(0,255,0);
 phasePos = ( discreetPhase/9.1) + (discreetPhase - 15 )*7.8;
    } // what the heck is this math
   


   // left quadrant moon fill
   if (discreetPhase <15 ) {
     fill(255); 
   } else {fill(0);
          }
   
   // left side outline of moon
 bezier(x+50, y+50, x-15, y+50, x-15,y-50,x+50, y-50);  

   
if ( discreetPhase < 7 )
   {
  fill(0);   
}   else {
 fill(255);
}
 if (discreetPhase >20 ) {
   fill (0); }
   
 // part of moon outline that changes position and curvature according to phase  
 bezier(x+50,y+50,x+phasePos,y+50,x+phasePos,y-50,x+50,y-50);  

   if ( discreetPhase <15 )
     {
noFill(); 
     } else {
       fill(255);
     }
   if (discreetPhase >20 ) {
    noFill();
   }
   // right side outline of moon
  bezier(x+50,y+50,x+115,y+50,x+115,y-50,x+50,y-50);
   
if (discreetPhase >20) {
  fill(255);
}
 
}  



// create 2 different shapes for moons? -- use begin and end shape for fill?