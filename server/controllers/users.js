import jwt from 'jsonwebtoken'
import Users from "../models/users.js"


const secretKey = "hsdbdhkba"
//register
export const userRegister = async (req, res) => {

    try {
        const user = new Users({
            username: req.body.username,
            password: req.body.password
        })
        await user.save()
        res.status(200).json("user created!")
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


//login

export const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username) {
            res.status(500).res.json("user not found!")
        }
        if (!password) {
            res.status(500).res.json("user not found!")
        }
        const user = await Users.findOne({ username })
        if (!user) {
            res.status(500).res.json("user not found!")
        }
        if (user.password !== password) {
            res.status(404)
        }
        const token = jwt.sign({ username:username,role:user.role  }, secretKey, { expiresIn: '1h' });
        res.send(token)

    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// delete 

export const deleteUser=async (req,res)=>{
    try {
       const {id}=req.params
       const user=await Users.findByIdAndDelete(id)
       res.status(200).json("user deleted")
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

//getuser

export const getUser=async (req,res)=>{
    try {
      const users=await Users.find({})
      res.send(users)
       
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
