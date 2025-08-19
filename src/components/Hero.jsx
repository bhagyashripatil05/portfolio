import React from 'react'

export default function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="hero-content">
        <p className="hello">Hello, I’m</p>
        <h1>Bhagyashri <span className="accent">Patil</span></h1>
        <h2 className="subtitle">Frontend Developer (React)</h2>
        <p className="desc">
          I build clean, responsive web interfaces using HTML, CSS, JavaScript, and React.
          I care about accessibility, performance, and smooth UX.
        </p>
        <div className="cta">
          <a className="btn" href="https://drive.google.com/file/d/1-EIU_SPyfKdCjmio96XTp4vZJME6kIjn/view?usp=sharing" target="_blank" rel="noreferrer">Download Resume</a>
          <a className="btn" href="https://linkedin.com/in/bhagyashri-patil-87327825b" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          <a className="btn outline" href="https://github.com/bhagyashripatil05" target="_blank" rel="noreferrer">View GitHub</a>
          <a className="btn ghost" href="#projects">See Projects</a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orb"></div>
        <div className="orb small"></div>
        <div className="grid"></div>
      </div>
    </section>
  )
}
