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
                  title: "Javascript"
              },
              {
                  id: uuidv4(),
                  category: "Back-End",
                  title: "Node"
              },
              {
                  id: uuidv4(),
                  category: "Front-End",
                  title: "React"
              }
      ])
    }, [])


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
                    <AddProject />
                </div>
            </div>
            {/* End of Card */}
        </div>
        {/* End of Column */}
    </div>
    {/* End of Row */}
    <div className="row">
        <div className="col-6 offset-3 mt-4">
            <Project projects={projects}/>
        </div>
    </div>

    </>
  )
}

export default ProjectManagement
