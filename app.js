const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.port || 3000
const db = require('./models')

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

app.use(methodOverride('_method'))


app.get('/', (req, res)=>{
    res.json({message: "Welcome to your application"})
})


module.exports = app.listen(PORT, ()=>{console.log(`App is listening on Port ${PORT}`)})