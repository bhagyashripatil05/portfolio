import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Bhagyashri Patil</p>
        <div className="social">
          <a href="https://linkedin.com/in/bhagyashri-patil-87327825b" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/bhagyashripatil05" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
