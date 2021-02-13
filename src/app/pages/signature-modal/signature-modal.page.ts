import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
// import { SignaturePad } from 'ngx-signaturepad/signature-pad';

@Component({
  selector: 'app-signature-modal',
  templateUrl: './signature-modal.page.html',
  styleUrls: ['./signature-modal.page.scss'],
})

export class SignatureModalPage implements OnInit {
  @ViewChild('SignaturePad') signaturePad: SignaturePad;

  public signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 200,
    'backgroundColor': 'white',

  };

  sign: any;
  
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.sign = this.signaturePad.toDataURL();
    console.log(this.sign);
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  clearSign() {
    this.signaturePad.clear();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
