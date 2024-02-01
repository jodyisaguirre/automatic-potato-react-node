import React from "react";

const Card = (props) => {
  const { name, age, id, handleDelete, index } = props;

  return (
    <div className="card">
      <p className="heading">{name}</p>
      <p>{age}</p>
      <p>{id}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Card;
