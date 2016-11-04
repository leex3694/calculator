/**
 * Created by usuario on 10/9/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var calculateSchema = new Schema({
    inputOne: Number,
    inputTwo: Number,
    Operator: String

});


var Calculate = mongoose.model("Calculate", calculateSchema);

module.exports = Calculate;