require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(`AWS deployment test name: ${process.env.DEV_NAME}`)
})

app.listen(port, () => {
    console.log(`RUNNING ON PORT ${port}, ${process.env.MONGODB_URI}`)
})