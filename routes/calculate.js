/**
 * Created by usuario on 10/8/15.
 */
var express = require('express');
var router = express.Router();
var calculate = require("../models/inputData.js");


var answer= 0;

router.post('/add', function(req, res, next){
    console.log("adding is working");
    //console.log(req.body);
    answer = parseInt(req.body.num1) + parseInt(req.body.num2);
    console.log(answer);
    res.send("ok");
    });

router.post('/subtract', function(req, res, next){
    console.log("subtracting is working");
    //console.log(req.body);
    answer = (req.body.num1) - (req.body.num2);
    console.log(answer);
    res.send("ok");
});

router.post('/divide', function(req, res, next){
    console.log("dividing is working");
    //console.log(req.body);
    answer = (req.body.num1) / (req.body.num2);
    console.log(answer);
    res.send("ok");
});

router.post('/multiply', function(req, res, next){
    console.log("multiplication is working");
    //console.log(req.body);
    answer = (req.body.num1) * (req.body.num2);
    console.log(answer);
    res.send("ok");
});

router.get("/getAnswer", function(req, res, next){
    res.json(answer)
});




module.exports = router;
