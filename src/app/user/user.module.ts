/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { UserCurrent } from './user-current.service';

@NgModule({
    providers: [
        UserCurrent
    ]
})
export class UserModule {

}
