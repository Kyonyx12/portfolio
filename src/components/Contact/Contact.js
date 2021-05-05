import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    sum: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("El formulario se ha enviado!");
  // };

  return (
    <section className="contact">
      <div>
        <h1 id="contact">Contact</h1>
        <hr />
      </div>
      <form
        method="post"
        enctype="text/plain"
        action="mailto:isselocreyo12@yopmail.com"
      >
        <div className="form-name">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-name">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-name">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-name">
          <label htmlFor="message">Message</label>
          <input
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-name">
          <label htmlFor="sum">{"Num1 + Num2"}</label>
          <input
            type="number"
            id="sum"
            name="sum"
            value={form.sum}
            onChange={handleChange}
            required
          />
        </div>
        <input className="send" type="submit" />
      </form>
    </section>
  );
}
