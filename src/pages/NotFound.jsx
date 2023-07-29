import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempora
        repudiandae perferendis, est nulla quae cum suscipit repellat atque
        ipsum.
      </p>
      <p>Go to the <Link to="/">Home Page</Link></p>
    </div>
  );
}
