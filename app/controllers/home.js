var homeController = function(server){

	console.log("Controller home aquí ");

	server.route('/')

		.get(function (req,res){
			res.render('index');
		});

};

module.exports = homeController;