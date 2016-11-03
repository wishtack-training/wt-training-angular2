/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';

@Injectable()
export class UserCurrent {

    private _isSignedIn = false;

    isSignedIn() {
        return this._isSignedIn;
    }

}
