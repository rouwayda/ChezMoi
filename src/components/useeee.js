import React, {useState, useEffect} from "react";
import validation from "./validation";
const useeee = (submitForm) => {
const [values,setValues] = useState({
    fullname:"",
    email:"",
    password:"",
});
const [dataIsCorrect, setdataIsCorrect] = useState(false);
const [errors,setError]= useState({});
const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};
    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);
const handleFormSubmit =(event) =>{
    event.preventDefault();
    setError(validation(values));
    setdataIsCorrect(true);
};
return {handleChange,handleFormSubmit,values,errors};
};
export default useeee;
