/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ResourceModule } from '../common/resource/resource.module';
import { SharedModule } from '../shared.module';
import { UserListComponent } from './user-list.component';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form.component';
import { UserStore } from './user-store';
import { UserStoreRemote } from './user-store-remote';

@NgModule({
    declarations: [
        ...UserModule._EXPORTED_DECLARATIONS,
    ],
    exports: [
        ...UserModule._EXPORTED_DECLARATIONS
    ],
    imports: [
        ReactiveFormsModule,
        ResourceModule,
        SharedModule
    ],
    providers: [
        UserStore,
        UserStoreRemote
    ]
})
export class UserModule {

    static _EXPORTED_DECLARATIONS = [
        UserComponent,
        UserFormComponent,
        UserListComponent
    ];

}
