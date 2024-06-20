

const SummaryPage  = ({
    formData,
}) => {
    return(
        <div className="h-screen bg-gray-200 flex justify-center w-full">
            <div className=" bg-white w-1/2 h-max mt-16 p-7 shadow-2xl rounded-lg">
            <h2 className="text-2xl text-center font-bold mb-4">Summary 🙂</h2>


            <div className="flex justify-start items-center bg-sky-50 p-2">
                <label className="mt-1 text-xl font-semibold  text-gray-900">Name: </label>
                <p className="text-xl ml-5">{formData.name}</p>
            </div>

            <div className="flex justify-start items-center mt-2 p-2">
                <label className="mt-1 text-xl font-semibold  text-gray-900">Email: </label>
                <p className="text-xl ml-5">{formData.email}</p>
            </div>

            <div className="flex justify-start items-center bg-sky-50 mt-2 p-2">
                <label className="mt-1 text-xl font-semibold  text-gray-900">Age: </label>
                <p className="text-xl ml-5">{formData.age}</p>
            </div>

            <div className="flex justify-start items-center mt-2 p-2">
                <label className="mt-1 text-xl font-semibold  text-gray-900">Are you attending with a guest ?(yes/no): </label>
                <p className="text-xl ml-5">{formData.isGuest}</p>
            </div>

            {
                formData.isGuest==="yes" && 
                <div className="flex justify-start items-center bg-sky-50 mt-2 p-2">
                    <label className="mt-1 text-xl font-semibold  text-gray-900">Guest Name: </label>
                    <p className="text-xl ml-5">{formData.guestName}</p>
                </div>
            }
            </div>
        </div>
    )
}

export default SummaryPage;