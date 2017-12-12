const express = require("express");
const app = express();
const dataJson = require("./static/js/test.json");
app.get("/getData",(req,res) => {
    res.json({
        data: dataJson
    })
});
app.listen(8888);