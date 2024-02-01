import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Form from "../components/Form";

const Landing = () => {
  const url = "http://localhost:5001/users";

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 

  const handleDelete = (id) => {
    const filterPersonById = data.filter((person) => person.id != id);
    setData(filterPersonById);
    console.log(filterPersonById);
  };

  if (!data) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="cardContainer">
        {data.map((person, index) => (
          <Card
            name={person.name}
            age={person.age}
            id={person.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <Form setData={setData} data={data}/>
      {/* <form onSubmit={handleAddOnSubmit}>
        <input
          value={name}
          placeholder="name"
          onChange={handleNameChange}
        ></input>
        <input value={age} placeholder="age" onChange={handleAgeChange}></input>
        <button type="submit">Add Person</button>
      </form> */}
    </>
  );
};

export default Landing;
