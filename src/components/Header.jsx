import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();
const navigate = useNavigate();

const user = useSelector((state) => state.auth.user);

const handleLogout = () => {
  dispatch(logout());
  navigate("/login", { replace: true });
};
{user && (
  <>
    <span>Hi, {user.name}</span>
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  </>
)}
  const links = [
    ["/", "Dashboard"],
    ["/map", "Campus Map"],
    ["/classrooms", "Classrooms"],
    ["/events", "Events"],
    ["/canteen", "Canteen"],
    ["/faculty", "Faculty"],
    ["/lost-found", "Lost & Found"],
    ["/weather", "Weather"]
  ];

  return (
    <header className="topbar">
      <Link className="brand" to="/">
        <img src="chitkara_logo.png" width="200"></img>
        <span>
          
          <small>Digital Twin • Punjab</small>
        </span>
      </Link>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        ☰
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([path, label]) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setOpen(false)}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            end={path === "/"}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
