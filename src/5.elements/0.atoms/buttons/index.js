import React from 'react'

export default function Button(props) {
    return (
        <button className = "button" style = {{background : props.background, color : props.color}}>
            <h1>{props.title}</h1>
        </button>
    )
}
