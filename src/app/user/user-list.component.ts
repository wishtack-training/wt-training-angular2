/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserStore } from './user-store';
import { User } from './user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.async.html'
})
export class UserListComponent implements OnDestroy, OnInit {

    userList: User[];

    private _subscription: Subscription;

    constructor(private _userStore: UserStore) {
    }

    ngOnInit() {
        this._subscription = this._userStore.getUserList()
            .subscribe((userList) => this.userList = userList);
    }

    ngOnDestroy() {

        if (this._subscription != null) {
            this._subscription.unsubscribe();
        }

    }

    addUser({user}: {user: User}) {

        this._userStore.addUser({user})
            .subscribe((_user) => {
                this.userList = [...this.userList, _user];
            });

    }

    removeUser({user}: {user: User}) {

        this._userStore.removeUser({user})
            .subscribe(() => {
                this.userList = this.userList.filter(_user => user !== _user);
            });

    }

}
