import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    "entry.115349326": "",
    "entry.1480087315": "",
    "entry.434096257": "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log("Submitted!");
    setSubmitted(!submitted);
  };
  const handleLoad = () => {
    if (submitted) {
      window.location = "https://joseantoniolopezramos.site/";
    }
  };
  return (
    <section className="contact">
      <div>
        <h1 id="contact">Contact</h1>
        <hr />
      </div>
      <form
        method="post"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        encType="text/plain"
        action="https://docs.google.com/forms/d/e/1FAIpQLSexF0uIO68Gq9zQ5qlvo0Nc924FukaKRuQqy0NpmRHJkYbYtg/formResponse?"
      >
        <div className="form-name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="entry.115349326"
            name="entry.115349326"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-name">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="entry.1480087315"
            name="entry.1480087315"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-name">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="entry.434096257"
            name="entry.434096257"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="send" type="submit" href="#index.html">
          Send
        </button>
      </form>
      <iframe
        title="hidden_iframe"
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={handleLoad}
      ></iframe>
    </section>
  );
}
