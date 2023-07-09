module.exports.home = async function(req, res){
    try{
        // Fetch all the habits from the database 
        return res.status(409).json({ message: 'Home Page' });
    }catch(err){
        console.log(err);
    }
    
}