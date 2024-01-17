//variables
let colorWhite = color(255, 255, 255);
let colorBlack = color(0, 0, 0);

let x = 200;
let y = 200;
let w = 200;
let h = 200;

push();
translate(-100, -100);

//head
fill(226, 171, 83);
ellipse(x + 200, y + 200, w + 100);

//eyes

fill(colorWhite);
ellipse(x + 270, y + 150, w - 150);

fill(colorBlack);
ellipse(x + 270, y + 150, w - 190);

fill(colorWhite);
ellipse(x + 140, y + 150, w - 150);

fill(colorBlack);
ellipse(x + 140, y + 150, w - 190);

//mouth
fill(colorWhite);
rect(x + 140, y + 260, w - 80, h - 160, 100);

//hair

pop();
