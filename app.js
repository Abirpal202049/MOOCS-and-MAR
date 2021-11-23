const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000


// Serving Static Files
//! Route 0 - '/'
app.use(express.static("public")) //* Built In Middleware


//* Built In Middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))



//? Using the ejs framework
app.set('view engine', 'ejs')



//! Importing the Users Route - '/v1'
const userRoute = require('./routes/users')
app.use("/v1", userRoute)


app.listen(PORT)