import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routes } from './routes';

import { App } from './components/app';
import { Header } from './components/common/header';
import { LoginPage } from './components/login/loginPage';
import { Banner } from './components/login/banner';
import { LoginForm } from './components/login/loginForm';
import { PatientsPage } from './components/patients/patientsPage';
import { SearchPatient } from './components/patients/searchPatient';

@NgModule({
  declarations: [
    App,
    Header,
    LoginPage,
    Banner,
    LoginForm,
    PatientsPage,
    SearchPatient
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [App],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule)
