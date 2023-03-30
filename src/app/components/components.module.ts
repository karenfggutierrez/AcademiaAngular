import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';



@NgModule({
  declarations: [
    HijoComponent,
    PadreComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PadreComponent,
    HijoComponent
  ]
})
export class ComponentsModule { }
