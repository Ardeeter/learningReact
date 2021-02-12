import React from 'react'

const ProjectItem = (props) => {
  return (
    <>
      <li>
        <div className="row">
          <div className="col-8">
          {props.project.title} - 
          &nbsp;
          <span className="quote">{props.project.category}</span>
          </div>
          <div className="col-4 text-right pr-5">
            <a href="#" onClick={() => project.onDelete(props.project.id)}> X 🔥 </a>
          </div>
        </div>
      </li>
    </>
  )
}

export default ProjectItem
