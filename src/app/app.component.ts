import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


    ckeConfig = {
        extraPlugins: 'divarea,hcard',
        forcePasteAsPlainText: true
    };

    mycontent = ` <h1>The Annual Meeting of Fictional Characters</h1>
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

    CONTACTS = [{
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

    // @ViewChild('editor1') ckeditor: any;

    constructor() {
    }

    ngOnInit() {

    }

    drop(event: CdkDragDrop<string[]>) {

    }

    onChange($event: any): void {
        console.log('onChange');
        // this.log += new Date() + "<br />";
    }

}
