import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertComponent } from './convert.component';

const routes: Routes = [
  {
    path: '',
    component: ConvertComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertPageRoutingModule {}
