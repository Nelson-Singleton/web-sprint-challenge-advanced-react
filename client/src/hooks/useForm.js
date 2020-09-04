import { useState } from "react";

// write your custom hook here to control your checkout form
//declate hook
export const useForm = (initialValue) => {
    //set state to blank fields
    const [values, setValues] = useState(initialValue)
    //on change event
    const handleChanges = e => {
        //on change, return the current value, but add the data in the current field to state
        setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }
  

  //return state and handlechange function to be used in checkoutform
    return [values, handleChanges];
  };