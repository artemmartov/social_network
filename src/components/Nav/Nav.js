import React from "react";
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = props => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>profile</NavLink>
            </div> 
            <div className={classes.item}>
                <NavLink to="/dialoges" activeClassName={classes.active}>messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#">news</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#">music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#">settings</NavLink>
            </div>
        </nav>
    )
};

export default Nav
