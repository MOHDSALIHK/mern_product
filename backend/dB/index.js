const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://muhammedsalihk:Salih@cluster0.ti4qtlz.mongodb.net/Products')
.then(()=>{
    console.log("db is connected");
}).catch((err)=>{
    console.log(err);
})