import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './userhome/userhome.component';
import { userhomeRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserhomeComponent
  ],
  imports: [
    CommonModule,
    userhomeRoutingModule
  ]
})
export class UserModule { }
