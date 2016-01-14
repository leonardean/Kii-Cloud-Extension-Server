/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  /**
   *  create email config data
   */
  create: function (req, res) {
		var emailConfigID = req.headers['x-app-id'];
		var body = req.body;
		body.emailConfigID = emailConfigID;
		EmailConfigs.create(body).exec(function createCB(err, created) {
			if (err) {
				res.badRequest(err)
			} else {
				res.created(created)
			}
		});
  },

  /**
   *  get single email config data
   */  
  findOne: function(req, res) {
  	var emailConfigID = req.param('emailConfigID');
  	EmailConfigs.findOne({emailConfigID: emailConfigID}).exec(function findOneCB(err, found){
  		res.jsonp(200, found)
		});
  },

  /**
   *  update an email config
   */
  update: function(req, res) {
  	var emailConfigID = req.param('emailConfigID');
  	EmailConfigs.update({emailConfigID: emailConfigID},req.body).exec(function afterwards(err, updated){
  		if (err) {
    		res.serverError(err);
    		return;
  		}
  		res.ok(updated[0]);
		});	
  }, 

  /**
   *  remove an email config
   */
  destroy: function(req, res) {
  	var emailConfigID = req.param('emailConfigID');
  	EmailConfigs.destroy({emailConfigID: emailConfigID}).exec(function deleteCB(err){
  		if (err) {
  			res.serverError(err);
  			return;
  		}
  		res.noContent()
  	})
  }  
};

