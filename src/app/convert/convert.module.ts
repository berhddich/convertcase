import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertComponent } from './convert.component';
import { SharedModule } from '../shared.module';
import { ConvertPageRoutingModule } from './convert-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, ConvertPageRoutingModule],
  declarations: [ConvertComponent],
})
export class ConvertModule { }
