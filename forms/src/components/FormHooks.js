import React, {useState} from 'react'

const FormHooks = () => {

  const initialState = {
    textValue: 'hello',
    isValid: false,
    selectValue: ''
  }
  const [state, setState] = useState(initialState)

  const handleChange = (e) => {

    console.log(e.target.value);

    let targetType = e.target.type == "checkbox" ? e.target.checked : e.target.value;
    let name = e.target.name


    setState({
      [name] : targetType
    }
    )

    console.log(state);
  }


  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form was submitted!");
  }
  
  return (
    <>
      <h1 className="text-center mt-5">Hook Based Forms</h1>

      <div className="row mt-5">
        <div className="col-6 offset-3 formColor formFont p-5">
          
          <form onSubmit={handleForm}>

            <input name="textValue" type="text" value={state.textValue} onChange={handleChange}/>

            <br/>

            <input name="isValid" type="checkbox" checked={state.isValid} onChange={handleChange}/>

            <br/>

            <select name="selectValue" onChange={handleChange}>
              <option value="NewYork">New York</option>
              <option value="Houston">Houston</option>
              <option value="Seattle">Seattle</option>
              <option value="SantaBarbara">Santa Barbara</option>
              <option value="Atlanta">Atlanta</option>
            </select>

            <input type="submit"/>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormHooks