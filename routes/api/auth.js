const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check,validationResult } = require('express-validator')


router.get("/",auth, async (req,res) => {

    const {id} = req.user;

    try{
       const user = await User.findById(id).select('-password');
       res.json(user)
    }catch(err) {
        res.status(500).send("Server error")
    }
})




router.post("/",[
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password required').exists()
],async (req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const {email,password} = req.body;

    try{

        let user = await User.findOne({email})

        if(!user) {
            return res.status(400).json({ errors:[{ msg: "Invalid Credentials" }]})
        }

       const isMatch = await bcrypt.compare(password,user.password)

       if(!isMatch) {
        return res.status(400).json({ errors:[{ msg: "Invalid Password" }]})
       }

        const payload = {
            user:{
                id:user.id
            }
        }

        jwt.sign(payload,"mysecrettoken",{ expiresIn: 360000 },(err,token) => {
                if(err) throw err;
                res.json({ token })
        })

      
    }catch(err) {
        console.error(err.message);
        res.status(500).send("Server error")
    }

  
}
)


module.exports = router;