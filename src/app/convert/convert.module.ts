import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertComponent } from './convert.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ConvertComponent],
})
export class ConvertModule {}
