import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConvertTextComponent } from './convert-text/convert-text.component';

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
    this.openModal();
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ConvertTextComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();


  }


}
