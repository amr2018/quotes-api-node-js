// import modules
const express = require('express')


// start init app
app = express()

// set Middlewhere
app.use(express.json())

// set routes
app.use('/api/user', require('./routes/user'))

// start listning
app.listen(8080, () => console.log('Listening.....'))
