// P_2_2_3_01
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
 * form mophing process by connected random agents
 *
 * MOUSE
 * click               : start a new circe
 * position x/y        : direction of floating
 *
 * KEYS
 * 1-2                 : fill styles
 * f                   : freeze. loop on/off
 * Delete/Backspace    : clear display
 * s                   : save png
 */
'use strict'

export default function sketch(p5) {

  // ~~~~~~ Initialize variables ~~~~~~~~~

  var formResolution = 15
  var stepSize = 2
  var initRadius = 150
  var centerX
  var centerY
  var x = []
  var y = []
  
  var filled = false
  var freeze = false
  
  // ~~~~~~ React lifecycle methods ~~~~~~
  p5.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);

    // init shape
    centerX = p5.width / 2
    centerY = p5.height / 2
    var angle = p5.radians(360 / formResolution)
    for (var i = 0; i < formResolution; i++) {
      x.push(p5.cos(angle * i) * initRadius)
      y.push(p5.sin(angle * i) * initRadius)
    }
  
    p5.stroke(0, 50)
    p5.strokeWeight(0.75)
    // p5.background(255)
  }

  // ~~~~~~ Draw ~~~~~~
  p5.draw = () => {
  // floating towards mouse position
  centerX += (p5.mouseX - centerX) * 0.01
  centerY += (p5.mouseY - centerY) * 0.01

  // calculate new points
  for (var i = 0; i < formResolution; i++) {
    x[i] += p5.random(-stepSize, stepSize)
    y[i] += p5.random(-stepSize, stepSize)
    // uncomment the following line to show position of the agents
    // ellipse(x[i] + centerX, y[i] + centerY, 5, 5);
  }

  if (filled) {
    p5.fill(p5.random(255))
  } else {
    p5.noFill()
  }

  p5.beginShape()
  // first controlpoint
  p5.curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY)

  // only these points are drawn
  for (var j = 0; j < formResolution; j++) {
    p5.curveVertex(x[j] + centerX, y[j] + centerY)
  }
  p5.curveVertex(x[0] + centerX, y[0] + centerY)

  // end controlpoint
  p5.curveVertex(x[1] + centerX, y[1] + centerY)
  p5.endShape()
  }

  // ~~~~~~ Other commonly used p5 methods
  p5.mousePressed = () => {
  // init shape on mouse position
  centerX = p5.mouseX
  centerY = p5.mouseY
  var angle = p5.radians(360 / formResolution)
  for (var i = 0; i < formResolution; i++) {
    x[i] = p5.cos(angle * i) * initRadius
    y[i] = p5.sin(angle * i) * initRadius
  }
  }

  p5.mouseReleased = () => {

  }

  p5.keyPressed = () => {
    if (p5.key == 's' || p5.key == 'S') p5.saveCanvas(Date.now().toString(), 'png')
  }

  p5.keyReleased = () => {
    if (p5.keyCode == p5.DELETE || p5.keyCode == p5.BACKSPACE) p5.clear()
    if (p5.key == '1') filled = false
    if (p5.key == '2') filled = true
  
    // pauze/play draw loop
    if (p5.key == 'f' || p5.key == 'F') freeze = !freeze
    if (freeze) {
      p5.noLoop()
    } else {
      p5.loop()
    }
  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}