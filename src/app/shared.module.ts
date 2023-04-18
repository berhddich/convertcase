import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  exports: [ReactiveFormsModule, FormsModule, IonicModule, ClipboardModule],
  providers: [],
})
export class SharedModule {}
