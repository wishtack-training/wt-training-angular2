/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ResourceHelper } from '../common/resource/resource-helper';
import { ResourceHelperFactory } from '../common/resource/resource-helper-factory';
import { User } from './user';


@Injectable()
export class UserStoreRemote {

    private _resourceHelper: ResourceHelper;

    constructor(resourceHelperFactory: ResourceHelperFactory) {
        this._resourceHelper = resourceHelperFactory.create({resourceName: 'users', type: User});
    }

    addUser({user}: {user: User}): Observable<User> {
        return this._resourceHelper.save({resource: user});
    }

    getUserList(): Observable<User[]> {
        return this._resourceHelper.list();
    }

    removeUser({user}: {user: User}): Observable<any> {
        return this._resourceHelper.delete({resource: user});
    }

}
