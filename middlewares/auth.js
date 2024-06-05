const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({error:'Access denied, no token provided'});
    }
    try{
        const checks = jwt.verify(token,process.env.JWT_SECRET);
        req.user = checks;
        next();
    }catch(err){
        res.status(400).json({error:'Invalid Token'});
    }
}

module.exports = auth;