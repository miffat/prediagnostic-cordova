import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { TncModalPage } from "../tnc-modal/tnc-modal.page";
import { SignatureModalPage } from "../signature-modal/signature-modal.page";
// import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public tempImage: any = '';
  public tempImageGallery: any = '';

  constructor(
      private activatedRoute: ActivatedRoute,
      public menuCtrl: MenuController,
      public modalCtrl: ModalController,
      // public photoService: PhotoService
    ) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  openCamera() {
    // this.tempImage = this.photoService.getImage();
    console.log('Image: ',this.tempImage);
  }

  openGallery() {
    // this.tempImageGallery = this.photoService.getImageGallery();
    console.log(this.tempImageGallery);
  }

  async openSignatureModal() {
    const modal = await this.modalCtrl.create({
      component: SignatureModalPage,
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async opentTnc() {
    const modal = await this.modalCtrl.create({
      component: TncModalPage,
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
