import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-wrap">
        <p className="muted">Want to collaborate or discuss an opportunity? Drop a message!</p>
        <form className="contact-form" action="https://formsubmit.co/" method="POST">
          <div className="row">
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>
          </div>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="Tell me a bit about your project…" required></textarea>
          </label>
          <div className="cta">
            <button className="btn" type="submit">Send Message</button>
            <a className="btn outline" href="mailto:bhagyashripatil8767@gmail.com">Email Directly</a>
          </div>
        </form>
      </div>
    </section>
  )
}
