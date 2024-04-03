const express = require("express")

const app = express()

app.use("/img",express.static(__dirname + "/img"))

app.get("/", (req,res) =>{

    res.sendFile(__dirname + "/public/index.html")

})

app.listen(8080, () => console.log("http://localhost:8080"))