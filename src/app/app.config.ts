import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    /*
      HasStrategy, ESTO SIRVE PARA MANTERNER EL ESTADO DE MI APP
      INCLUSO SI RECARGO MI PÁGINA WEB
    */
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
};
