import React, { useState } from "react";
import {Dropdown} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AddProject = (props) => {

    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    // id, category, title

    const handleSubmit = (e) => {

        e.preventDefault();

        // addProject passed from parent. Expects an object as an argument
        // with 3 keys: id, title, category

        props.addProject({
            id: uuidv4,
            title,
            category
        })
    }

  return <>
  <form onSubmit={handleSubmit}>
    <div className="row">
      <div className="col-9">
        <div className="form-group">
        <input type="text" className="form-control" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Enter project" value={title} onChange={(e)=> setTitle(e.target.value)}/>
      </div>
      </div>
      <div className="col-3">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {category}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setCategory('Front-end')} href="#/action-1">Front-End</Dropdown.Item>
            <Dropdown.Item onClick={()=> setCategory('Back-end')} href="#/action-2">Back-End</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
    {/* end of row */}
    <button type="submit" className="btn btn-secondary">Submit</button>
  </form>
  </>;
};
export default AddProject;