import React from "react"
import "./layout.css"
import { container } from "./layout.module.css"

export default function Work({children}) {
    return (
        <div className={container}>
            <div>{children}</div>
        </div>
    )
}