import User from '../models/user.models.js';
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    console.log(fullName);
    console.log(username);

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" })
    }
    const user = await User.findOne({ username });

    if (user) {// if user is already exist with this username.
      return res.status(400).json({ error: "Username already in use" })
    }

    // HASH PASSWORDS HERE.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);// encryption of the password.


    // Generate of the profile PIC.
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({// new user creation.
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })

    if (newUser) {
      // Generate JWT Token here.
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();// data saving ofm the new user.

      res.status(201).json({// after saving the new user this reponse will send from the server.
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
      })
      console.log("User Signed Up");

    }

    else {
      res.status(400).json({ error: "Invalid user data" });
    }

  }
  catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" })
  }


}


export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });// if user exist or not.
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");// comparsion of entered password and database password of the user.
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);// if the user successfully authenticated.

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic
    })
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" })
  }
}


export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });

  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" })
  }
}