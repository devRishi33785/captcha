const express  = require("express");

const app = express();

app.set("view engine","ejs");

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/contact",(req,res)=>{
    const {name ,email,message} = req.body

    res.redirect("/")
})

const PORT  = process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})