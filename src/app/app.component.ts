/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styles: [
        require('./app.component.css'),
        require('@angular/material/core/theming/prebuilt/indigo-pink.css')
    ],
    template: require('./app.component.html')
})
export class AppComponent {

}
