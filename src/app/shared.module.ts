import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  exports: [ReactiveFormsModule, FormsModule, IonicModule, ClipboardModule, CommonModule],
  providers: [],
})
export class SharedModule { }
