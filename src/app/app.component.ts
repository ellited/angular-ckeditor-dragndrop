import {Component} from '@angular/core';
import {variablesData} from '../variables-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    ckeConfig = {
        extraPlugins: 'divarea,varcard',
        forcePasteAsPlainText: true
    };

    content = `<p><b>Hallo!</b></p>
<p>Wir freuen uns Ihnen mitteilen zu können, dass das Design für Ihre App fast fertig gestellt wurde.</p>
<p>Bitte beachten Sie, dass die Speisekarte und Liefergebiete nur Beispiele darstellen, da wir erst mal Ihre Freigabe bezüglich des Designs benötigen. Nach einer kurzen Bestätigung Ihrerseits, wird Ihre App veröffentlicht. Sobald die App online geht, werden sowohl Liefergebiete als auch Ihre Karte korrekt angezeigt.</p>
<p>Ihre Kundennummer lautet: <span class="variable-card">$customerNumber</span></p>

<p>Bitte teilen Sie uns mögliche Änderungswünsche (Farben, Bilder, etc.) bis <span class="variable-card">$answerDate</span> mit, damit diese noch vor der Veröffentlichung der App in den Stores umgesetzt werden können.</p>

<p>Achtung: Bei Änderungswünschen zu den jeweiligen Printprodukten, die schon in den Auftrag gegeben wurden, können zusätzliche Kosten entstehen.</p>

<p>Bitte notieren Sie sich UNSERE SERVICENUMMER: ******** und SERVICE-EMAIL: ********@********.de</p>

<p>Für Ihre Fragen stehen wir Ihnen jederzeit gerne zur Verfügung.</p>

<p>Mit freundlichen Grüßen <br>
Ihr ********-Team</p>`;

    variables = variablesData();

    onChange($event: any): void {
        console.log('onChange');
    }

}
