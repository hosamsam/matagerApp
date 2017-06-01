import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
//import {IlevelId} from '../../app/service/InewUserData';
 import {IlocalUser, levelToAr} from '../../app/service/InewUserData';

import { ShelfsProvider } from '../../providers/shelfs';

interface Ishelf {
  area: number,
  close: number,
  cost: number,
  id: number,
  name: string,
  user_id: number,
  data_added?: Date,
  data_modified?: Date
}

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  userName: string;
  userLocal: IlocalUser;
  showContent: string = 'shelfs';
  AllShelfs :[Ishelf];
  noShelfs:string;

  constructor(public navCtrl: NavController,
    public shelfsProvider: ShelfsProvider) {

  }

  ionViewDidLoad() {
    this.userLocal = JSON.parse(localStorage.getItem('userLocalData'));
    this.userName = localStorage.getItem('Username');

    /*console.log(this.userLocal);
    console.log(this.showContent);
*/
    this.getShelfs(this.userLocal['id']);

  }
  ionViewWillEnter() {
    this.userLocal = JSON.parse(localStorage.getItem('userLocalData'));
  }

  getShelfs(userId: number): void {
    this.shelfsProvider.getShelfs(userId).subscribe(res => {
      console.log('data', res);
      this.AllShelfs = res.data;
      if (this.AllShelfs.length <=0)
        this.noShelfs = 'empty';
    },
      err => {
        console.warn(err);
        this.noShelfs = 'netErr';
      }
    );
  }
  navigateToPage(page):void {
    this.navCtrl.push(page)
  }

  userLevel(level:number):string {
    return levelToAr[level]
  }
}
