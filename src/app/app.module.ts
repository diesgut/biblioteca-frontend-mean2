import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { CategoriaListComponent } from './components/categoria-list.component'
import { CategoriaAddComponent } from './components/categoria-add.component'
import { CategoriaDetailComponent } from './components/categoria-detail.component'
import { CategoriaEditComponent } from './components/categoria-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    CategoriaListComponent,
    CategoriaAddComponent,
    CategoriaDetailComponent,
    CategoriaEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
