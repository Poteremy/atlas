const express = require('express');
const chalk = require('chalk');
const path = require('path')

const app = express();

const port = process.env.PORT || 5500;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '/public/')))
app.use('/', require('./routes/index'))

app.listen(port, function () {
  console.log((`Listening on port ${chalk.blue(port)}`))
})