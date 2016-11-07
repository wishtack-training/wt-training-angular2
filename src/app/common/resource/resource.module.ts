/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { ResourceHelperFactory } from './resource-helper-factory';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        ResourceHelperFactory
    ]
})
export class ResourceModule {

}
