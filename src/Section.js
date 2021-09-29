import React from 'react'
import './section.css'

function Section({Icon , title , color, selected}) {
    return (
        <div className = {`section ${selected && "section--selected"}`}
        style = {{
            borderBottom: `3px solid ${color}`,
            color: `${selected && color}`
        }}>
            {Icon}
            <h1 style = {{fontWeight:'500'}}>{title}</h1>
        </div>
    )
}

export default Section
