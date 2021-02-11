import React, { useState } from "react";
import {Dropdown} from 'react-bootstrap'
const AddProject = () => {

    const [category, setCategory] = useState('')
  return <>
  <form>
    <div className="row">
      <div className="col-9">
        <div className="form-group">
        <input type="text" className="form-control" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Enter project" />
      </div>
      </div>
      <div className="col-3">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Dropdown
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Front-end</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Back-End</Dropdown.Item>
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