import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SubmittedDetailsPage } from "../submitted-details/submitted-details.page";

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.page.html',
  styleUrls: ['./submitted.page.scss'],
})
export class SubmittedPage implements OnInit {

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async openDetails() {
    const modal = await this.modalCtrl.create({
      component: SubmittedDetailsPage,
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
