const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const PORT = process.env.port || 3000

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

app.use(methodOverride('_method'))


module.exports = app.listen(PORT, ()=>{console.log(`App is listening on Port ${PORT}`)})