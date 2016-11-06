/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

export class UserSchema {
    firstName?: string;
    lastName?: string;
    email?: string;
}

export class User extends UserSchema {

    constructor(args: UserSchema = {}) {

        super();

        Object.assign(this, args);

    }

}
