 function isAdmin (req,res,next){
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(403).send('Access denied. You must be an Admin to perform this action.');
    }
}

module.exports = isAdmin