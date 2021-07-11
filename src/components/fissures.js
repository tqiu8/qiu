// P_2_2_1_02
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
 * draw the path of a stupid agent
 *
 * MOUSE
 * position x          : drawing speed
 *
 * KEYS
 * 1-3                 : draw mode of the agent
 * DEL/BACKSPACE       : clear display
 * s                   : save png
 */
 'use strict'

 export default function Sketch(p5) {
 
   // ~~~~~~ Initialize variables ~~~~~~~~~
 
   var NORTH = 0
   var NORTHEAST = 1
   var EAST = 2
   var SOUTHEAST = 3
   var SOUTH = 4
   var SOUTHWEST = 5
   var WEST = 6
   var NORTHWEST = 7
   
   var direction
   
   var stepSize = 1
   var diameter = 1
   
   var posX
   var posY
   
   var drawMode = 1
   var counter = 0
   // ~~~~~~ React lifecycle methods ~~~~~~
   p5.preload = () => {
 
   }
 
   // ~~~~~~ Setup ~~~~~~
   p5.setup = () => {
     p5.createCanvas(p5.windowWidth, p5.windowHeight)
    //  p5.background(255)
     p5.colorMode(p5.HSB, 360, 100, 100, 100)
     p5.noStroke()
   
     posX = p5.width / 2
     posY = p5.height / 2
   }
 
   // ~~~~~~ Draw ~~~~~~
   p5.draw = () => {
     for (var i = 0; i <= p5.mouseX; i++) {
       counter++
   
       // random number for the direction of the next step
       if (drawMode == 2) {
         direction = p5.int(p5.random(3))
       } else {
         direction = p5.int(p5.random(7))
       }
   
       if (direction == NORTH) {
         posY -= stepSize
       } else if (direction == NORTHEAST) {
         posX += stepSize
         posY -= stepSize
       } else if (direction == EAST) {
         posX += stepSize
       } else if (direction == SOUTHEAST) {
         posX += stepSize
         posY += stepSize
       } else if (direction == SOUTH) {
         posY += stepSize
       } else if (direction == SOUTHWEST) {
         posX -= stepSize
         posY += stepSize
       } else if (direction == WEST) {
         posX -= stepSize
       } else if (direction == NORTHWEST) {
         posX -= stepSize
         posY -= stepSize
       }
   
       if (posX > p5.width) posX = 0
       if (posX < 0) posX = p5.width
       if (posY < 0) posY = p5.height
       if (posY > p5.height) posY = 0
   
       if (drawMode == 3) {
         if (counter >= 100) {
           counter = 0
           p5.fill(192, 100, 64, 80)
           p5.ellipse(posX + stepSize / 2, posY + stepSize / 2, diameter + 7, diameter + 7)
         }
       }
   
       p5.fill(60, 140, 23, 10)
       p5.ellipse(posX + stepSize / 2, posY + stepSize / 2, diameter, diameter)
     }
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
   
     if (p5.key == '1') {
       drawMode = 1
       stepSize = 1
       diameter = 1
     }
     if (p5.key == '2') {
       drawMode = 2
       stepSize = 1
       diameter = 1
     }
     if (p5.key == '3') {
       drawMode = 3
       stepSize = 10
       diameter = 5
     }
   }
 
   // ~~~~~~ Helper functions ~~~~~~~~~
 
   // ~~~~~~ Classes ~~~~~~~~~~~~
   
 }