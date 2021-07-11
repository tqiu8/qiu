// P_2_0_03
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
 * drawing with a changing shape by draging the mouse.
 *
 * MOUSE
 * position x          : length
 * position y          : thickness and number of lines
 * drag                : draw
 *
 * KEYS
 * 1-3                 : stroke color
 * del, backspace      : erase
 * s                   : save png
 */
 'use strict'
 export default function Sketch(p5) {
 
   // ~~~~~~ Initialize variables ~~~~~~~~~
   var strokeColor
 
   // ~~~~~~ React lifecycle methods ~~~~~~
   p5.preload = () => {
 
   }
 
   // ~~~~~~ Setup ~~~~~~
   p5.setup = () => {
   p5.createCanvas(p5.windowWidth, p5.windowHeight)
//    p5.background(255)
   p5.colorMode(p5.HSB, 360, 100, 100, 100)
   p5.noFill()
   p5.strokeWeight(2)
   strokeColor = p5.color(0, 10)
   }
 
   // ~~~~~~ Draw ~~~~~~
   p5.draw = () => {
    //  if (p5.mouseIsPressed && p5.mouseButton == p5.LEFT) {
    p5.push()
    p5.translate(p5.width / 2, p5.height / 2)

    var circleResolution = p5.int(p5.map(p5.mouseY + 100, 0, p5.height, 2, 10))
    var radius = p5.mouseX - p5.width / 2
    var angle = p5.TAU / circleResolution

    p5.stroke(strokeColor)

    p5.beginShape()
    for (var i = 0; i <= circleResolution; i++) {
        var x = p5.cos(angle * i) * radius
        var y = p5.sin(angle * i) * radius
        p5.vertex(x, y)
    }
    p5.endShape()

    p5.pop()
    //  }
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
     if (p5.keyCode == p5.DELETE || p5.keyCode == p5.BACKSPACE) p5.clear()
   
     if (p5.key == '1') strokeColor = p5.color(0, 10)
     if (p5.key == '2') strokeColor = p5.color(192, 100, 64, 10)
     if (p5.key == '3') strokeColor = p5.color(52, 100, 71, 10)
   }
 
   // ~~~~~~ Helper functions ~~~~~~~~~
 
   // ~~~~~~ Classes ~~~~~~~~~~~~
   
 }