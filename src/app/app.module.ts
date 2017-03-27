import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

 
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroSearchComponent } from './hero-search.component';
import { DashboardComponent } from './dashboard.component'; 
import { BreadcrumbComponent } from './breadcrumb.component'; 
import { SwitchComponent } from './switch.component'; 
import { AppRoutingModule }     from './app.routing.module';


@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpModule , InMemoryWebApiModule.forRoot(InMemoryDataService), ],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent,HeroSearchComponent, DashboardComponent, SwitchComponent,BreadcrumbComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

 
 