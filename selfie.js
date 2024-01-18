//variables
let colorWhite = color(255, 255, 255);
let colorBlack = color(0, 0, 0);

let x = 200; // x-axis
let y = 200; // y-axis
let w = 200; // width
let h = 200; // height
let s = 1.0; // scale

background(colorWhite);

push();
translate(10, 10);
angleMode(DEGREES);
// rotate(20);
strokeWeight(1);

//head
fill(226, 171, 83);
ellipse(x + 50, y + 50, w + 100 * s);

//top hair
push();
fill(50, 50, 50);
beginShape();
vertex(113, 190);
bezierVertex(200, 8, 355, 95, 390, 190);
endShape();
pop();

//eyes
push();
fill(colorWhite);
ellipse(x, y + 10, w - 150 * s);
ellipse(x + 100, y + 10, w - 150 * s);
pop();

push();
fill(colorBlack);
noStroke();
ellipse(x, y + 10, w - 190 * s);
ellipse(x + 100, y + 10, w - 190 * s);
pop();

//glasses
push();
strokeWeight(6);
noFill();
stroke(50, 90, 20);
strokeWeight(2.5);
arc(x + 50, y + 14, w - 170, h - 170, 180, 1, 180);
arc(x - 70, y + 14, w - 150, h - 190, 180, 1, 180);
arc(x + 170, y + 14, w - 150, h - 190, 180, 1, 180);
rect(x - 45, y - 22, w - 120, h - 135, 25);
rect(x + 65, y - 22, w - 120, h - 135, 25);
pop();

//nose
push();
strokeWeight(6);
noFill();
strokeWeight(2.5);
arc(x + 50, y + 65, w - 150, h - 170, 10, 180, 180);
pop();

//mouth
//vertex(x1, y1); bezierVertex(x2, y2, x3, y3, x4, y4);
//arc(x, y, width, height, start, stop, [mode/degrees/], [detail]);
push();
strokeWeight(6);
noFill();
arc(x + 50, y + 100, w - 35, h - 100, 50, 180, 180);
pop();

//hat
// push();
// fill(80, 80, 80);
// rect(x - 100, y - 120, w + 100, h - 110, 20);
// pop();

//eyebrows
push();
noFill();
strokeWeight(4);
stroke(colorWhite);
beginShape();
vertex(160, 170);
bezierVertex(200, 90, 230, 160, 240, 165);
endShape();

beginShape();
vertex(350, 170);
bezierVertex(300, 170, 270, 160, 270, 150);
endShape();
pop();

//end of the first push(); pop() of the file;
pop();
