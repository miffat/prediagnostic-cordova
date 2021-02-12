import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tnc-modal',
  templateUrl: './tnc-modal.page.html',
  styleUrls: ['./tnc-modal.page.scss'],
})
export class TncModalPage implements OnInit {

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}