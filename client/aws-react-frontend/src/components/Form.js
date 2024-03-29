import React, { useState } from "react";

const Form = (props) => {
  const { setData,data } = props;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleAddOnSubmit = async () => {
    const payload ={ name: name, age: age,id: data.length + 1 }
    console.log(payload)
    const response = await fetch('http://localhost:5001/users',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
     })
     if(!response.ok){
        throw new Error(`${response.status}`)
     }
     const results = await response.json()
     setData(results)
     console.log('user added')

  }

  return (
    <form className="form" onSubmit={handleAddOnSubmit}>
      <p>Add User</p>
      <div className="group">
        <input
          value={name}
          onChange={handleNameChange}
          required={true}
          className="main-input"
          type="text"
        />
        <span className="highlight-span"></span>
        <label className="lebal-email">Name</label>
      </div>
      <div className="container-1">
        <div className="group">
          <input
            required={true}
            className="main-input"
            type="text"
            value={age}
            onChange={handleAgeChange}
          />
          <span className="highlight-span"></span>
          <label className="lebal-email">Age</label>
        </div>
      </div>
      <button className="submit">submit</button>
    </form>
  );
};

export default Form;
