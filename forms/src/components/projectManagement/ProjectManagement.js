import React, { useState, useEffect } from 'react'
import AddProject from './AddProject'
import Project from './Project'
import { v4 as uuidv4 } from 'uuid';

const ProjectManagement = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
      setProjects([
              {
                  id: uuidv4(),
                  category: "Front-End",
                  title: "JavaScript"
              },
              {
                  id: uuidv4(),
                  category: "Back-End",
                  title: "Node.js"
              },
              {
                  id: uuidv4(),
                  category: "Front-End",
                  title: "React.js"
              }
      ])
    }, [])

    const handleAddProject = (newProject) => {
        setProjects([newProject, ...projects])
    }
    
    const handleRemoveProject = (id) => { //3 [3, 4, 5, 6, 7]

        // spread to prevent mutation of old state
        let oldProjects = [...projects];

        let filteredProjects = oldProjects.filter(project => {
            return id != project.id
        })

        //state is updated with new filtered projects
        setProjects(filteredProjects)
    }

  return (
    <>
    <div className="row mt-5">
        <div className="col-6 offset-3 text-center">
        <h3>Project Management</h3>
        </div>
    </div>

    <div className="row">
        <div className="col-6 offset-3">
            <div className="card">
                <div className="card-header">
                    Add Project
                </div>
                <div className="card-body">
                    <AddProject addProject={(project) => handleAddProject(project)}/>
                    
                </div>
            </div>
            {/* End of Card */}
        </div>
        {/* End of Column */}
    </div>
    {/* End of Row */}
    <div className="row">
        <div className="col-6 offset-3 mt-4">
            <Project onDelete={(id)=>handleRemoveProject(id)} projects={projects}/>
        </div>
    </div>

    </>
  )
}

export default ProjectManagement
