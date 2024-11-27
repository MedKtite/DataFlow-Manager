import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { routes } from './app.routes'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    CommonModule,
    FontAwesomeModule,
    importProvidersFrom(ReactiveFormsModule, 
      FontAwesomeModule,
      FaIconLibrary,
      CommonModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,)
  ],
  
};