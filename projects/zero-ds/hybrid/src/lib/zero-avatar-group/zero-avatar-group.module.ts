import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeroAvatarGroupComponent } from './zero-avatar-group.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ZeroAvatarGroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [ZeroAvatarGroupComponent]
})
export class ZeroAvatarGroupModule { }
