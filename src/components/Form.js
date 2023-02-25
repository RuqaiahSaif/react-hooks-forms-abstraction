import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  const [formData, setFormdata]=useState({
    firstName: "John",
    lastName: "Henry",
    admin:false

  })
  
  function handleFormdataChange(event) {
    const name = event.target.name
    let value = event.target.value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormdata({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  }


  return (
    <form>
      <input type="text"
        name="firstName"
        onChange={handleFormdataChange} 
        value={formData.firstName} />
      <input type="text"
        name="lastName"
        onChange={handleFormdataChange} 
        value={formData.lastName} />
        <label htmlFor="admin">Isadmin</label>
      <input
        type="checkbox"
        name="admin"
        onChange={handleFormdataChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
