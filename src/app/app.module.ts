import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  }  from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MaterialModule } from './modules/material.module';
import { AtomsModule } from './modules/atoms.module';

import { SidenavComponent } from './components/organisms/sidenav/sidenav.component';
import { SidenavLinkComponent } from './components/molecules/sidenav-link/sidenav-link.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    AtomsModule
  ],
  exports:[
    SidenavComponent,
    SidenavLinkComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
