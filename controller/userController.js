const users = require("../models/users");
const jwt = require('jsonwebtoken')

// register
exports.registerController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      res.status(409).json("Already email registered");
    } else {
      const newUser = new users({
        name,
        email,
        password,
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// login
exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      if (existingUser.password == password) {
        const token = jwt.sign({userId:existingUser._id},"mysecretkey")
        res.status(200).json({existingUser,token});
      } else {
        res.status(409).json("inavid email or password");
      }
    } else {
      res.status(401).json("inavid email or password");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
