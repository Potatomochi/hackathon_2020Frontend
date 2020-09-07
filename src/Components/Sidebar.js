import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow.js'
import HomeIcon from "@material-ui/icons/Home";
import AttachMoney from "@material-ui/icons/AttachMoney";
import ShowChart from "@material-ui/icons/ShowChart";
import Assessment from "@material-ui/icons/Assessment";
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <div>


            <Link to="/">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            </Link>
            <Link to="/basic">
            <SidebarRow Icon={AttachMoney} title="Beginner" />
            </Link>
            <Link to="/intermediate">
            <SidebarRow Icon={Assessment} title="Basic" />
            </Link>
            <Link to="/advanced">
            <SidebarRow Icon={ShowChart} title="Pro" />
            </Link>
            <Link to="/Login">
            <SidebarRow Icon={VpnKeyIcon} title="Login" />
            </Link>

        </div>
    )
}

export default Sidebar
