//variables
let colorWhite = color(255, 255, 255);
let colorBlack = color(0, 0, 0);

let x = 200;
let y = 200;
let w = 200;
let h = 200;

push();
translate(10, 10);

//head
fill(226, 171, 83);
ellipse(x + 50, y + 50, w + 100);

//eyes

fill(colorWhite);
ellipse(x, y + 10, w - 150);

fill(colorBlack);
ellipse(x, y + 10, w - 190);

fill(colorWhite);
ellipse(x + 100, y + 10, w - 150);

fill(colorBlack);
ellipse(x + 100, y + 10, w - 190);

//mouth
fill(colorWhite);
rect(x - 10, y + 100, w - 80, h - 160, 100);

//hair

pop();
