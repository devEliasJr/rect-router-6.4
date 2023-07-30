import React from "react";
import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const carrer = useLoaderData();
  return (
    <div className="career-details">
      <h2>Name: {carrer.name}</h2>
      <p>Price: {carrer.price}</p>
      <p>Description: {carrer.description}</p>
    </div>
  );
}

//loader fucntion
export const carrerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/products/${id}`);

  return res.json();
};
