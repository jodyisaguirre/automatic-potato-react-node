import React ,{useState} from "react";

const Form = (props) => {
    const {setData, data} = props
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
    console.log(e.target.value);
    console.log(data);
  };

  const handleAddOnSubmit = (e) => {
    e.preventDefault();
    setData([...data, { name: name, age: age, id: data.length + 1 }]);
    setAge("");
    setName("");
  };
  return (
    <form className="form" onSubmit={handleAddOnSubmit}>
      <p>Add User</p>
      <div className="group">
        <input
          value={name}
          onChange={handleNameChange}
          required="true"
          className="main-input"
          type="text"
        />
        <span className="highlight-span"></span>
        <label className="lebal-email">Name</label>
      </div>
      <div className="container-1">
        <div className="group">
          <input
            required="true"
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
