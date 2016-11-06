/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { Component } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'wt-user-selector',
    templateUrl: './user-selector.component.async.html'
})
export class UserSelectorComponent {

    selectedUser: User;
    userList: User[];

    constructor() {

        this.userList = [
            new User({
                firstName: 'Foo',
                lastName: 'BAR'
            }),
            new User({
                firstName: 'John',
                lastName: 'BAR'
            }),
        ];

        this.selectUser({user: this.userList[0]});

    }

    selectUser({user}) {

        this.selectedUser = user;

    }

}
