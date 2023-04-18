import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoakFoncComponent } from './voak-fonc.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [VoakFoncComponent],
})
export class VoakFoncModule {}
