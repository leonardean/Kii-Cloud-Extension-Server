module.exports = {
	
  create: function (req, res) {
		var appID = req.headers['x-app-id'];
		var body = req.body;
		body.appID = appID;
		body.templateId = sails.uuid.v1();
		Templates.create(body).exec(function createCB(err, created) {
			if (err) {
				res.badRequest(err)
			} else {
				res.created(created)
			}
		});
  },

  
  find: function (req, res) {
    var emailConfigID = req.param(emailConfigID);
    
  }
};