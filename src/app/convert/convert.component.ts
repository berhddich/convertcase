import { AfterContentInit, Component } from '@angular/core';
import voca from 'voca';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent {
  entrytext = 'ss';
  finaltext: '';

  voca;

  constructor(private clipboardApi: ClipboardService) {}

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
