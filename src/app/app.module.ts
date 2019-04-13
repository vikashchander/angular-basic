import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import server/server.component
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';   

@NgModule({
  declarations: [
    AppComponent,
    //taking server components from line no.7
    ServerComponent,
    ServersComponent           
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
