/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { UserSelectorComponent } from './user-selector.component';



@NgModule({
    declarations: [
        ...UserModule._EXPORTED_DECLARATIONS
    ],
    exports: [
        ...UserModule._EXPORTED_DECLARATIONS
    ],
    imports: [
        SharedModule
    ]
})
export class UserModule {

    static _EXPORTED_DECLARATIONS = [
        UserSelectorComponent
    ]

}
