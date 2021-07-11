// This instance of p5 is for using static methods, which for some reason are not available on the 'p' instance.
// If you need it, uncomment it.
// import p5 from '../p5.min'; 

// The basic idea here is that you'll need to use the `p` namespace to access
// all non-static p5 methods and variables here. Any static methods need to be accessed with the p5 namespace (imported above).
export default function Sketch(p5) {

    // ~~~~~~ Initialize variables ~~~~~~~~~
    var centerX
    var centerY
    var radius
    var totalDegrees = 369
    var direction
    var rotation
    var r = 255
    var g = 128
    var b = 128
  
    // ~~~~~~ Setup ~~~~~~
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
    //   p5.background(0)
      centerX = p5.width / 2
      centerY = p5.height / 2
      radius = 1
      p5.angleMode(p5.DEGREES)
      p5.translateX = 0
      p5.translateY = 0
      p5.opacity = 255
      direction = "out"
      rotation = 24.0
    }
  
    // ~~~~~~ Draw ~~~~~~
    p5.draw = () => {
      p5.noFill()
      p5.stroke(r, g, b, p5.opacity)
      p5.beginShape()
          for (let i=0; i <=totalDegrees; i++) {
              var noiseFactor = p5.noise(i / 40, p5.frameCount / 320)
              var x = centerX + radius * p5.cos(i) * noiseFactor
              var y = centerY + radius * p5.sin(i) * noiseFactor
              p5.curveVertex(x, y)
              p5.rotate(p5.PI/rotation)
          }
          p5.endShape(p5.CLOSE)
      if (direction == "out") {
          if (radius > p5.height / 2) {
              direction = "in"
          } else {
              radius += 0.65
          }
      } else {
          if (radius <= 0) {
              radius = 100
              direction = "out"
          } else {
              radius -= 0.65
          }
      }
      rotation += 0.1
      if (p5.frameCount > 200) {
        p5.translateX = 0
        p5.translateY = 0
      }
      if (r > 255) {
          r = 0
      }
      if (g > 255) {
          g = 0
      }
      if (b > 255) {
          b = 0
      }
      if (p5.opacity == 0) {
        p5.opacity = 255
      }
      p5.translateX *= p5.frameCount
      p5.translateY *= p5.frameCount
      p5.opacity -= 1
      r += 1
      g += 1
      b += 1
    }
  
    // ~~~~~~ Other commonly used p5 methods
    p5.mousePressed = () => {
  
    }
  
    p5.mouseReleased = () => {
  
    }
  
    p5.keyPressed = () => {
      if (p5.key == 's' || p5.key == 'S') p5.saveCanvas(Date.now().toString(), 'png')
    }
  
    p5.keyReleased = () => {
      
    }
  
    // ~~~~~~ Helper functions ~~~~~~~~~
  
    // ~~~~~~ Classes ~~~~~~~~~~~~
    
  }