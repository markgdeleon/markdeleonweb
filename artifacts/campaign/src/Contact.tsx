import { useState } from "react";
import btsPhoto from "@assets/Screenshot_2026-05-15_at_12.20.50_AM_1778829696732.png";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        ...form,
      });
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
    } catch {
    }
    setSubmitting(false);
    setSent(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-image-col">
        <img
          className="contact-bts-image"
          src={btsPhoto}
          alt="Mark De Leon — on set, production"
        />
        <div className="contact-image-caption">
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.45)" }}>MARK DE LEON</p>
          <p className="contact-image-label">Creative Producer</p>
        </div>
      </div>

      <div className="contact-form-col">
        <div className="contact-form-inner">
          <p className="eyebrow">CONTACT</p>
          <h2 className="contact-heading">LET'S<br />WORK<br />TOGETHER</h2>
          <p className="contact-subtext">
            For production, creative, or storytelling opportunities, reach out below.
          </p>

          {sent ? (
            <div className="success-state">
              <p className="success-title">MESSAGE RECEIVED</p>
              <p className="success-sub">
                Thank you for reaching out. I'll be in touch soon.
              </p>
              <button
                className="btn-ghost"
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", message: "" });
                }}
              >
                SEND ANOTHER
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="form-group">
                <label className="form-label" htmlFor="name">NAME</label>
                <input
                  id="name" name="name" type="text"
                  className="form-input"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">EMAIL</label>
                <input
                  id="email" name="email" type="email"
                  className="form-input"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">MESSAGE</label>
                <textarea
                  id="message" name="message"
                  className="form-input form-textarea"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="btn-solid"
                disabled={submitting}
              >
                {submitting ? "SENDING…" : "SEND MESSAGE"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
