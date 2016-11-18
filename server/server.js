const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const routes = require('../database/db_model')

//Requiring the database in the server file runs the code
//in the file, syncing the tables and connecting to the database
const db = require('../database/db_config')

//Morgan lets us see the requests to the server that we make
app.use(morgan('dev'))

//Body parser allows us to access the body property on the
//request object when sending data
app.use(bodyParser.json())

//Using express middleware to route all requests
//to the file where I handle my GET/POST requests
app.use('/', routes)



const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server is listening on port ${port}`))

