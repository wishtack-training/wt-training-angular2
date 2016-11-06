/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { User } from '../../../src/app/user/user';
import { UserModule } from '../../../src/app/user/user.module';
import { UserListComponent } from '../../../src/app/user/user-list.component';
import { UserStore } from '../../../src/app/user/user-store';

describe('UserListComponent', () => {

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

    beforeEach(() => {

        this.testUserList = [
            new User({
                firstName: 'Foo',
                lastName: 'BAR'
            }),
            new User({
                firstName: 'John',
                lastName: 'BAR'
            })
        ];

    });

    it('should display user list', () => {

        let fixture: ComponentFixture<UserListComponent>;
        let userNameElementList;

        /* Prepare. */
        spyOn(this.userStore, 'getUserList').and.returnValue(Observable.from([
            this.testUserList
        ]));

        /* Run. */
        fixture = TestBed.createComponent(UserListComponent);

        fixture.detectChanges();

        /* Check. */
        userNameElementList = fixture.debugElement.queryAll(By.css('.wt-user-name'));

        expect(userNameElementList.length).toEqual(2);
        expect(userNameElementList[0].nativeElement.innerText.trim()).toEqual('Foo BAR');
        expect(userNameElementList[1].nativeElement.innerText.trim()).toEqual('John BAR');

        /* Check spies. */
        expect(this.userStore.getUserList).toHaveBeenCalledTimes(1);
        expect(this.userStore.getUserList).toHaveBeenCalledWith();

    });

    it('should add user', () => {

        let firstNameElement;
        let lastNameElement;
        let submitButtonElement;
        let fixture: ComponentFixture<UserListComponent>;
        let userNameElementList;

        /* Prepare. */
        spyOn(this.userStore, 'getUserList').and.returnValue(Observable.from([
            this.testUserList
        ]));

        spyOn(this.userStore, 'addUser').and.callFake(({user}) => Observable.from([user]));

        /* Run. */
        fixture = TestBed.createComponent(UserListComponent);

        fixture.detectChanges();

        firstNameElement = fixture.debugElement.query(By.css('input[name="firstName"]'));
        lastNameElement = fixture.debugElement.query(By.css('input[name="lastName"]'));
        submitButtonElement = fixture.debugElement.query(By.css('button[type="submit"]'));

        firstNameElement.nativeElement.value = 'Guido';
        firstNameElement.triggerEventHandler('input', {
            target: firstNameElement.nativeElement
        });
        lastNameElement.nativeElement.value = 'MICKS';
        lastNameElement.triggerEventHandler('input', {
            target: lastNameElement.nativeElement
        });
        submitButtonElement.nativeElement.click();

        fixture.detectChanges();

        /* Check. */
        userNameElementList = fixture.debugElement.queryAll(By.css('.wt-user-name'));

        expect(userNameElementList.length).toEqual(3);
        expect(userNameElementList[2].nativeElement.innerText.trim()).toEqual('Guido MICKS');

        /* Check spies. */
        expect(this.userStore.getUserList).toHaveBeenCalledTimes(1);
        expect(this.userStore.getUserList).toHaveBeenCalledWith();

        expect(this.userStore.addUser).toHaveBeenCalledTimes(1);
        expect(this.userStore.addUser).toHaveBeenCalledWith({user: new User({
            firstName: 'Guido',
            lastName: 'MICKS'
        })});

    });

    it('should remove user', () => {

        let fixture: ComponentFixture<UserListComponent>;
        let removeButtonElement;
        let userNameElementList;

        /* Prepare. */
        spyOn(this.userStore, 'getUserList').and.returnValue(Observable.from([
            this.testUserList
        ]));

        spyOn(this.userStore, 'removeUser').and.callFake(({user}) => Observable.from([true]));

        /* Run. */
        fixture = TestBed.createComponent(UserListComponent);

        fixture.detectChanges();

        removeButtonElement = fixture.debugElement.queryAll(By.css('.wt-user-remove'))[0];
        removeButtonElement.nativeElement.click();

        fixture.detectChanges();

        /* Check. */
        userNameElementList = fixture.debugElement.queryAll(By.css('.wt-user-name'));

        expect(userNameElementList.length).toEqual(1);
        expect(userNameElementList[0].nativeElement.innerText.trim()).toEqual('John BAR');

        /* Check spies. */
        expect(this.userStore.getUserList).toHaveBeenCalledTimes(1);
        expect(this.userStore.getUserList).toHaveBeenCalledWith();

        expect(this.userStore.removeUser).toHaveBeenCalledTimes(1);
        expect(this.userStore.removeUser).toHaveBeenCalledWith({user: this.testUserList[0]});

    });

});
