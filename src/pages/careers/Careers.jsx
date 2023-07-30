import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.name}</p>
          <p>Based in{career.description}</p>
        </Link>
      ))}
    </div>
  );
}

//loader function

export const careersLoader = async () => {
  const res = await fetch("http://localhost:3000/products");

  if (!res.ok) {
    throw new Response("Fetch Api Error", { status: 503 });
  }

  return res.json();
};
