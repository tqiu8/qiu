import React from "react"
import "./layout.css"
import { container } from "./layout.module.css"
import {loadableP5 as P5Wrapper} from './loadable';
import Sketch from './sketch';
// import Sketch from './shai-hulud';

export default function Layout({ children }) {
  return (
    <main className={container}>
        <div>
            <h1>{children}</h1>
        </div>
        <P5Wrapper sketch={Sketch} />
    </main>
  )
}