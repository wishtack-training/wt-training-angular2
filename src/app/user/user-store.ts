/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserStore {

    private _userList: User[] = [
        new User({
            firstName: 'Foo',
            lastName: 'BAR'
        }),
        new User({
            firstName: 'John',
            lastName: 'BAR'
        })
    ];

    addUser({user}: {user: User}): Observable<User> {

        this._userList = [...this._userList, user];

        return Observable.from([user]);

    }

    getUserList(): Observable<User[]> {
        return Observable.from([
            this._userList
        ]);
    }

    removeUser({user}: {user: User}): Observable<boolean> {

        this._userList = this._userList.filter((_user) => _user !== user);

        return Observable.from([true]);

    }

}
