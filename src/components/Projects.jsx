import React from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="cards">
        {projects.map((p, i) => (
          <article className="card" key={i}>
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>
            <ul className="tags">
              {p.tech.map((t, j) => <li key={j}>{t}</li>)}
            </ul>
            <div className="card-actions">
              {p.live !== '#' ? <a className="btn btn-sm" href={p.live} target="_blank" rel="noreferrer">Live</a> : null}
              <a className="btn btn-sm outline" href={p.code} target="_blank" rel="noreferrer">Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
