const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const newp = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, newp);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res)=> {
  try {
    const user = await User.findOne({username: req.body.username})
    !user && res.status(400).json("Wrong credentials")

    const validate = await bcrypt.compare(req.body.password, user.password)
    !validate && res.status(400).json("Wrong credentials")

    const {password, ...other} = user._doc;

    res.status(200).json(other);
  }catch(err){
  res.status(500).json(err);
  }
})

module.exports = router;
