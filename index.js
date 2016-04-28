module.exports = function(robot) {
	robot.respond(/test Manh's web/, function(msg, done) {
		robot.http("http://139.59.230.129/").get()(function(err, res, body) {
			if (err) {
				msg.reply("Encountered an error :( " + err, done);
			}
		    msg.reply("It's working!", done);
		});
	});
};
