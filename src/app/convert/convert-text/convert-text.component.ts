import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClipboardService } from 'ngx-clipboard';
import voca from 'voca';

@Component({
  selector: 'app-convert-text',
  templateUrl: './convert-text.component.html',
  styleUrls: ['./convert-text.component.scss']
})
export class ConvertTextComponent implements OnInit {
  entrytext;
  finaltext;
  voca;
  constructor(private modalCtrl: ModalController, private clipboardApi: ClipboardService,) { }

  ngOnInit(): void {
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  lowerCase(): void {
    this.finaltext = voca.lowerCase(this.entrytext);
  }
  upperCase(): void {
    this.finaltext = voca.upperCase(this.entrytext);
  }
  camelCase(): void {
    this.finaltext = voca.camelCase(this.entrytext);
  }
  slugify(): void {
    this.finaltext = voca.slugify(this.entrytext);
  }
  capitalize(): void {
    this.finaltext = voca.capitalize(this.entrytext);
  }
  decapitalize(): void {
    this.finaltext = voca.decapitalize(this.entrytext);
  }
  kebabCase(): void {
    this.finaltext = voca.kebabCase(this.entrytext);
  }
  snakeCase(): void {
    this.finaltext = voca.snakeCase(this.entrytext);
  }
  titleCase(): void {
    this.finaltext = voca.titleCase(this.entrytext);
  }
  copyText() {
    console.log(this.entrytext);
    this.clipboardApi.copyFromContent('ddd');
  }
}
