/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { TestBed, inject } from '@angular/core/testing';

import { UserModule } from '../../../src/app/user/user.module';
import { UserStore } from '../../../src/app/user/user-store';
import { User } from '../../../src/app/user/user';

describe('UserStore', () => {

    beforeEach((done) => {

        TestBed.configureTestingModule({
            imports: [
                UserModule
            ]
        })
            .compileComponents()
            .then(done);

    });

    beforeEach(inject([
        UserStore
    ], (
        userStore: UserStore
    ) => {

        this.userStore = userStore;

    }));

    it('should get user list', () => {

        let userList;

        this.userStore.getUserList()
            .subscribe((_userList) => userList = _userList);

        expect(userList.length).toEqual(2);
        expect(userList[0]).toEqual(new User({
            firstName: 'Foo',
            lastName: 'BAR'
        }));
        expect(userList[1]).toEqual(new User({
            firstName: 'John',
            lastName: 'BAR'
        }));

    });

    it('should add user', () => {

        let testUser = new User({
            firstName: 'Guido',
            lastName: 'MICKS'
        });
        let user;
        let userList;

        this.userStore.addUser({
            user: testUser
        })
            .subscribe((_user) => user = _user);

        expect(user).toEqual(testUser);

        this.userStore.getUserList()
            .subscribe((_userList) => userList = _userList);

        expect(userList.length).toEqual(3);

        expect(userList[2]).toEqual(testUser);

    });

    it('should remove user', () => {

        let originalUserList;
        let userList;

        this.userStore.getUserList()
            .subscribe((_userList) => originalUserList = _userList);

        this.userStore.removeUser({user: originalUserList[0]});

        this.userStore.getUserList()
            .subscribe((_userList) => userList = _userList);

        expect(userList.length).toEqual(1);
        expect(userList[0]).toEqual(originalUserList[1]);

    });

});
