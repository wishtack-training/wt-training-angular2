/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user',
    templateUrl: './user.component.async.html'
})
export class UserComponent {

    @Input() user: User;
    @Output() userRemove = new EventEmitter<User>();

    removeUser({user}: {user: User}) {
        this.userRemove.emit(user);
    }

}
