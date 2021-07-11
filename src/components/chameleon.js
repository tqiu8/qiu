// P_2_1_3_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * changing circle amount, size and position in a grid
 *
 * MOUSE
 * position x          : circle amount and size
 * position y          : circle position
 * left click          : random position
 *
 * KEYS
 * s                   : save png
 */
 'use-strict'

 export default function sketch(p5) {

  // ~~~~~~ Initialize variables ~~~~~~~~~

  var tileCountX = 15
  var tileCountY = 10
  var tileWidth = 0
  var tileHeight = 0
  
  
  var circleCount = 0
  var endSize = 0
  var endOffset = 0
  
  var actRandomSeed = 0

  // ~~~~~~ React lifecycle methods ~~~~~~
  p5.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p5.setup = () => {
    p5.createCanvas(1200, 800)
    // p5.background(0, 204, 204)
    tileWidth = p5.width / tileCountX
    tileHeight = p5.height / tileCountY
    p5.noFill()
    p5.stroke(255, 150, 50)
  }

  // ~~~~~~ Draw ~~~~~~
  p5.draw = () => {
    // p5.background(0, 204, 204)
    p5.clear();
    p5.randomSeed(actRandomSeed)
  
    p5.translate(tileWidth / 2, tileHeight / 2)
  
    circleCount = p5.mouseX / 30 + 1
    endSize = p5.map(p5.mouseX, 0, p5.max(p5.width, p5.mouseX), tileWidth / 2, 0)
    endOffset = p5.map(p5.mouseY, 0, p5.max(p5.height, p5.mouseY), 0, (tileWidth - endSize) / 2)
  
    for (var gridY = 0; gridY <= tileCountY; gridY++) {
      for (var gridX = 0; gridX <= tileCountX; gridX++) {
        p5.push()
        p5.translate(tileWidth * gridX, tileHeight * gridY)
        p5.scale(1, tileHeight / tileWidth)
  
        var toggle = p5.int(p5.random(0, 4))
        if (toggle == 0) p5.rotate(-p5.HALF_PI)
        if (toggle == 1) p5.rotate(0)
        if (toggle == 2) p5.rotate(p5.HALF_PI)
        if (toggle == 3) p5.rotate(p5.PI)
  
        // draw module
        for (var i = 0; i < circleCount; i++) {
          var diameter = p5.map(i, 0, circleCount, tileWidth, endSize)
          var offset = p5.map(i, 0, circleCount, 0, endOffset)
          p5.ellipse(offset, 0, diameter, diameter)
        }
        p5.pop()
      }
    }
  }

  // ~~~~~~ Other commonly used p5 methods
  p5.mousePressed = () => {
    actRandomSeed = p5.random(100000)
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