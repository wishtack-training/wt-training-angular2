/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { Http, RequestMethod, RequestOptions, Response, ResponseOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { User } from '../../../src/app/user/user';
import { UserModule } from '../../../src/app/user/user.module';
import { UserStoreRemote } from '../../../src/app/user/user-store-remote';

describe('UserStoreRemote', () => {

    beforeEach((done) => {

        TestBed
            .configureTestingModule({
                imports: [
                    UserModule
                ],
                providers: [
                    MockBackend,
                    {
                        provide: Http,
                        deps: [MockBackend, RequestOptions],
                        useFactory: (mockBackend, requestOptions) => {
                            return new Http(mockBackend, requestOptions);
                        }
                    }
                ]
            })
            .compileComponents()
            .then(done);

    });

    beforeEach(inject([MockBackend], (mockBackend: MockBackend) => {

        this.spyConnection = jasmine.createSpy('connection');

        mockBackend.connections.subscribe((connection: MockConnection) => {
            connection.mockRespond(new Response(new ResponseOptions(this.spyConnection({
                body: connection.request.text(),
                method: connection.request.method,
                url: connection.request.url
            }))));
        });

    }));

    beforeEach(inject([UserStoreRemote], (userStoreRemote: UserStoreRemote) => {

        this.userStoreRemote = userStoreRemote;

    }));

    it('should get user list', () => {

        let userList;

        this.spyConnection.and.returnValue({
            body: {
                objects: [
                    {
                        id: 'USER_ID_1',
                        firstName: 'Foo',
                        lastName: 'BAR',
                        email: 'foo@wishtack.com'
                    },
                    {
                        id: 'USER_ID_2',
                        firstName: 'John',
                        lastName: 'BAR',
                        email: 'john@wishtack.com'
                    }
                ]
            },
            status: 200
        });

        this.userStoreRemote.getUserList()
            .subscribe((_userList) => userList = _userList);

        expect(userList).toEqual([
            new User({
                id: 'USER_ID_1',
                firstName: 'Foo',
                lastName: 'BAR',
                email: 'foo@wishtack.com'
            }),
            new User({
                id: 'USER_ID_2',
                firstName: 'John',
                lastName: 'BAR',
                email: 'john@wishtack.com'
            })
        ]);

        expect(this.spyConnection).toHaveBeenCalledTimes(1);
        expect(this.spyConnection.calls.argsFor(0)[0].method).toEqual(RequestMethod.Get);
        expect(this.spyConnection.calls.argsFor(0)[0].url).toMatch('/api/v1/users/$');

    });

    it('should add user', () => {

        let user;

        this.spyConnection.and.returnValue({
            body: {
                id: 'USER_ID_1',
                firstName: 'Foo',
                lastName: 'BAR',
                email: 'foo@wishtack.com'
            },
            status: 200
        });

        this.userStoreRemote.addUser({user: new User({
            firstName: 'Foo',
            lastName: 'BAR',
            email: 'foo@wishtack.com'
        })})
            .subscribe((_user) => user = _user);

        expect(user).toEqual(
            new User({
                id: 'USER_ID_1',
                firstName: 'Foo',
                lastName: 'BAR',
                email: 'foo@wishtack.com'
            })
        );

        expect(this.spyConnection).toHaveBeenCalledTimes(1);
        expect(this.spyConnection.calls.argsFor(0)[0].body).toEqual(JSON.stringify({
            firstName: 'Foo',
            lastName: 'BAR',
            email: 'foo@wishtack.com'
        }));
        expect(this.spyConnection.calls.argsFor(0)[0].method).toEqual(RequestMethod.Post);
        expect(this.spyConnection.calls.argsFor(0)[0].url).toMatch('/api/v1/users/$');

    });

    it('should remove user', () => {

        let result;

        this.spyConnection.and.returnValue({
            status: 204
        });

        this.userStoreRemote.removeUser({user: new User({
            id: 'USER_ID',
            firstName: 'Foo',
            lastName: 'BAR',
            email: 'foo@wishtack.com'
        })})
            .subscribe((_result) => result = _result);

        expect(result).toEqual(true);

        expect(this.spyConnection).toHaveBeenCalledTimes(1);
        expect(this.spyConnection.calls.argsFor(0)[0].method).toEqual(RequestMethod.Delete);
        expect(this.spyConnection.calls.argsFor(0)[0].url).toMatch('/api/v1/users/USER_ID/$');

    });

});
