import { NgModule } from '@angular/core';

import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomsModule } from '../modules/atoms.module';

import { SidenavComponent } from '../components/organisms/sidenav/sidenav.component';
import { SidenavLinkComponent } from '../components/molecules/sidenav-link/sidenav-link.component';

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavLinkComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AtomsModule
  ],
  exports:[
    SidenavComponent,
    SidenavLinkComponent,
  ],
})
export class CommonsModule { }
