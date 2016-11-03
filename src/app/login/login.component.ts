/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { Component } from '@angular/core';
import { UserCurrent } from '../user/user-current.service';

@Component({
    templateUrl: require('./login.component.async.html')
})
export class LoginComponent {

    constructor(private userCurrent: UserCurrent) {

    }

}
