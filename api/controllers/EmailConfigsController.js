/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  /**
   * `EmailController.create()`
   */
  create: function (req, res) {
		var appID = req.headers['x-app-id'];
		var body = req.body;
		body.appID = appID;
		EmailConfigs.create(body).exec(function createCB(err, created) {
			if (err) {
				res.badRequest(err)
			} else {
				res.created(created)
			}
		});
  },

  /**
   * `EmailController.find()`
   */
  find: function (req, res) {
    res.notFound('Bad boy, you are not supposed to be able to see all the email configs!');
  }
};

