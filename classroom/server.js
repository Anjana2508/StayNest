const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");

app.use(session({
   
  secret: "mysupersessionstring",
  resave: false,
  saveUninitialized: true,
}));


app.use(session(sessionOption));

app.get("/register",(req,res)=>{
    let{name ="anonymous"} = req.query;
    console.log(req.session);
    res.send(name);
});

app.get("/hello",(req,res) =>{
    res.send(`hello`);
})

app.listen(3000,()=>{
    console.log("server is listing to 3000");
});