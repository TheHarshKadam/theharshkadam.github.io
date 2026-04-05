import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact">
      <div className="s-label">Let's connect</div>
      <h2 className="s-title">Get In <span className="g">Touch</span></h2>
      <p className="c-sub">
        Whether it's a new opportunity, an exciting project, or just a conversation about
        tech — I'd love to hear from you.
      </p>

      <div className="c-cards">
        <a className="glass-c c-card" href="mailto:harshvardhankadam89@gmail.com">
          <span className="c-ic">📧</span>
          <span className="c-type">Email</span>
          <span className="c-val">harshvardhankadam89@gmail.com</span>
        </a>
        <a className="glass-c c-card" href="https://www.linkedin.com/in/harshvardhankadam/" target="_blank" rel="noreferrer">
          <span className="c-ic">💼</span>
          <span className="c-type">LinkedIn</span>
          <span className="c-val">linkedin.com/in/harshvardhankadam</span>
        </a>
        <a className="glass-c c-card" href="https://github.com/TheHarshKadam" target="_blank" rel="noreferrer">
          <span className="c-ic">🦊</span>
          <span className="c-type">GitHub</span>
          <span className="c-val">github.com/TheHarshKadam</span>
        </a>
      </div>

      <div className="c-form">
        <h3>Send a message ✦</h3>
        <form onSubmit={handleSend} style={{ display: "contents" }}>
          <div className="f-row">
            <div className="f-g">
              <label>Name</label>
              <input name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="f-g">
              <label>Email</label>
              <input name="email" type="email" placeholder="you@email.com" required />
            </div>
          </div>
          <div className="f-g">
            <label>Subject</label>
            <input name="subject" type="text" placeholder="What's on your mind?" />
          </div>
          <div className="f-g">
            <label>Message</label>
            <textarea name="message" placeholder="Tell me about the project or opportunity..." required />
          </div>
          <button
            type="submit"
            className="send-b"
            style={sent ? { background: "linear-gradient(120deg,#00ffe0,#00c890)" } : {}}
          >
            {sent ? "✓ Message Sent!" : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}