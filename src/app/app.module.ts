import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared.module';
import { UserStore } from './user/user-store';
import { UserStoreRemote } from './user/user-store-remote';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    /* Module's Components / Directives / Pipes. */
    declarations: [
        AppComponent
    ],
    /* Imports Angular's modules. */
    imports: [
        RouterModule.forRoot(ROUTES, {useHash: true}),
        SharedModule,
        UserModule
    ],
    /* Expose our Services and Providers into Angular's dependency injection. */
    providers: [
        ENV_PROVIDERS,
        {
            provide: UserStore,
            useClass: UserStoreRemote
        }
    ]
})
export class AppModule {
}

