import { useState } from "react"

export default function Contact() {

  const [formData, setFormData] = useState({})

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function sendData(e) {
    e.preventDefault()
    var formattedBody = `Name: ${formData.name} \nEmail: ${formData.email} \nComment: ${formData.comment}`;
    var mailToLink = "mailto:santhoshpandi543_it@mepcoeng.ac.in?subject=Message From Portfolio👋&body=" + encodeURIComponent(formattedBody);
    window.location.href = mailToLink;
  }


  return (
    <>
      <form id="contact" onSubmit={sendData} className="my-5 duration-150 flex flex-col justify-center p-[20px] md:w-[50%] w-[90%] mx-auto hover:shadow-[0px_0px_4px_4px] rounded-md hover:shadow-green-400">
        <h1 className="text-purple-300 text-[25px] md:text-[35px] font-semibold mx-auto">Contact</h1>
        <span className="text-white">Name</span> <input onChange={handleChange} name="name" type="text" className="focus:outline-none caret-green-800 px-4 md:py-[8px] py-[5px] rounded-sm" required /> <br />
        <span className="text-white">Email</span> <input onChange={handleChange} name="email" type="email" id="" className="focus:outline-none caret-green-800 px-4 md:py-[8px] py-[5px] rounded-sm" required /> <br />
        <span className="text-white">Comment</span> <textarea onChange={handleChange} name="comment" id="" className="focus:outline-none caret-green-800 px-4 md:py-[8px] py-[5px] rounded-sm" required></textarea> <br />
        <button className="bg-green-500 hover:bg-blue-600 hover:text-white duration-150 text-blact px-2 py-1 rounded-sm">Send</button>
      </form>
    </>
  )
}