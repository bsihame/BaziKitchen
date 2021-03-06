import React from "react";
// import { Router, Link } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom'

export default function Navbar () {
  
    return (
    <>
      <NavLink to='/' activeStyle>
        Home
      </NavLink>
      <NavLink to='/about' activeStyle>
        About
      </NavLink>
      <NavLink to='/album' activeStyle>
        Album
      </NavLink>
      <NavLink to='/contact' activeStyle>
        Contact
      </NavLink>
    </>
    )
  
}
