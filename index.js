var express = require('express');
var app = express();

app.get('/', function (req, res) {
  const token = req.param('token') || ''
  let text = req.param('text') || ''
  text = text.replace(/“|”/g, '"')
  text = text.replace(/‘|’/g, "'")
  const textArr = text.split('|')

  try {
    value1 = eval(textArr[0])
    value2 = eval(textArr[1])
  } catch (e) {
    return res.json('Invalid input.')
  }  

  const solve = require('rambo').solve
  const solution = solve(value1, value2)
  
  if(solution) {
    return res.json(solution.name)
  } else {
    return res.json('No solution found.')
  }
});

app.listen(3000, function () {
  console.log('Rambot running on port 3000');
});

