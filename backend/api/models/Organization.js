/**
 * Organization.js
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
  	owner_id: {
  		type: 'string',
  		size: 20,
  	},
  	name: {
  		type: 'string',
  		required: true,
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
  		type : 'string',
  		required: 'true',
  		size: 20
  	},
  	location: {
  		type: 'object',
  	},
  	startTime: {
  		type: 'time'
  	},
  	endTime: {
  		type: 'time'
  	},
  	contact: {
  		type: 'number'
  	},
  	publish: {
  		type: 'boolean'
  	}
  }
};

