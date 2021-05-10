import { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";

const initialState = {
  nameKey: "entry.115349326",
  emailKey: "entry.1480087315",
  messageKey: "entry.434096257",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialState);

  const handleSubmit = (e) => {
    setForm(initialState);
    setSubmitted(!submitted);
    toast("Contact info submitted!", {
      type: "info",
    });
    window.location = "https://joseantoniolopezramos.site/";
  };

  return (
    <section className="contact">
      <div>
        <h1 id="contact">Contact</h1>
        <hr />
      </div>
      <form
        target="hidden_iframe"
        onSubmit={handleSubmit}
        encType="text/plain"
        action="https://docs.google.com/forms/d/e/1FAIpQLSexF0uIO68Gq9zQ5qlvo0Nc924FukaKRuQqy0NpmRHJkYbYtg/formResponse?"
      >
        <div className="form-name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id={form.nameKey}
            name={form.nameKey}
            defaultValue=""
            required
          />
        </div>
        <div className="form-name">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id={form.emailKey}
            name={form.emailKey}
            defaultValue=""
            required
          />
        </div>
        <div className="form-name">
          <label htmlFor="">Message</label>
          <textarea
            type="text"
            id={form.messageKey}
            name={form.messageKey}
            defaultValue=""
            required
          />
        </div>
        <button
          className={` ${submitted ? "disabled" : "enabled"}`}
          type="submit"
          disabled={submitted && true}
        >
          Send
        </button>
      </form>
      <iframe
        title="hidden_iframe"
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      ></iframe>
    </section>
  );
}
