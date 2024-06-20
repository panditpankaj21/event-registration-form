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

    if(formData.name===""){
        setError(prev => ({
          ...prev,
          name:"name",
          message: "Please Enter Name!"
        }));
        return;
    }
    if(formData.email===""){
      setError(prev => ({
        ...prev,
        name:"email",
        message: "Please Enter email!"
      }));
        return;
    }

    if(!formData.age){
      setError(prev => ({
        ...prev,
        name:"age",
        message: "Please Enter your age!"
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

    if(formData.isGuest==="yes" && formData.guestName===""){
      setError(prev => ({
        ...prev,
        name:"guestName",
        message: "Please Enter guestName!"
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