var fs = require('fs'),
	path = require('path');

module.exports = {
	index: function(req, res) {
		var viewModel = {
				image: {
					uniqueId: 1,
					title: 'Sample Image 1',
					description: 'This is a sample.',
					filename: 'sample1.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now()
				},
				comments: [
				{
					image_id: 1,
					email: 'test@testing.com',
					name: 'Test Tester',
					gravatar: 'http://lorempixel.com/75/75/animals/1',
					comment: 'This is a test comment...',
					timestamp: Date.now()
				},{
					image_id: 1,
					email: 'test@testing.com',
					name: 'Test Tester',
					gravatar: 'http://lorempixel.com/75/75/animals/2',
					comment: 'Another followup comment!',
					timestamp: Date.now()
				}
				]
			}
		res.render('image', viewModel);
	},

	create: function(req, res) {
		var saveImage = function() {
			var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
			imgUrl = '';
			for(var i=0; i < 6; i+=1) {
				imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			var tempPath = req.files[0].path,
				ext = path.extname(req.files[0].originalname).toLowerCase(),
				targetPath = path.resolve('./public/upload/' + imgUrl + ext);
				console.log(tempPath)
				console.log(targetPath)
			if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext ==='.gif') {
				fs.rename(tempPath, targetPath, function(err) {
					if (err) throw err;
					res.redirect('/images/' + imgUrl);
				});
			} else {
				fs.unlink(tempPath, function () {
					if (err) throw err;
					res.json(500, {error: 'Only image files are allowed.'});
				});
			}
		};
		saveImage();
	},
	like: function(req, res) {
		res.send('The image: like POST controller');
	},
	comment: function(req, res) {
		res.send('The image: comment POST controller');
	}
}