import {useState} from 'react'

function useForm(getFreshModel) {

    const [values, setValues] = useState(getFreshModel());
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const {name,value} = e.target;
        setValues({
            ...values, // Retain all current form values
            [name]: value // Update the specific field that changed
        })
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