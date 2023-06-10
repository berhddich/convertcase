import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertComponent } from './convert.component';
import { SharedModule } from '../shared.module';
import { ConvertPageRoutingModule } from './convert-routing.module';
import { FunctionTextComponent } from './function-text/function-text.component';
import { ConvertTextComponent } from './convert-text/convert-text.component';

@NgModule({
  imports: [CommonModule, SharedModule, ConvertPageRoutingModule],
  declarations: [ConvertComponent, FunctionTextComponent, ConvertTextComponent],
})
export class ConvertModule { }
