import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { ZeroHybridModule } from "@zero-ds/hybrid";
import { ZeroAvatarGroupModule } from "@zero-ds/hybrid/src/lib/zero-avatar-group";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ZeroHybridModule,
    ZeroAvatarGroupModule,
  ],
  declarations: [FolderPage]
})
export class FolderPageModule { }
