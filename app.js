const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js")

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static('public'))

// we use templating to reduce the amount of code
var items = []

app.get('/', function(req, res){


    //var today = new Date()
    
    
    //var currentDay = today.getDay();
   /*
    var day = ""
    if (currentDay == 6 || currentDay==0){
        day ='Weekned'
        
    }
    else {
        //res.write('<h1>its nt a weekend</h1>')
        //res.write('<p> I have to work</p>')
        //res.send()
        day = "weekday"
       

    }

       switch (currentDay) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
          break;
        default:
            console.log('Shhould never be triggerd')  
      }
      res.render('list', {theday:day})
      */


  /*  var option = {
        weekday : 'long',
        day : 'numeric',
        month : 'long'
    }
    var day = today.toLocaleDateString('en-US', option) */

// how do we get "day" variable from data.js to this app.js
// we will add whole code inside a function and call it here in the app.js

    let day = date.getDate()
    res.render('list', { theday : day, new2 : items})
   
})
//theday:items

app.post('/', function(req, res){

    var item = req.body.num1
    console.log(req.body.num1)
    items.push(item)
    res.redirect("/")
})


/*app.post('/', function(req,res){
    var item = req.body.num1
    
    console.log(item)
    //items.push(item)
    //res.redirect('/') 
    
})*/

app.get("/work", function(req,res){
  res.render("list")
})
app.get("/about", function(req, res){
  res.render('about')
})

app.listen(5000, function(){
    console.log('Program Executed')
})