import React from 'react'

const Project = ({projects}) => {
  return (
    <>
      {projects.map(project => {
        return <li key={project.id}>{project.title} - {project.category}</li>
      }
      )}
    </>
  )
}

export default Project
