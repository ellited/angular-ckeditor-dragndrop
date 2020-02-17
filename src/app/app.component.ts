import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('editor') editor;

    // CKEDITOR.disableAutoInline = true;

  CONTACTS = [
    {
      name: 'Huckleberry Finn',
      tel: '+48 1345 234 235',
      email: 'h.finn@example.com',
      avatar: 'hfin'
    },
    {
      name: 'D\'Artagnan',
      tel: '+45 2345 234 235',
      email: 'dartagnan@example.com',
      avatar: 'dartagnan'
    },
    {
      name: 'Phileas Fogg',
      tel: '+44 3345 234 235',
      email: 'p.fogg@example.com',
      avatar: 'pfog'
    },
    {
      name: 'Alice',
      tel: '+20 4345 234 235',
      email: 'alice@example.com',
      avatar: 'alice'
    },
    {
      name: 'Little Red Riding Hood',
      tel: '+45 2345 234 235',
      email: 'lrrh@example.com',
      avatar: 'lrrh'
    },
    {
      name: 'Winnetou',
      tel: '+44 3345 234 235',
      email: 'winnetou@example.com',
      avatar: 'winetou'
    },
    {
      name: 'Edmond Dantès',
      tel: '+20 4345 234 235',
      email: 'count@example.com',
      avatar: 'edantes'
    },
    {
      name: 'Robinson Crusoe',
      tel: '+45 2345 234 235',
      email: 'r.crusoe@example.com',
      avatar: 'rcrusoe'
    }
  ];

    public editorData =
        `<h1>The Annual Meeting of Fictional Characters</h1>
        <h3>Technical Announcement</h3>
        <p>We hereby have the pleasure to announce that the theme of this year&apos;s meeting is &quot;<strong>E&#x2013;ink Technology and Classical Fairy Tales</strong>&quot;. As every year, the event will be hosted in <em>The Wonderland</em> by <span class="h-card"><a class="p-name u-email" href="mailto:alice@example.com">Alice</a> <span class="p-tel">+20 4345 234 235</span></span> and starts tomorrow at 8:00 GMT.</p>
        <h3>Speakers and Agenda</h3>
        <p>TBA.</p>
        <h3>Venue</h3>
        <p>For detailed information, please contact <span class="h-card"><a class="p-name u-email" href="mailto:h.finn@example.com">Huckleberry Finn</a> <span class="p-tel">+48 1345 234 235</span></span>.</p>
        <h3>Accommodation</h3>
        <p>Many thanks to <span class="h-card"><a class="p-name u-email" href="mailto:r.crusoe@example.com">Robinson Crusoe</a> <span class="p-tel">+45 2345 234 235</span></span> who kindly offered his island to the guests of the annual meeting.</p>
        <hr>
        <p style="text-align: right;"><span class="h-card"><a class="p-name u-email" href="mailto:lrrh@example.com">Little Red Riding Hood</a> <span class="p-tel">+45 2345 234 235</span></span></p>
`;


    ngOnInit(): void {

        this.editor.disableAutoInline = true;

        // Implements a simple widget that represents contact details (see http://microformats.org/wiki/h-card).
        this.editor.plugins.add('hcard', {
            requires: 'widget',

            init(editor) {
                editor.widgets.add('hcard', {
                    allowedContent: 'span(!h-card); a[href](!u-email,!p-name); span(!p-tel)',
                    requiredContent: 'span(h-card)',
                    pathName: 'hcard',

                    upcast(el) {
                        return el.name === 'span' && el.hasClass('h-card');
                    }
                });

                // This feature does not have a button, so it needs to be registered manually.
                editor.addFeature(editor.widgets.registered.hcard);

                // Handle dropping a contact by transforming the contact object into HTML.
                // Note: All pasted and dropped content is handled in one event - editor#paste.
                editor.on('paste', evt => {
                    const contact = evt.data.dataTransfer.getData('contact');
                    if (!contact) {
                        return;
                    }

                    evt.data.dataValue =
                        '<span class="h-card">' +
                        '<a href="mailto:' + contact.email + '" class="p-name u-email">' + contact.name + '</a>' +
                        ' ' +
                        '<span class="p-tel">' + contact.tel + '</span>' +
                        '</span>';
                });
            }
        });

        this.editor.on('instanceReady', function() {
            // When an item in the contact list is dragged, copy its data into the drag and drop data transfer.
            // This data is later read by the editor#paste listener in the hcard plugin defined above.
            this.editor.document.getById('contactList').on('dragstart', function(evt) {
                // The target may be some element inside the draggable div (e.g. the image), so get the div.h-card.
                const target = evt.data.getTarget().getAscendant('div', true);

                // Initialization of the CKEditor data transfer facade is a necessary step to extend and unify native
                // browser capabilities. For instance, Internet Explorer does not support any other data type than 'text' and 'URL'.
                // Note: evt is an instance of CKEDITOR.dom.event, not a native event.
                this.editor.plugins.clipboard.initDragDataTransfer(evt);

                const dataTransfer = evt.data.dataTransfer;

                // Pass an object with contact details. Based on it, the editor#paste listener in the hcard plugin
                // will create the HTML code to be inserted into the editor. You could set 'text/html' here as well, but:
                // * It is a more elegant and logical solution that this logic is kept in the hcard plugin.
                // * You do not know now where the content will be dropped and the HTML to be inserted
                // might vary depending on the drop target.
                dataTransfer.setData('contact', this.CONTACTS[target.data('contact')]);

                // You need to set some normal data types to backup values for two reasons:
                // * In some browsers this is necessary to enable drag and drop into text in the editor.
                // * The content may be dropped in another place than the editor.
                dataTransfer.setData('text/html', target.getText());

                // You can still access and use the native dataTransfer - e.g. to set the drag image.
                // Note: IEs do not support this method... :(.
                if (dataTransfer.$.setDragImage) {
                    dataTransfer.$.setDragImage(target.findOne('img').$, 0, 0);
                }
            });
        });

        // Initialize the editor with the hcard plugin.
        this.editor.inline('editor1', {
            extraPlugins: 'hcard,sourcedialog,justify'
        });
    }
}
