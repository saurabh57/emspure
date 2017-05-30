/**
 * BatchSubject.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	batch_id: {
  		type: 'string',
  		size: 20
  	},
  	subject_id: {
  		type: 'string',
  		size: 20
  	}
  }
};

