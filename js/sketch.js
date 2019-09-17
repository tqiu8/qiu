// JavaScript source code
var r = 1, g = 1, b = 1;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0, 0, 0, 0);
}

function draw() {
    
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
        stroke(color(r, g, b));
        r += 1;
        r %= 255;
        g += 5;
        g %= 255;
        //b += 17;
        //b %= 255;
    }
    
}

function Clear() {
    clear();
}

function Save() {
    save('myCanvas.jpg');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
