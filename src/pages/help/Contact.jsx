import React from "react";

export default function Contact() {
  return (
    <div>
      <h3>Contact US</h3>
      <form>
        <label>
          <span>Your email</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message</span>
          <textarea name="message" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
