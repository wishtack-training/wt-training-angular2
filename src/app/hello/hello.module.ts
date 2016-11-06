/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { SharedModule } from '../shared.module';

@NgModule({
    declarations: [
        HelloComponent
    ],
    exports: [
        HelloComponent
    ],
    imports: [
        SharedModule
    ]
})
export class HelloModule {

}
