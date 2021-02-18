import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController, MenuController, ModalController, ToastController, LoadingController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { TncModalPage } from "../tnc-modal/tnc-modal.page";
import { SignatureModalPage } from "../signature-modal/signature-modal.page";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ClooneproviderService } from '../../services/clooneprovider.service';
import { Base64 } from '@ionic-native/base64/ngx';
import { TestPage } from "../test/test.page";
import { LockpatternModalPage } from "../lockpattern-modal/lockpattern-modal.page";
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { File, FileEntry } from '@ionic-native/File/ngx';
import { Http, Headers } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
// import PatternLock from "patternlock";
import { finalize } from 'rxjs/operators';

import * as moment from 'moment';

const STORAGE_KEY = 'my_images';
declare let window: any;
const digits_only = string => [...string].every(c => '0123456789'.includes(c));

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // images = [];

  public formData: any = {}

  public tempImageTop: any = '';
  public tempImageBottom: any = '';
  public tempImageFront: any = '';
  public tempImageBack: any = '';
  public tempImageRight: any = '';
  public tempImageLeft: any = '';
  public tempExtraImage = [];
  public extraTemp: any = [];

  public countImageUpload = 1;
  public ImageTopUrl: any = '';
  public ImageBottomUrl: any = '';
  public ImageFrontUrl: any = '';
  public ImageBackUrl: any = '';
  public ImageRightUrl: any = '';
  public ImageLeftUrl: any = '';
  public ExtraImageUrl = [];

  public lockPattern: any = '';

  constructor(
    public router: Router,
    private domSanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private camera: Camera,
    public alertCtrl: AlertController,
    private clooneprovider: ClooneproviderService,
    private file: File,
    private webview: WebView,
    private storage: Storage,
    private filePath: FilePath,
    private ref: ChangeDetectorRef,
    private base64: Base64,
    private http: Http,
    // private transfer: FileTransfer,
    private toastController: ToastController,
    public loadingController: LoadingController,
    private platform: Platform,
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
    this.formData.lockType = '';
    this.formData.accessories_details = '';
    this.formData.agree = 'false';
    this.formData.password = '';
    this.formData.pattern = '';

    // this.lockPattern = new PatternLock('#patternContainer',{
    //   onDraw(pattern){
    //     console.log(pattern);
    //   }
    // })
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  async ExtraImageAlertMsg() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Extra Images',
      message: 'Only 3 extra images allowed !',
      buttons: [
        {
          text: 'Clear All Images?',
          cssClass: 'clear_images',
          handler: () => {
            this.tempExtraImage = [];
            this.ExtraImageUrl = [];
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

  async openSignatureModal() {
    const modal = await this.modalCtrl.create({
      component: SignatureModalPage,
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async openPattern() {
    const modal = await this.modalCtrl.create({
      component: LockpatternModalPage,
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

  imageFunction(option, side) {
    // CHECK EXTRA IMAGES NOT MORE THAN 3
    if (this.tempExtraImage.length == 3) {
      this.ExtraImageAlertMsg();
      return false;

    } else if (option == "camera") {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI, //DATA_URL  FILE_URI
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: false,
        // targetWidth: 200,
        // targetHeight: 200,
      }

      this.camera.getPicture(options).then((imageData) => {
        // let base64Image = 'data:image/jpeg;base64,' + imageData;
        // var tempFilename = imageData.substr(imageData.lastIndexOf('/') + 1);
        // console.log('before',tempFilename)
        // var tempBaseFilesystemPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
        // var newBaseFilesystemPath = this.file.dataDirectory;
        // var newName = 'id'+tempFilename;
        // this.file.copyFile(tempBaseFilesystemPath, tempFilename, newBaseFilesystemPath, newName);
        // var storedPhoto = newBaseFilesystemPath + newName;
        // var displayImage = this.webview.convertFileSrc(storedPhoto);

        // console.log(storedPhoto)
        // console.log(displayImage)
        // console.log(imageData)

        // this.proceedUploadImages(imageData);

        let base64Image = this.webview.convertFileSrc(imageData);
        console.log(base64Image)

        // let filePath: string = imageData;
        // this.base64.encodeFile(filePath).then((base64File: string) => {
        // console.log('encodeImage: ',base64File);
        // let base64Image = base64File;
        // this.domSanitizer.bypassSecurityTrustUrl(base64File)
        // var currentName = base64Image.substr(base64Image.lastIndexOf('/') + 1);

        // console.log('Image path: ',currentName)
        // console.log('Image: ', base64Image)

        if (side == "top") {
          this.tempImageTop = base64Image;
          this.ImageTopUrl = imageData;
        } else if (side == "bottom") {
          this.tempImageBottom = base64Image;
          this.ImageBottomUrl = imageData;
        } else if (side == "front") {
          this.tempImageFront = base64Image;
          this.ImageFrontUrl = imageData;
        } else if (side == "back") {
          this.tempImageBack = base64Image;
          this.ImageBackUrl = imageData;
        } else if (side == "right") {
          this.tempImageRight = base64Image;
          this.ImageRightUrl = imageData;
        } else if (side == "left") {
          this.tempImageLeft = base64Image;
          this.ImageLeftUrl = imageData;
        } else if (side == "extra") {
          // need to do array, only 3 extra images allow
          this.tempExtraImage.push(base64Image);
          this.ExtraImageUrl.push(imageData);
        }

        // }, (err) => {
        //   console.log(err);
        // });


      }, (err) => {
        // Handle error 
        console.log('Camera error:', err)

        if (side == "top") {
          this.tempImageTop = '';
          this.ImageTopUrl = '';
        } else if (side == "bottom") {
          this.tempImageBottom = '';
          this.ImageBottomUrl = '';
        } else if (side == "front") {
          this.tempImageFront = '';
          this.ImageFrontUrl = '';
        } else if (side == "back") {
          this.tempImageBack = '';
          this.ImageBackUrl = '';
        } else if (side == "right") {
          this.tempImageRight = '';
          this.ImageRightUrl = '';
        } else if (side == "left") {
          this.tempImageLeft = '';
          this.ImageLeftUrl = '';
        } else if (side == "extra") {
          this.tempExtraImage = [];
          this.ExtraImageUrl = [];
        }

      });

    } else if (option == "gallery") {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI, //DATA_URL  FILE_URI
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        // targetWidth: 200,
        // targetHeight: 200,
        // allowEdit: false   ---> allowEdit is unpredictable on Android and it should not be used!
      }

      this.camera.getPicture(options).then((imageData) => {
        // this.proceedUploadImages(imageData);
        // let base64Image = 'data:image/jpeg;base64,' + imageData;
        // var str = imageData.substr(0, imageData.lastIndexOf('?'));
        // let str2 = this.webview.convertFileSrc(str);
        // console.log('Gallery:', str2)

        let base64Image = this.webview.convertFileSrc(imageData);
        console.log('Gallery imageData: ', imageData)

        if (side == "top") {
          this.tempImageTop = base64Image;
          this.ImageTopUrl = imageData;
        } else if (side == "bottom") {
          this.tempImageBottom = base64Image;
          this.ImageBottomUrl = imageData;
        } else if (side == "front") {
          this.tempImageFront = base64Image;
          this.ImageFrontUrl = imageData;
        } else if (side == "back") {
          this.tempImageBack = base64Image;
          this.ImageBackUrl = imageData;
        } else if (side == "right") {
          this.tempImageRight = base64Image;
          this.ImageRightUrl = imageData;
        } else if (side == "left") {
          this.tempImageLeft = base64Image;
          this.ImageLeftUrl = imageData;
        } else if (side == "extra") {
          // need to do array, only 3 extra images allow
          this.tempExtraImage.push(base64Image);
          this.ExtraImageUrl.push(imageData);
        }

      }, (err) => {
        // Handle error 
        console.log('Camera error:', err)

        if (side == "top") {
          this.tempImageTop = '';
          this.ImageTopUrl = '';
        } else if (side == "bottom") {
          this.tempImageBottom = '';
          this.ImageBottomUrl = '';
        } else if (side == "front") {
          this.tempImageFront = '';
          this.ImageFrontUrl = '';
        } else if (side == "back") {
          this.tempImageBack = '';
          this.ImageBackUrl = '';
        } else if (side == "right") {
          this.tempImageRight = '';
          this.ImageRightUrl = '';
        } else if (side == "left") {
          this.tempImageLeft = '';
          this.ImageLeftUrl = '';
        } else if (side == "extra") {
          this.tempExtraImage = [];
          this.ExtraImageUrl = [];
        }

      });
    }
  }

  async submitForm() {
    // let now = moment().format('YYYYMMDD');
    let loading = await this.clooneprovider.showLoading();
    
    this.formData.branch = this.clooneprovider.branchCode;
    this.formData.signature = this.clooneprovider.signature;
    this.formData.agree = this.clooneprovider.tncAgree;
    this.formData.pattern = this.clooneprovider.pattern;
    console.log(this.formData)

    //TEST
    // this.uploadImages();

    if (this.formData.name == "" || this.formData.name == null) {
      loading.dismiss();
      this.clooneprovider.showAlert('Missing Input!', 'Name is required');
      return false
    } else if (this.formData.email == "" || this.formData.email == null) {
      loading.dismiss();
      this.clooneprovider.showAlert('Missing Input!', 'Email is required');
      return false
    } else if (this.formData.contact == "" || this.formData.contact == null) {
      loading.dismiss();
      this.clooneprovider.showAlert('Missing Input!', 'Contact is required');
      return false
    } else if (this.formData.brand == "" || this.formData.brand == null) {
      loading.dismiss();
      this.clooneprovider.showAlert('Missing Input!', 'Product Brand is required');
      return false
    } else if (this.formData.model == "" || this.formData.model == null) {
      loading.dismiss();
      this.clooneprovider.showAlert('Missing Input!', 'Product Model is required');
      return false
    } else if (this.formData.sn == "" || this.formData.sn == null) {
      loading.dismiss();
      this.clooneprovider.showAlert('Missing Input!', 'Product Serial Number is required');
      return false
    } else if (this.formData.imei == "" || this.formData.imei == null) {
      loading.dismiss();
      this.clooneprovider.showAlert('Missing Input!', 'Product IMEI is required');
      return false
    } else if (this.formData.son == "" || this.formData.son == null || this.formData.docType == 'CSO/SSO') {
      loading.dismiss();
      this.clooneprovider.showAlert('Missing Input!', 'Complete CSO/SSO is required');
      return false
    } else if (this.formData.son.toString().length != 5) {
      loading.dismiss();
      this.clooneprovider.showAlert('Invalid CSO/SSO', 'Please input 5 digits for CSO/SSO');
      return false
    } else if (digits_only(this.formData.son) == false) {
      loading.dismiss();
      this.clooneprovider.showAlert('Invalid CSO/SSO', 'Please input number only for CSO/SSO');
      return false
    } else if (this.formData.sim == "false") {
      loading.dismiss();
      this.clooneprovider.showAlert('OS ID', 'Kindly sign out your Apple ID/Google account');
      return false
    } else if (this.formData.factory == "false") {
      loading.dismiss();
      this.clooneprovider.showAlert('Factory Mode', 'Customer must agree to set the device to Factory Mode');
      return false
    } else if (this.formData.accessories == "true" && this.formData.accessories_details == "") {
      loading.dismiss();
      this.clooneprovider.showAlert('No Accessories Details!', 'Please insert accessories details!');
      return false
    } else if (this.formData.lock == "true" && this.formData.lockType == "") {
      loading.dismiss();
      this.clooneprovider.showAlert('No Security Input!', 'Please choose lock type!');
      return false
    } else if (this.formData.lock == "true" && this.formData.lockType == "1" && this.formData.pattern == "") {
      loading.dismiss();
      this.clooneprovider.showAlert('No Security Input!', 'Please insert the lock pattern!');
      return false
    } else if (this.formData.lock == "true" && this.formData.lockType == "2" && this.formData.password == "") {
      loading.dismiss();
      this.clooneprovider.showAlert('No Security Input!', 'Please insert the lock password!');
      return false
    } else if (this.formData.lock == "true" && this.formData.lockType == "3" && this.formData.pattern == "") {
      loading.dismiss();
      this.clooneprovider.showAlert('No Security Input!', 'Please insert the lock pattern and password!');
      return false
    } else if (this.formData.lock == "true" && this.formData.lockType == "3" && this.formData.password == "") {
      loading.dismiss();
      this.clooneprovider.showAlert('No Security Input!', 'Please insert the lock pattern and password!');
      return false
    } else if (this.tempImageTop == "" || this.tempImageBottom == "" || this.tempImageFront == "" || this.tempImageBack == "" || this.tempImageRight == "" || this.tempImageLeft == "") {
      loading.dismiss();
      this.clooneprovider.showAlert('No Images!', 'Please insert pictures from all sides!');
      return false
    } else if(this.formData.signature == "" || this.formData.signature == null) {
      loading.dismiss();
      this.clooneprovider.showAlert('Missing Input!', 'Signature is required.');
      return false
    } else if(this.formData.agree == false){
      loading.dismiss();
      this.clooneprovider.showAlert('Not Agreed to Terms & Conditions!', 'Please agree to Terms & Conditions before proceed submission');
      return false
    } else {
      this.uploadExtraImage();
      this.uploadImages();
    }
    
    // else {
    //   this.formData.imageTop = this.tempImageTop.substr(this.tempImageTop.lastIndexOf('/') + 1);
    //   this.formData.imageBottom = this.tempImageBottom.substr(this.tempImageBottom.lastIndexOf('/') + 1);
    //   this.formData.imageFront = this.tempImageFront.substr(this.tempImageFront.lastIndexOf('/') + 1);
    //   this.formData.imageBack = this.tempImageBack.substr(this.tempImageBack.lastIndexOf('/') + 1);
    //   this.formData.imageRight = this.tempImageRight.substr(this.tempImageRight.lastIndexOf('/') + 1);
    //   this.formData.imageLeft = this.tempImageLeft.substr(this.tempImageLeft.lastIndexOf('/') + 1);
    // }

    
    // this.submitProcess();

  }

  uploadImages() {
    // console.log('Upload images: ', this.ImageTopUrl)
    var img;
    if (this.countImageUpload == 1) {
      img = this.ImageTopUrl;
    }
    else if (this.countImageUpload == 2) {
      img = this.ImageBottomUrl;
    }
    else if (this.countImageUpload == 3) {
      img = this.ImageFrontUrl;
    }
    else if (this.countImageUpload == 4) {
      img = this.ImageBackUrl;
    }
    else if (this.countImageUpload == 5) {
      img = this.ImageRightUrl;
    }
    else if (this.countImageUpload == 6) {
      img = this.ImageLeftUrl;
    }

    console.log(img)
    this.proceedUploadImages(img)

    //*---- USING FILE TRANSFER PLUGIN TO UPLOAD IMG TO SERVER ----*//
    // var options = {
    //   fileName: img,
    //   filekey: "file",
    // };

    // console.log("File to upload: " + img);
    // this.fileTransfer.upload(img, this.clooneprovider.apiUrl, options).then((data) => {
    //   // success
    //   console.log("Done upload: " + this.countImageUpload);
    //   console.log(data)

    // }, (err) => {
    //   // error
    //   console.log(err)
    // })
    //*----------------------- END -------------------------*//

  }

  proceedUploadImages(imageFileUri: any) {
    window['resolveLocalFileSystemURL'](imageFileUri,
      entry => {
        entry['file'](file => this.readFile(file));
      });
  }

  private readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      const formData = new FormData();
      const imgBlob = new Blob([reader.result], { type: file.type });

      let re = /\-/gi;
      let name = file.name.replace(re, "_");

      formData.append('file', imgBlob, text+'_'+name);

      console.log(text+'_'+name)

      if(this.countImageUpload == 1){
        this.formData.imageTop = text+'_'+name
      } else if(this.countImageUpload == 2){
        this.formData.imageBottom = text+'_'+name
      } else if(this.countImageUpload == 3){
        this.formData.imageFront = text+'_'+name
      } else if(this.countImageUpload == 4){
        this.formData.imageBack = text+'_'+name
      } else if(this.countImageUpload == 5){
        this.formData.imageRight = text+'_'+name
      } else if(this.countImageUpload == 6){
        this.formData.imageLeft = text+'_'+name
      } 

      console.log(this.formData)
      //Api here
      this.http.post(this.clooneprovider.apiUrl, formData).subscribe((resp) => {
        let apiData = resp.json();
        console.log('Succes get data', apiData)
        console.log('data', JSON.stringify(resp.json()))

        if (this.countImageUpload == 6) {
          this.countImageUpload = 1;

          this.proceedSubmit();

        }
        else {
          this.countImageUpload++;
          this.uploadImages();
        }

      }, (error) => {
        console.log('Failed: ', error)
        this.clooneprovider.showAlert(this.clooneprovider.unableConnectTitle, this.clooneprovider.unableConnectMsg);
      });
    };
    reader.readAsArrayBuffer(file);
  }

  uploadExtraImage(){
    this.ExtraImageUrl.forEach((value) => {
      console.log(value);
      window['resolveLocalFileSystemURL'](value,
        entry => {
          entry['file'](file => this.readExtraFile(file));
        });
    }); 
  }

  private readExtraFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      const formData = new FormData();
      const imgBlob = new Blob([reader.result], { type: file.type });

      let re = /\-/gi;
      let name = file.name.replace(re, "_");

      formData.append('file', imgBlob, text+'_'+name);

      console.log(text+'_'+name)

      this.extraTemp.push(text+'_'+name);
      console.log(this.extraTemp)
      this.formData.extra = this.extraTemp

      console.log('EXTRA IMG ARR: ',this.formData)
      //Api here
      this.http.post(this.clooneprovider.apiUrl, formData).subscribe((resp) => {
        let apiData = resp.json();
        console.log('Succes get data', apiData)

      }, (error) => {
        console.log('Failed: ', error)
        this.clooneprovider.showAlert(this.clooneprovider.unableConnectTitle, this.clooneprovider.unableConnectMsg);
      });
    };
    reader.readAsArrayBuffer(file);
  }

  proceedSubmit() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let postForm = {
      formsubmit: 'formsubmit',
      data: JSON.stringify(this.formData)
    }
    console.log(postForm)

    this.http.post(this.clooneprovider.apiUrl, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
      let apiData = resp.json();
      console.log('Succes get data', apiData)
      this.loadingController.dismiss();

      if(apiData.success === 1){
        this.router.navigate(['success']);
      } else if(apiData.success === 0){
        this.clooneprovider.showAlert(apiData.title, apiData.message);
      }

    }, (error) => {
      console.log('Failed: ', error)
      this.clooneprovider.showAlert('Error!', 'Error submitting form. Please try again.');
    });
  }


}
