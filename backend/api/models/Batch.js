/**
 * Batch.js
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
  	organization_id: {
  		type: 'string',
  		size: 20
  	},
  	fee_id: {
  		type: 'string',
  		size: 20
  	},
  	grade_id: {
  		type: 'string',
  		size: 20
  	},
  	name: {
  		type: 'string',
  		required: true,
  		size: 20
  	},
  	startTime: {
  		type: 'time'
  	},
  	endTime: {
  		type: 'time'
  	},
  	teacher: {
  		type: 'string',
  		size: 20
  	},
  	guestTeacher: {
		type: 'string',
		size: 20
  	},
  	totalSeats: {
  		type: 'number',
  		size: 20
  	},
  	publish: {
  		type: 'boolean'
  	}
  }
};

