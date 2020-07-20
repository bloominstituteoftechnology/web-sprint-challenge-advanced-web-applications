import React, {useState} from 'react'

const ContactPage = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: "",
      });

      const handleChanges = (e) =>{
          setContact({
              ...contact,
              [e.target.name]: e.target.value
          })

      }
    return (
     <div>
      <form>
          <input
          id="name"
          type="text"
          name="name"
          placeholder = "Your Name"
          value = {contact.name}
          onChange={handleChanges}
          />
          <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={contact.email}
      />
      <textarea
      id= "message"
      type ="text"
      name= "message"
      value= {contact.message}
      onChange={handleChanges}
      />
      <button>Submit</button>

      </form>
     </div>
    )
}

export default ContactPage;