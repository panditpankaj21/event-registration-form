
import FormPage from "./pages/FormPage";
import SummaryPage from "./pages/SummaryPage";
import useForm from "./customHooks/useForm";

function App() {

  const {
    formData, 
    isSubmit, 
    error, 
    handleChange, 
    handleSubmitEvent,  
  } = useForm({
    name: '',
    email: '',
    age: '',
    isGuest: "no",
    guestName: '',
  })

  return (
    <>
      {!isSubmit ?
       <FormPage
          handleChange = {handleChange}
          handleSubmitEvent={handleSubmitEvent}
          formData = {formData}
          error = {error}
       /> 
       :
       <SummaryPage
          formData = {formData}
       />}
    </>
  )
}

export default App
