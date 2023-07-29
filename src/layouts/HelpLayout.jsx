import React from "react";
import { NavLink, Outlet } from "react-router-dom";


export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        doloremque eveniet quia.
      </p>
      <Outlet />
    </div>
  );
}
