import Input from "../components/Input";
import ErrorMessage from "../components/ErrorMessage";

const FormPage = ({
    handleChange, 
    handleSubmitEvent,
    formData,
    error
})=>{
    
    return(
        <div className="flex justify-center items-start pt-10 h-screen bg-gray-200">
            <div className="w-[50%] h-max p-5 bg-white shadow-2xl">
            <h1 className="text-lg text-center font-bold mb-1">Enter Details</h1>
            <form onSubmit={handleSubmitEvent}>
                <Input 
                    type="text" 
                    label="Name *" 
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {error.name==="name" && 
                <ErrorMessage mssg={error.message}/>}

                <Input 
                    type="email"
                    label="Email *" 
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {error.name==="email" && 
                <ErrorMessage mssg={error.message}/>}
                
                <Input 
                    type="Number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    label="Age *"
                />
                {error.name==="age" && 
                <ErrorMessage mssg={error.message}/>}


                <div 
                    className="text-xs mb-2 font-semibold"
                >
                    <label>Are you attending with a guest? *</label>
                    <select 
                        name="isGuest" 
                        onChange={handleChange}
                        defaultValue="select"
                        className="border-gray-200 border-2 rounded-lg p-1 ml-3"
                    >
                        <option disabled value="select">select</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                {error.name==="isGuest" && 
                <ErrorMessage mssg={error.message}/>}
                </div>

                {formData.isGuest==="yes" && 
                    <>
                        <Input
                            type="text"
                            name="guestName"
                            value= {formData.guestName}
                            onChange={handleChange}
                            label="Guest Name *"
                        />
                        {error.name==="guestName" && 
                        <ErrorMessage mssg={error.message}/>}
                    </>
                }

                <button  
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2 px-4 rounded-lg mb-3 mt-4"
                    type="submit"
                >
                    Submit
                </button>
            </form>
            </div>
        </div>
    )
}
export default FormPage;