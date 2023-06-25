import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConvertTextComponent } from './convert-text/convert-text.component';
import { FunctionTextComponent } from './function-text/function-text.component';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent implements OnInit {


  constructor(
    private modalCtrl: ModalController) { }
  ngOnInit(): void {

  }

  goToConvert(): void {
    this.openModalConvert();
  }
  goToFunction(): void {
    this.openModalFunction();
  }
  async openModalConvert() {
    const modal = await this.modalCtrl.create({
      component: ConvertTextComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();


  }
  async openModalFunction() {
    const modal = await this.modalCtrl.create({
      component: FunctionTextComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();


  }

}
