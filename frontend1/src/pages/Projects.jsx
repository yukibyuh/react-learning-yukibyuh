import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

function Projects() {
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
    <>
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
    </>
  )
}

export default Projects