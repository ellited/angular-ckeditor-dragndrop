(function () {
	CKEDITOR.plugins.add('hcard', {
		requires: 'widget',

		init: function(editor) {
			editor.widgets.add('hcard', {
				allowedContent: 'span(!h-card); a[href](!u-email,!p-name); span(!p-tel)',
				requiredContent: 'span(h-card)',
				pathName: 'hcard',

				upcast: function(el) {
					return el.name === 'span' && el.hasClass('h-card');
				}
			});

			// This feature does not have a button, so it needs to be registered manually.
			editor.addFeature(editor.widgets.registered.hcard);

			// Handle dropping a contact by transforming the contact object into HTML.
			// Note: All pasted and dropped content is handled in one event - editor#paste.
			editor.on('paste', function(evt) {
				const contact = evt.data.dataTransfer.getData('contact');
				if (!contact) {
					return;
				}

				evt.data.dataValue =
					'<span class="h-card">' +
					contact +
					'</span>';
			});
		}
	});

})();
