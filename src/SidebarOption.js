import React from 'react'
import './sidebaroption.css'

function SidebarOption({icon,title,number}) {
    return (
        <div className="sidebaroption">
            {icon}
            <h3>{title}</h3>
            <p>{number}</p>
        </div>          

    )
}

export default SidebarOption
