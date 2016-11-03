import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AppCommonModule } from './app-common.module';
import { LoginModule } from './login/login.module';

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
        AppCommonModule,
        LoginModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
    ],
    /* Expose our Services and Providers into Angular's dependency injection. */
    providers: [
        ENV_PROVIDERS
    ]
})
export class AppModule {
}

