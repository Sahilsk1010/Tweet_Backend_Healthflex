const User  = require('../models/user');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        bcrypt.hash(password, 10, async (err, hashedPassword) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Internal server error" });
            }

           
            const user = new User({ username, password: hashedPassword });

            
            await user.save();

         
            return res.status(200).json({ message: "User created successfully" });
        });

    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: "Some Glitch" });
    }
};
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username }); 
        if (!user) {
            return res.status(400).json("User Not found");
        }
        const check = await bcrypt.compare(password, user.password);
        if (!check) {
            return res.status(400).json("Incorrect password");
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
        res.json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error");
    }
};


module.exports = {
    register,
    login,
  };