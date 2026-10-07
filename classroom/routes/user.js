const express = require("express");
const router = express.Router();

//Index-users
router.get("/",(req,res)=>{
    res.send("get for user");

})


//show-user
router.get("/:id",(req,res)=>{
    res.send("Get for user id");
});

//post-users
router.post("/",(req,res)=>{
    res.send("post for users");
});

//delete-users
router.delete("/:id",(req,res)=>{
    res.send("delete for user id");
});
module.exports = router;