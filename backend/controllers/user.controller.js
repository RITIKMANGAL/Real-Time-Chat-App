import User from "../models/user.models.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;// this will the id of the logged in user.

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password" );// this will contains all the filtered users except the loggedIn user , and without their password.

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};