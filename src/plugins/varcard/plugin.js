(function () {
    CKEDITOR.plugins.add('varcard', {
        requires: 'widget',

        init: function (editor) {
            editor.widgets.add('varcard', {
                allowedContent: 'span(!variable-card);',
                requiredContent: 'span(variable-card)',
                pathName: 'varcard',

                upcast: function (el) {
                    return el.name === 'span' && el.hasClass('variable-card');
                }
            });

            // This feature does not have a button, so it needs to be registered manually.
            editor.addFeature(editor.widgets.registered.varcard);

            // Handle dropping a contact by transforming the contact object into HTML.
            // Note: All pasted and dropped content is handled in one event - editor#paste.
            editor.on('paste', function (evt) {
                const variable = evt.data.dataTransfer.getData('variable');
                if (!variable) {
                    return;
                }

                evt.data.dataValue =
                    '<span class="variable-card">' +
                    variable +
                    '</span>';
            });
        }
    });

})();
