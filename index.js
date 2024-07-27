import express from "express";
//import { userSchema } from "./schema/index.js";
import router from "./routes/index.js";
import mongoose from "./db/index.js";

const app = express();
app.use(express.json());

mongoose.connection.on("open", () => {
   console.log("Database connected")

});

//let users = [];

//app.use("/", (req, res, next) => {
   // console.log("request----->", req.originalUrl)
   // next()
//})

app.get("/", (req, res) => {
    res.send(new Date().toString())
})


app.use("/api", router);

// //app.delete("/user/:id", (req, res) => {
 //   const { id } = req.params;
  // //  console.log("id", req.params)
  //  const index = users.findIndex(obj => obj.id === Number(id));
 //  // console.log("index", index)
   // users.splice(index, 1)
  //  res.send({ message: "User Deleted Successfully"})

/// //})

//app.put("/user/:id", (req, res) => {
   // const { id } = req.params;
   // const index = users.findIndex(obj => obj.id === id)
   // users.splice(index, 1, {...req.body, id })
   // res.send({ id, message: "User Updated Successfully Tahseen"})
//})

//app.delete("/user/:id", (req, res) => {
  //  const { id } = req.params;
    //users = users.filter(obj => obj.id !==id)
    //res.send({message: "user deleted successfully"})
//})


//app.get("/user",  async (req, res) => {
   // res.send(users)
//})

//app.post("/user", async (req, res) => {
   // try {
    //    await userSchema.validateAsync(req.body)
    //users.push({...req.body, id: Date.now().toString(36) })
   /// // console.log("{...req.body, id: users.length + 1}" , req.body);
  //  res.send({user: req.body, message: "The User added successfully"})
//}catch (error) {
   // res.status(400).send({ status: 400, message: "Something went wrong"})
//}
//})



app.listen(4000, () => {
    console.log("Server is running on port: 4000")
})
