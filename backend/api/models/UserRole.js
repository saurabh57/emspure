/**
 * UserRole.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	organizarion_id: {
  		type: 'string',
  		size: 20
  	},
  	batch_id: {
  		type: 'string',
  		size: 20
  	},
  	user_id: {
  		type: 'string',
  		size: 20
  	},
  	role_id: {
  		type: 'string',
  		size: 20
  	}
  }
};

