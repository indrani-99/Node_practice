const mongoose=require('mongoose');

const connectionWithDB=async ()=>{
try{
    mongoose.connect('mongodb://127.0.0.1:27017/Auth');
    console.log("Database connected");
}
catch(err){
    console.log(err);
}
}

module.exports={connectionWithDB};