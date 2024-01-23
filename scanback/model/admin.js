const mongoose=require('mongoose')

const adminSchema=mongoose.Schema(
{


    name:{
        type:String,
        required:true
    },

    email:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    }

   

  
},
{
    timestamps:false
})

const adminModels= mongoose.model('admins', adminSchema)

module.exports=adminModels