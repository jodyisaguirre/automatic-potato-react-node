const users = [
    {
      name: "John",
      age: 30,
      id: 1,
    },
    {
      name: "Alice",
      age: 25,
      id: 2,
    },
    {
      name: "Bob",
      age: 35,
      id: 3,
    },
  ];

exports.getUsers = (req, res) => {
    res.json(users);
  }

exports.addUser = (req, res) => {
    const userToBeAdded = req.body;
    users.push(userToBeAdded);
    res.status(201).send(users);
  }

  exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const userIdToBeRemoved = users.find((user) => user.id === id);
    const index = users.indexOf(userIdToBeRemoved);
  
    users.splice(index, 1);
    res.status(201).send(users);
  }
