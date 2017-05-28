/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


function UserController(){

	this.in = function(req,res) {
		var user = {
			email: req.body.email,
			password: req.body.password
		};

		User.findOne(user).exec(function(err, data){
			if(err){
				console.log('[user in error]',err);
				res.send(500);
			} else if(data){
				console.log(data);
			}

			res.send(200);
		});
	},

	this.up = function(req,res) {
		var user = {
			firstName: req.body.firstName,
			middleName: req.body.middleName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password
		};

		User.create(user).exec(function(err, data){
			if(err){
				console.log('[user create error]',err);
				res.send(500);
			} else if(data){
				console.log(data);
			}

			res.send(200);
		});
	},

	this.update = function(req,res) {
		var user = {
			firstName: req.body.firstName,
			middleName: req.body.middleName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password
		};

		User.update({id:req.body.id},user).exec(function(err, data){
			if(err){
				console.log('[user update error]',err);
				res.send(500);
			} else if(data){
				console.log(data);
			}

			res.send(200);
		});
	}

}

module.exports = new UserController();

