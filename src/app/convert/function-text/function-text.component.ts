import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClipboardService } from 'ngx-clipboard';
import voca from 'voca';

@Component({
  selector: 'app-function-text',
  templateUrl: './function-text.component.html',
  styleUrls: ['./function-text.component.scss']
})
export class FunctionTextComponent implements OnInit {
  entrytext;
  finaltext;
  voca;
  constructor(private modalCtrl: ModalController, private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
