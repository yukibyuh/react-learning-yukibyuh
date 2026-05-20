import { useState } from 'react'
import './App.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="poster">
        <div className="avatar">{project.posterInitial}</div>
        <div>
          <p className="poster-name">{project.posterName}</p>
          <p className="poster-role">Project Owner</p>
        </div>
      </div>

      <div className="project-info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>

      <div className="skill-box">
        <span>Skill Needed</span>
        <strong>{project.skill}</strong>
      </div>
    </div>
  )
}

function App() {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      title: 'Internship Finder App',
      description: 'A web app that helps students find internship opportunities.',
      posterName: 'Yuki Kakuda',
      posterInitial: 'Y',
      skill: 'Frontend',
    },
    {
      title: 'AWS Cost Dashboard',
      description: 'A dashboard that tracks AWS costs and sends alerts to users.',
      posterName: 'Ken Suzuki',
      posterInitial: 'K',
      skill: 'Backend',
    },
    {
      title: 'Study Match',
      description: 'A platform for students to find study partners and groups.',
      posterName: 'Anna Wilson',
      posterInitial: 'A',
      skill: 'UI/UX',
    },
  ]

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.skill === filter)

  return (
    <div className="app">
      <section className="hero">
        <div className="hero-text">
          <h1>Project Connect</h1>
          <p>
            Find student projects, discover internship-style experience,
            and connect with teammates who need your skills.
          </p>
        </div>

        <div className="hero-image">💼</div>
      </section>

      <header className="top-bar">
        <h2>Project Board</h2>
        <button className="post-button">Post Project</button>
      </header>

      <section className="filter-section">
        <label htmlFor="skill-filter">Filter by skill:</label>
        <select
          id="skill-filter"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option>All</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>UI/UX</option>
        </select>
      </section>

      <main className="project-list">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </main>
    </div>
  )
}

export default App