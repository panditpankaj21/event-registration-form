import { useState } from "react";

const useForm = (initialState) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const [error, setError] = useState({
    name:'',
    message:''
  })

  const [formData, setFormData] = useState(initialState);


  const handleChange = (e) => {
    const {name, value} = e.target;
      setFormData(prev => ({
          ...prev,
          [name]:value,
      }));
  };

  const handleSubmitEvent = (event)=>{
    event.preventDefault();
    
    // validataion

    if(formData.name===""){
        setError(prev => ({
          ...prev,
          name:"name",
          message: "Name is Required!"
        }));
        return;
    }
    if(formData.email===""){
      setError(prev => ({
        ...prev,
        name:"email",
        message: "Email is Required!"
      }));
        return;
    }

    if(!formData.age){
      setError(prev => ({
        ...prev,
        name:"age",
        message: "Age is Required!"
      }));
        return;
    }
    if(parseInt(formData.age)<=0){
      setError(prev => ({
        ...prev,
        name:"age",
        message: "Please Enter Valid Age!"
      }));
      return;
    }
    
    if(formData.isGuest==="select"){
      setError(prev => ({
        ...prev,
        name: "isGuest",
        message: "Please select yes or no!"
      }))
      return;
    }

    if(formData.isGuest==="yes" && formData.guestName===""){
      setError(prev => ({
        ...prev,
        name:"guestName",
        message: "Guest Name is Required"
      }));
      return;
    }

    setError(prev => ({
      ...prev,
      name:"",
      message: ""
    }));

    setIsSubmit(true);
  }

  return {
    formData,
    isSubmit,
    error,
    handleChange,
    handleSubmitEvent,
  }

}

export default useForm;