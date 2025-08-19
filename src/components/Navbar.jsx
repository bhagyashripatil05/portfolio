import React from 'react'

export default function Navbar() {
  return (
    <header className="nav-wrapper">
      <a className="brand" href="#top" aria-label="Homepage">
        <span className="logo-dot" /> Bhagyashri <span className="accent">Patil</span>
      </a>
      <input id="nav-toggle" type="checkbox" />
      <label className="burger" htmlFor="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </label>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a className="btn btn-sm" href="https://linkedin.com/in/bhagyashri-patil-87327825b" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn btn-sm outline" href="https://github.com/bhagyashripatil05" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-sm" href="https://drive.google.com/file/d/1-EIU_SPyfKdCjmio96XTp4vZJME6kIjn/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    </header>
  )
}
