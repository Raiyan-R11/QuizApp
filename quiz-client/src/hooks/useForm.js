import {useState} from 'react'

function useForm(getFreshModelObject) {

    const [values, setValues] = useState(getFreshModelObject());
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const {name,value} = e.target;
        setValues({
            ...values, // Retain all current form values
            [name]: value // Update the specific field that changed
        })
        console.log(JSON.stringify(values))
    }
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  }
   
}

export default useForm