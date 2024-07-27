import User from "../../model/user/index.js";

const getUsers = async (req, res) => {
    try {
     const users = await User.find();
     res.status(200).send({ status: 200, users })
    }catch (error) {
        res.status(500).send({ status: 500, error})
    }

}
export default getUsers;