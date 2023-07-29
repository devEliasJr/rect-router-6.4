import React from "react";
import { Outlet } from "react-router-dom";

export default function CarrersLayot() {
  return (
    <div className="carrers-layout">
      <h2>Carrers</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nisi
        blanditiis quae quibusdam obcaecati totam.
      </p>

      <Outlet />
    </div>
  );
}
