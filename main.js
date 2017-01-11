var express = require('express')
var app = express()

app.set('port', process.argv[2])
app.set('view engine', 'jsx')
app.set('views', __dirname + '/views')

app.engine('jsx', require('express-react-views').createEngine({transformViews: false}))

require('babel/register')({
  ignore: false
})

var data = [
  {key: 1, name: 'Vincent Koch', posName: 'Prop', posNum: 1},
  {key: 2, name: 'Malcolm Marx', posName: 'Hooker', posNum: 2},
  {key: 3, name: 'Coenie Oosthuizen', posName: 'Prop', posNum: 3},
]

app.use('/team', function(req, res) {
  //res.writeHead(200,{'content-type':'text/html'})
  res.render('index', {data: data})
})

app.listen(app.get('port'), function () {})
