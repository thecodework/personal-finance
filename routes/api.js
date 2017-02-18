module.exports = function(app){
  app.get('/', function(req, res){
    res.send('Welcome to Personal Finance')
  })

  app.get('/users', function(req, res){
  	// code rahega jo database se users ka dat layega.
  	res.setHeader('Content-Type', 'application/json');
  	res.send(JSON.stringify(
  		[{
	  		'id': 1,
	  		'name': 'Santosh Singh',
	  		'dob': '01-01-1993'
  		},
  		{
  			'id': 2,
	  		'name': 'Ashish Singh',
	  		'dob': '20-01-1993'
  		}
  		]
  	))
  })
}
