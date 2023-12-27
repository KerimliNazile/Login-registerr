import jwt from "jsonwebtoken"
const secretKey = "hsdbdhkba"


export const adminAuth = async(req,res,next)=>{
  try {
    const token=req.headers.authorization.split(' ')[1];
    const decoded=jwt.verify(token,secretKey)
    if (!decoded || decoded.role !=="admin") {
       return res.status(400).json("token invalid")
    }
    next()
  } catch (error) {
    res.status(500).json(error)
    
  }
}