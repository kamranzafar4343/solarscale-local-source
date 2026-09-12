"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, MoveUpRight } from "lucide-react";
import { FormEvent, useState } from "react";

const phonePattern = /^\+?[\d\s().-]{10,20}$/;

export default function StartAProject() {
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const phone = new FormData(form).get("phone");

    if (typeof phone !== "string" || !phonePattern.test(phone.trim())) {
      setPhoneError("Enter a valid phone number, including country code if needed.");
      return;
    }

    setPhoneError("");
    setSubmitted(true);
    form.reset();
  }

  return (
    <main className="project-page">
      <header className="project-header">
        <Link className="project-brand" href="/" aria-label="Back to SolarScale home">
          <Image src="/favicon.svg" alt="" width={44} height={44} />
          <span>SOLAR<span>SCALE</span></span>
        </Link>
        <Link className="project-back" href="/">
          <ArrowLeft size={16} /> Back to site
        </Link>
      </header>

      <section className="project-intro">
        <div className="project-intro-copy">
          <p className="project-eyebrow">SolarScale / Project inquiry</p>
          <h1>Let&apos;s build what moves <em>solar forward.</em></h1>
          <p className="project-lede">
            Tell us what you are building, where growth is stuck and what a better
            digital system would make possible.
          </p>
          <div className="project-note">
            <MoveUpRight size={18} />
            <span>We usually respond within two business days.</span>
          </div>
        </div>

        <div className="project-form-shell">
          {submitted ? (
            <div className="project-success" role="status">
              <div className="success-icon"><Check size={24} /></div>
              <p className="project-eyebrow">Inquiry received</p>
              <h2>Good things are in motion.</h2>
              <p>Thanks for reaching out. We&apos;ll review the details and be in touch shortly.</p>
              <Link className="form-button" href="/">Return home <ArrowUpRight size={17} /></Link>
            </div>
          ) : (
            <form className="project-form" onSubmit={handleSubmit} noValidate>
              <div className="form-heading">
                <span>01</span>
                <p>Start with the essentials.</p>
              </div>
              <div className="form-grid">
                <label>
                  <span>Your name</span>
                  <input name="name" type="text" placeholder="Jane Smith" required />
                </label>
                <label>
                  <span>Company</span>
                  <input name="company" type="text" placeholder="Solar company" required />
                </label>
                <label>
                  <span>Work email</span>
                  <input name="email" type="email" placeholder="jane@company.com" required />
                </label>
                <label>
                  <span>Phone number</span>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+1 555 123 4567"
                    inputMode="tel"
                    autoComplete="tel"
                    aria-invalid={Boolean(phoneError)}
                    aria-describedby={phoneError ? "phone-error" : undefined}
                    onChange={() => setPhoneError("")}
                    required
                  />
                  {phoneError && <small id="phone-error" className="form-error">{phoneError}</small>}
                </label>
                <label>
                  <span>What do you need?</span>
                  <select name="projectType" defaultValue="" required>
                    <option value="" disabled>Select a focus</option>
                    <option>New website</option>
                    <option>Website redesign</option>
                    <option>SEO and lead generation</option>
                    <option>Digital strategy</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label>
                  <span>Estimated investment</span>
                  <select name="budget" defaultValue="" required>
                    <option value="" disabled>Select a range</option>
                    <option>$999 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>Up to $5,000</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="form-wide">
                  <span>Tell us about the project</span>
                  <textarea name="message" rows={5} placeholder="What are you trying to improve?" required />
                </label>
              </div>
              <div className="form-submit-row">
                <p>By submitting, you&apos;re starting a conversation. No hard pitch.</p>
                <button className="form-button" type="submit">Send inquiry <ArrowUpRight size={17} /></button>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer className="project-footer">
        <span>© 2026 SolarScale</span>
        <span>Digital growth systems for solar companies.</span>
      </footer>
    </main>
  );
}
