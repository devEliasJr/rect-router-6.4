import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();
  return (
    <div>
      <h3>Contact US</h3>
      <Form method="post">
        <label>
          <span>Your email</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message</span>
          <textarea name="message" required />
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    name: data.get("email"),
    description: data.get("message"),
  };

  console.log(submission);

  //send post request

  if (submission.description.length < 10) {
    return {
      error: "Message must be at least 10 characters",
    };
  }

  await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });

  return redirect("/");
};
