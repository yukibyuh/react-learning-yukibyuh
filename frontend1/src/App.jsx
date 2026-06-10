import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'


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

function HomePage() {
  const [filter, setFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [skill, setSkill] = useState('Frontend')

  const [projects, setProjects] = useState([
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
  ])

  function handleAddProject(event) {
    event.preventDefault()

    const newProject = {
      title: title,
      description: description,
      posterName: 'Yuki Kakuda',
      posterInitial: 'Y',
      skill: skill,
    }

    setProjects([...projects, newProject])
    setTitle('')
    setDescription('')
    setSkill('Frontend')
    setShowForm(false)
  }

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.skill === filter)

  return (
    <>
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
        <button
          className="post-button"
          onClick={() => setShowForm(!showForm)}
        >
          Post Project
        </button>
      </header>

      {showForm && (
        <form className="project-form" onSubmit={handleAddProject}>
          <h2>Add New Project</h2>

          <input
            type="text"
            placeholder="Project title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />

          <textarea
            placeholder="Project description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />

          <select
            value={skill}
            onChange={(event) => setSkill(event.target.value)}
          >
            <option>Frontend</option>
            <option>Backend</option>
            <option>UI/UX</option>
          </select>

          <button type="submit" className="post-button">
            Add Project
          </button>
        </form>
      )}

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

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App