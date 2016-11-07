/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    exports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule
    ]
})
export class SharedModule {
}
