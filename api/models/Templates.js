module.exports = {

  attributes: {  	
  	appID: {
  		type: 'string',
  		foreignKey: true,
  		required: true
  	},
  	subject: {
  		type: 'string',
  		required: true
  	},
    contentType: {
      type: 'string',
      enum: ['text', 'html'],
      required: true
    },
  	content: {
  		type: 'string',
  		required: true
  	},
    templateId: {
      type: 'string',
      unique: true,
      primaryKey: true,
      required: true
    }
  }
};