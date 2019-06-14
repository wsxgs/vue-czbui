// 本地服务
var express = require('express')
var app = express()

app.get('/api', function (req, res) {
  setTimeout(() => {
    res.send({
      code: 200,
      msg: 'success'
    })
  }, 500)
})

var server = app.listen(9999, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Your server is running here: http://localhost:' + port)
})
