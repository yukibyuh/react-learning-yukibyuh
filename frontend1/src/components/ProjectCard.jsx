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
  
  export default ProjectCard