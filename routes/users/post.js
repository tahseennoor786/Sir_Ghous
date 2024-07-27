import User from "../../model/user/index.js";

const postUser =  async (req, res) =>{
    try {
        const user = await User.create(req.body);
        const data = user.toObject();
        delete data.password;
        res.status(201).send({ status: 201, user: data})
    }catch (error) {
        console.log(error)
        res.status(500).send({ status: 500, error})
    }
}
export default postUser;