import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AboutPage} from '../about/about';

@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {

  constructor(public navCtrl: NavController) {
  }

  navToAbout() {
    this.navCtrl.push(AboutPage);
  }
}
