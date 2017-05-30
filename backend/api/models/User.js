/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id: {
  		type: 'string',
  		size: 20,
  		primary: true
  	},
    parent_id: {
      type: 'string',
      size: 20
    }
  	firstName: {
  		type: 'string',
  		required: true,
  		size: 20
  	},
  	middleName: {
  		type: 'string',
  		size: 20
  	},
  	lastName: {
  		type: 'string',
  		size: 20
  	},
  	userName: {
  		type: 'string',
  		size: 20
  	},
    profilePic: {
      type: 'string',
      size: 20
    },
    coverPic: {
      type: 'string',
      size: 20
    },
  	email: {
  		type: 'email',
  		size: 30,
  		unique: true
  	},
  	mobile: {
  		type: 'number',
  		size: 10,

  	},
  	password: {
  		type: 'string',
  		size: 20
  	},
  	location: {
  		type: 'object',
  	},
  	registrationDate: {
  		type: 'date',
  	},
  	deactivationDate: {
  		type: 'date',
  	},
  	status: {
  		type: 'string',

  	},
  	emailVerified: {
  		type: 'boolean'
  	},
  	mobileVerified: {
  		type: 'boolean'
  	}
  },


  beforeCreate: function(val, cb){
  	// val.id = Helper.createId();
  	cb();
  },

  toJSON: function(data){
	delete data.password;
	return data;
  }


};

