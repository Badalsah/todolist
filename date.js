// How do we export this day variable to another file.

//module.exports = "Hello World" // now this module exports Hello world

module.exports.getDate = getDate // now it will export Data









// this will be our own little file to generate real time Date
function getDate(){

var today = new Date()

var option = {
    weekday : 'long',
    day : 'numeric',
    month : 'long'
}
var day = today.toLocaleDateString('en-US', option)
return day
}

function getDay(){

    var today = new Date()
    
    var option = {
        weekday : 'long'
    }
    var day1 = today.toLocaleDateString('en-US', option)
    return day1
    }
