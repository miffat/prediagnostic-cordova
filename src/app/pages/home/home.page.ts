import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TncModalPage } from "../tnc-modal/tnc-modal.page";
import { SignatureModalPage } from "../signature-modal/signature-modal.page";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ClooneproviderService } from '../../services/clooneprovider.service';

import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { finalize } from 'rxjs/operators';

const STORAGE_KEY = 'my_images';
declare let window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // images = [];

  public formData: any = {}

  public topImage: any = '';
  public bottomImage: any = '';
  public frontImage: any = '';
  public backImage: any = '';
  public rightImage: any = '';
  public leftImage: any = '';
  public extraImage = [];

  public tempImageFront = '';

  constructor(
      private domSanitizer: DomSanitizer,
      private activatedRoute: ActivatedRoute,
      public menuCtrl: MenuController,
      public modalCtrl: ModalController,
      private camera: Camera,
      public alertCtrl: AlertController,
      private clooneprovider: ClooneproviderService,
      public file: File, 
      private http: HttpClient, 
      private webview: WebView,
      private storage: Storage,
      public filePath: FilePath,
      private ref: ChangeDetectorRef,
    ) { }

  ngOnInit() {
    this.menuCtrl.enable(true);

    this.formData.docType = 'CSO/SSO';
    this.formData.switchon = 'false';
    this.formData.battery = 'false';
    this.formData.sim2 = 'false';
    this.formData.sim = 'false';
    this.formData.factory = 'false';
    this.formData.accessories = 'false';
    this.formData.dent = 'false';
    this.formData.lock = 'false';
    // this.formData.lockType = '';
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
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
    console.log(this.formData)

    this.formData.imageFront = this.frontImage.substr(this.frontImage.lastIndexOf('/') + 1);
    console.log('Front img ori:', this.frontImage)
    console.log('Front img:', this.formData.imageFront)

    if(this.formData.name == "" || this.formData.name == null){
      this.clooneprovider.showAlert('Missing Input!', 'Name is required');
      return false
    } else if(this.formData.email == "" || this.formData.email == null){
      this.clooneprovider.showAlert('Missing Input!', 'Email is required');
      return false
    } else if(this.formData.contact == "" || this.formData.contact == null){
      this.clooneprovider.showAlert('Missing Input!', 'Contact is required');
      return false
    } else if(this.formData.brand == "" || this.formData.brand == null){
      this.clooneprovider.showAlert('Missing Input!', 'Product Brand is required');
      return false
    } else if(this.formData.model == "" || this.formData.model == null){
      this.clooneprovider.showAlert('Missing Input!', 'Product Model is required');
      return false
    } else if(this.formData.sn == "" || this.formData.sn == null){
      this.clooneprovider.showAlert('Missing Input!', 'Product Serial Number is required');
      return false
    } else if(this.formData.imei == "" || this.formData.imei == null){
      this.clooneprovider.showAlert('Missing Input!', 'Product IMEI is required');
      return false
    } else if(this.formData.son == "" || this.formData.son == null){
      this.clooneprovider.showAlert('Missing Input!', 'Complete SON is required');
      return false
    } else if(this.formData.son.toString().length != 5){
      this.clooneprovider.showAlert('Invalid CSO/SSO', 'Please input 5 digits for CSO/SSO.');
      return false
    } 

  }

  imageFunction(option, side){
    // CHECK EXTRA IMAGES NOT MORE THAN 3
    if(this.extraImage.length == 3){
      this.alertMsg();
      return false;

    } else if(option == "camera"){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI, //DATA_URL  FILE_URI
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: false,
        targetWidth: 300,
        targetHeight: 300,
      }

      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;

        console.log('Image path: ',imageData)

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
