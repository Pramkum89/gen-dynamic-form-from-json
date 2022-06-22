import formJSON from './formElement.json'
import { useState, useEffect } from 'react';
import Element from './components/Element.js'
import { FormContext } from './FormContext';

console.log("formJSON : ", formJSON)

function App() {

  const [elements, setElements] = useState({})
  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => {
    console.log("useEffect entered")
    setIsRendered(true)
    setElements(formJSON[0])
    console.log("useEffect:", elements)
  }, [elements]
  )

  const { fields, page_label } = elements ?? {}

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(elements)
  }

  const handleChange = (id, event) => {
    // event.preventDefault()
    console.log("handle change called!")
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { field_id, field_type } = field
      if (id === field_id) {
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked
            break;
          default:
            field['field_value'] = event.target.value
            break;
        }

        setElements(newElements)
      }

      console.log(elements)
    });
    console.log("Changed values:", elements)
  }

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <h2>Generating Dynamic Form Fields from JSON using React!!</h2>
        <br />
        {console.log("code exec: 1")}
        {
          isRendered &&
          <div>
            {console.log("code exec: 2")}
            <h4>{page_label}</h4>
            <form>
              {fields ? fields.map((field, index) => {
                return <Element key={index} field={field} />
              }) : {}}       <br />
              <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>Submit</button>
            </form>
          </div>
        }
      </div>
    </FormContext.Provider>
  );
}

export default App;
