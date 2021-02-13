import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TncModalPage } from "../tnc-modal/tnc-modal.page";
import { SignatureModalPage } from "../signature-modal/signature-modal.page";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ClooneproviderService } from '../../services/clooneprovider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public topImage: any = '';
  public bottomImage: any = '';
  public frontImage: any = '';
  public backImage: any = '';
  public rightImage: any = '';
  public leftImage: any = '';
  public extraImage = [];

  public name: any = '';
  public email: any = '';
  public contact: any = '';
  public brand: any = '';
  public model: any = '';
  public serial_no: any = '';
  public imei: any = '';
  public docType: any;
  public son: any = '';

  constructor(
      private domSanitizer: DomSanitizer,
      private activatedRoute: ActivatedRoute,
      public menuCtrl: MenuController,
      public modalCtrl: ModalController,
      private camera: Camera,
      public alertCtrl: AlertController,
      private clooneprovider: ClooneproviderService
    ) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  async alertMsg() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Extra Images',
      message: 'Only 3 extra images allowed !',
      buttons: [
        {
          text: 'Clear All Images?',
          cssClass: 'clear_images',
          handler: () => {
            this.extraImage = [];
          }
        },
        {
          text: 'Cancel',
          cssClass: 'cancel_button',
          handler: () => {
            this.modalCtrl.dismiss("no_update");
          }
        }
      ]
    });

		await alert.present();
	}

  submitForm(){
    console.log(this.docType)
  }


  imageFunction(option, side){
    // CHECK EXTRA IMAGES NOT MORE THAN 3
    if(this.extraImage.length == 3){
      this.alertMsg();
      return false;

    } else if(option == "camera"){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true,
        targetWidth: 300,
        targetHeight: 300,
      }

      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;

        if(side == "top"){
          this.topImage = base64Image;
        } else if(side == "bottom"){
          this.bottomImage = base64Image;
        } else if(side == "front"){
          this.frontImage = base64Image;
        } else if(side == "back"){
          this.backImage = base64Image;
        } else if(side == "right"){
          this.rightImage = base64Image;
        } else if(side == "left"){
          this.leftImage = base64Image;
        } else if(side == "extra"){
          // need to do array, only 3 extra images allow
          this.extraImage.push(base64Image);
        }   
        
      }, (err) => {
        // Handle error 
        console.log('Camera error:', err)

        if(side == "top"){
          this.topImage = '';
        } else if(side == "bottom"){
          this.bottomImage = '';
        } else if(side == "front"){
          this.frontImage = '';
        } else if(side == "back"){
          this.backImage = '';
        } else if(side == "right"){
          this.rightImage = '';
        } else if(side == "left"){
          this.leftImage = '';
        } else if(side == "extra"){
          // need to do array, only 3 extra images allow
        }

      });

    } else if(option == "gallery"){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        saveToPhotoAlbum: true,
        targetWidth: 300,
        targetHeight: 300,
        // allowEdit: false   ---> allowEdit is unpredictable on Android and it should not be used!
      }

      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;

        if(side == "top"){
          this.topImage = base64Image;
        } else if(side == "bottom"){
          this.bottomImage = base64Image;
        } else if(side == "front"){
          this.frontImage = base64Image;
        } else if(side == "back"){
          this.backImage = base64Image;
        } else if(side == "right"){
          this.rightImage = base64Image;
        } else if(side == "left"){
          this.leftImage = base64Image;
        } else if(side == "extra"){
          // need to do array, only 3 extra images allow
          this.extraImage.push(base64Image);
        }
        
      }, (err) => {
        // Handle error 
        console.log('Camera error:', err)

        if(side == "top"){
          this.topImage = '';
        } else if(side == "bottom"){
          this.bottomImage = '';
        } else if(side == "front"){
          this.frontImage = '';
        } else if(side == "back"){
          this.backImage = '';
        } else if(side == "right"){
          this.rightImage = '';
        } else if(side == "left"){
          this.leftImage = '';
        } else if(side == "extra"){
          // need to do array, only 3 extra images allow
        }

      });
    }
  } 

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: true,
      targetWidth: 300,
      targetHeight: 300,
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log('Get image:', base64Image)

      this.topImage = base64Image;
     }, (err) => {
      // Handle error 
      console.log('Camera error:', err)
     });
  }

  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: true,
      targetWidth: 300,
      targetHeight: 300,
      // allowEdit: false   ---> allowEdit is unpredictable on Android and it should not be used!
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log('Get image:', base64Image)

      this.topImage = base64Image;
     }, (err) => {
      // Handle error
      console.log('Camera error:', err)
     });
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
