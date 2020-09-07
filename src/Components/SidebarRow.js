import React from 'react'
import './SidebarRow.css';

function SidebarRow({selected, Icon, title}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            
            <Icon className="SideBarRow_icon"/>
            <h2 className="SideBarRow_title">{title}</h2>
        </div>
    )
}

export default SidebarRow