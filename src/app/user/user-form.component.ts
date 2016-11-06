/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { User } from './user';

@Component({
    selector: 'wt-user-form',
    templateUrl: './user-form.component.async.html'
})
export class UserFormComponent {

    @Output() userChange = new EventEmitter<User>();

    userFormGroup;

    constructor() {
        this._buildForm();
    }

    saveUser() {

        this.userChange.emit(new User(this.userFormGroup.value));
        this._buildForm();

    }

    private _buildForm() {

        this.userFormGroup = new FormGroup({
            firstName: new FormControl(
                '',
                Validators.compose([Validators.required, Validators.minLength(3)])
            ),
            lastName: new FormControl('', Validators.required)
        });

    }
}
