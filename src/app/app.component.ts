import { Component, Renderer2 } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mode;
  side;

  constructor(private menu: MenuController) {
    this.checkDarkTheme();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  openMenu() {
    this.menu.open('first');
  }

  checkDarkTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches) {
      document.body.setAttribute('color-theme', 'dark');
      this.mode = true;
    } else {
      document.body.setAttribute('color-theme', 'light');
      this.mode = false;
    }
  }
  togglrTheme(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
      this.mode = false;
    } else {
      document.body.setAttribute('color-theme', 'light');
      this.mode = false;
    }
  }
}
