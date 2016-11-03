/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { Component } from '@angular/core';
import { UserCurrent } from '../user/user-current.service';

@Component({
    template: '<div>test</div>'
})
export class LoginComponent {

    constructor(public userCurrent: UserCurrent) {

    }

}
