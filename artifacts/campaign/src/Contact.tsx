import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-intro-col">
        <p className="eyebrow">CONTACT</p>
        <h1 className="contact-heading">LET'S<br />WORK<br />TOGETHER</h1>
        <p className="contact-subtext">
          For production, creative, or storytelling opportunities, feel free to reach out.
        </p>
        <div className="contact-visual">
          <span className="placeholder-label">VISUAL</span>
        </div>
      </div>

      <div className="contact-form-col">
        {sent ? (
          <div className="success-state">
            <p className="success-title">MESSAGE RECEIVED</p>
            <p className="success-sub">Thank you for reaching out. I'll be in touch soon.</p>
            <button
              className="btn-ghost"
              onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
            >
              SEND ANOTHER
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="name">NAME</label>
              <input id="name" name="name" type="text" className="form-input"
                value={form.name} onChange={handleChange} autoComplete="name" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">EMAIL</label>
              <input id="email" name="email" type="email" className="form-input"
                value={form.email} onChange={handleChange} autoComplete="email" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">MESSAGE</label>
              <textarea id="message" name="message" className="form-input form-textarea"
                value={form.message} onChange={handleChange} rows={6} />
            </div>
            <button type="submit" className="btn-solid">SEND MESSAGE</button>
          </form>
        )}
      </div>
    </div>
  );
}
