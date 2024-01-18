//variables
let colorWhite = color(255, 255, 255);
let colorBlack = color(0, 0, 0);

let x = 200; // x-axis
let y = 200; // y-axis
let w = 200; // width
let h = 200; // height
let s = 1.0; // scale for the eyes
let sc = 1.0; //scale for the whole image

background(colorWhite);

push();
translate(200, 10);
angleMode(DEGREES);
rotate(20);
scale(sc);
strokeWeight(1);

//back hair
push();
fill(50, 50, 50);
beginShape();
vertex(x - 40, y - 50);
bezierVertex(x - 140, y + 80, x - 180, y + 150, x + 130, y + 300);
endShape();
pop();

//head
fill(226, 171, 83);
ellipse(x + 50, y + 50, w + 100);

//top hair
push();
fill(50, 50, 50);
beginShape();
vertex(x - 89, y - 10);
bezierVertex(x, y - 192, x + 155, y - 105, x + 190, y - 10);
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
push();
fill(80, 80, 80);
rect(x - 100, y - 120, w + 100, h - 110, 20);
pop();

//eyebrows
push();
noFill();
strokeWeight(4);
stroke(colorWhite);
beginShape();
vertex(x - 40, y - 30);
bezierVertex(x, y - 110, x + 30, y - 40, x + 40, y - 35);
endShape();

beginShape();
vertex(x + 150, y - 30);
bezierVertex(x + 100, y - 30, x + 70, y - 40, x + 70, y - 50);
endShape();
pop();

//end of the first push(); pop() of the file;
pop();
