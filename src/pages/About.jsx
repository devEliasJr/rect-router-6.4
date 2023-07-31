import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState('Elias')

  if (!user) {
    return <Navigate to='/' replace={true}/>
  }

  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, maiores
        mollitia itaque quibusdam explicabo eaque quisquam perspiciatis illum
        alias nihil eius quos ea modi quod, reiciendis laboriosam velit
        accusamus laborum quidem debitis autem. Necessitatibus officia amet
        corporis. Illum ratione enim expedita, facilis delectus voluptate, odio
        porro ad, mollitia modi similique?
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
