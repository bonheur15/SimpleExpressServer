const express = require("express");
const app = express();

let count = 0;
app.get("/", (req, res)=>{
    count+=1;
    console.log(count);
    res.send({
        "count":count
    })
});

app.listen(3000, ()=>{
    console.log("Server Started");
})