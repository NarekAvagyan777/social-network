import React from "react"
import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Messages</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/users" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Users</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
      <NavLink to="/news" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>News</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
      <NavLink to="/music" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Music</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
      <NavLink to="/settings" style={({ isActive }) => ({ color: isActive ? 'gold' : '' })}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;