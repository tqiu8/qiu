export default function Sketch (p5) {
    // const { height, width } = useWindowDimensions();
    let t = 0;

    const draw_circle = (p5, t) => {
        var x = p5.windowWidth * p5.noise(t+3);
        var y = p5.windowHeight * p5.noise(t+5);
        var r = 255 * p5.noise(t+10);
        var g = 255 * p5.noise(t+15);
        var b = 255 * p5.noise(t+20);
        var o = 255 * (p5.sin(t*12)/2+0.5);
        
        p5.noStroke();
        p5.fill(r, g, b, o);
        p5.ellipse(x, y, 120, 120);
    }

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        // p5.background(p5.color(255,255,255,0));
    }
    p5.draw = () => {
        p5.clear();
        // p5.background(p5.color(255,255,255,100));
        for (var i = 0; i < 10; i++) {
            draw_circle(p5, t+i);
        }
        t = t + 0.001;
    }
}