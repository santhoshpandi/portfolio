import { useState } from "react"
import Links from "./minorComponents/Links"
import data from "../data/data.json"

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
    var mailToLink = "mailto:"+data.email+"?subject=Message From Portfolio👋&body=" + encodeURIComponent(formattedBody);
    window.location.href = mailToLink;
  }


  return (
    <>
      <section id="contact" className="py-10 md:px-10 px-5 bg-[#1a202c45] text-[#fefcbf]">
        <h2 className="text-3xl font-bold text-[#15fa80] mb-4">Get In Touch</h2>
        <hr className="border-t border-[#bffecd] mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-[#15fa30] mb-4">Let's Connect</p>
            <h3 className="text-4xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-[#e2e8f0] text-lg mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-2 relative z-10">
              <div className="flex items-center gap-4 text-xl">
                <p className="mb-4">{data.email}</p>
              </div>
              <ul className="flex gap-4 text-[30px] mt-1">
                <Links />
              </ul>
            </div>
          </div>
          <form
            onSubmit={sendData}
            className="bg-[#2d3748] md:p-8 p-2 py-3 rounded-lg border border-[#209d20] relative z-10"
          >
            <div className="mb-6">
              <label className="block text-[#fefcbf] mb-2">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className="w-full p-3 bg-[#1a202c] border border-[#209d20] rounded-md text-[#fefcbf] focus:outline-none focus:ring-2 focus:ring-[#15fa47]"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#fefcbf] mb-2">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full p-3 bg-[#1a202c] border border-[#209d20] rounded-md text-[#fefcbf] focus:outline-none focus:ring-2 focus:ring-[#15fa47]"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#fefcbf] mb-2">Message</label>
              <textarea
                name="message"
                onChange={handleChange}
                value={formData.message}
                className="w-full p-3 bg-[#1a202c] border border-[#209d20] rounded-md text-[#fefcbf] focus:outline-none focus:ring-2 focus:ring-[#15fa47]"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#2ddd47] text-[#1a202c] rounded-md font-medium transition cursor-pointer hover:bg-[#000000] hover:text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}