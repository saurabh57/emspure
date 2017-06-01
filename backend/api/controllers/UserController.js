/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var statusCode = sails.config.statusCode;

function UserController(){

	this.signin = function(req,res) {
		var resObj = {}, user = {
			email: req.body.email,
			password: req.body.password
		};

		User.findOne(user).exec(function(err, data){
			if(err){
				console.log('[user in error]',err);
				resObj.status = statusCode[400].messageKey;
			} else if(data){
				resObj.status = statusCode[200].messageKey;
				console.log(data);
			}

			res.send(resObj);
		});
	},

	this.signup = function(req,res) {
		var resObj = {};

		User.create(req.body).exec(function(err, data){
			if(err){
				resObj.statusCode = 400;
				resObj.status = statusCode[resObj.statusCode].messageKey;
				resObj.message = statusCode[resObj.statusCode].message;
				resObj.error = err;
			} else if(data){
				resObj.statusCode = 200;
				resObj.status = statusCode[resObj.statusCode].messageKey;
				resObj.message = statusCode[resObj.statusCode].message;
				resObj.response = User.toJSON(data);
			}
			res.send(resObj);
		});
	},

	this.updateUser = function(req,res) {
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
				resObj.status = statusCode[400].messageKey;
			} else if(data){
				resObj.status = statusCode[200].messageKey;
				console.log(data);
			}

			res.send(resObj);
		});
	}

}

module.exports = new UserController();
