import userModel from "../models/userModel.js";
import validater from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
//Route for user login
const login = async (req, res) => {
  
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ sucess: false, message: "User does not exist" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.json({ sucess: false, message: "Invalid credentials" });
    }
    const token = createToken(user._id);
    res.json({ sucess: true, token });
  } catch (error) {
    res.json({ sucess: false, message: `${error.message}` });
  }
};

//Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exits = await userModel.findOne({ email });
    if (exits) {
      return res.json({ sucess: false, message: "User already exists" });
    }

    if (!validater.isEmail(email)) {
      return res.json({ sucess: false, message: "Invalid Email" });
    }
    if (password.length < 8) {
      return res.json({
        sucess: false,
        message: "Password must be at least 8 characters",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({ sucess: true, token });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: `${error.message}` });
  }
};
//Route for admin login
const adminLogin = async (req, res) => {
  try {
    const {email , password} = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email+password, process.env.JWT_SECRET);
      res.json({ sucess: true, token });
      
    }else{
      res.json({ sucess: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    
    res.json({ sucess: false, message: `${error.message}` });
  }
};

export { login, registerUser, adminLogin };
