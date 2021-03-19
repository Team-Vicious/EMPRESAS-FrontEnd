import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './components/index/index.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    DetalleComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
