import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeModule } from './home/home.module';
import { NgwWowModule } from 'ngx-wow';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent}
  // For any other page redirect to PageNotFoundComponent which is 404
  // {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
	PageNotFoundComponent,
	HomeComponent,
	HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    RouterModule.forRoot(
    	appRoutes,
    	{ enableTracing: true } // Only for debugging purposes only
    ),
	HomeModule,
	NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
