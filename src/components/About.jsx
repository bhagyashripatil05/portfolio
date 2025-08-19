import React from 'react'

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="about-grid">
        <div>
          <p>
            I’m a frontend developer focused on turning ideas into smooth, responsive web apps.
            My stack includes <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>.
          </p>
          <p>
            Recently, I’ve been improving accessibility, building reusable components, and
            deploying sites with GitHub Pages.
          </p>
        </div>
        <ul className="skills">
          <li>HTML5</li>
          <li>CSS3 / Flexbox / Grid</li>
          <li>JavaScript (ES6+)</li>
          <li>React + Vite</li>
          <li>Responsive Design</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  )
}
