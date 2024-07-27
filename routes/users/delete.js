import User from "../../model/user/index.js";
const deleteUser = async (req, res) => {
 try {

    const { id } = req.params;
    await User.findByIdAndDelete(id)
    res.status(200).send({ status: 200, message: "Tahseen you deleted user by id"})

 }catch (error) {
  res.status(500).send({ status: 500, error })
 }

}

export default deleteUser;