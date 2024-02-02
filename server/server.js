const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/users", userRoutes);

app.use((req,res) =>{
  res.status(404).send('<h1> 404 Page not found </h1>')
})

app.listen(5001, () => {
  console.log("Server Started on Port 5001");
});
