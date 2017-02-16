module.exports = function landing(content) {
    return '<div class="container landing">' +
		'<div class="row">' +
			'<div class="col s10 push-s1">' +
				'<div class="row">' +
					'<div class="col m5 hide-on-small-only">' +
						'<img src="iphone.png" class="iphone">' +
					'</div>' +
					content +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>';
};