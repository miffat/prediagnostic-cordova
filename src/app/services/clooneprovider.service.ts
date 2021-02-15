import { Injectable, Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { MenuController, Platform, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ClooneproviderService {

  apiUrl: string = "http://eticket.senheng.com.my/sh_ebs/defectAPI.php";

  public invalidTitle = 'Login Error';
  public invalidMsg = 'Invalid username/password';
  public unableConnectTitle = 'Unable to connect to server';
  public unableConnectMsg = 'Could not connect to server. Please try again later.';
  public currentAppVersion = '';
  public branchCode = '';
  public signature = '';
  public tncAgree: boolean = false;

  constructor(
    public alertCtrl: AlertController,
    public loadingController: LoadingController,     
  ) { }

  async showAlert(title, text) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: text,
      buttons: ['OK'],
      cssClass: 'my-alert'
    });
    await alert.present();
    return alert;
  }

  jsonToURLEncoded(jsonString: any) {
    return Object.keys(jsonString).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
    }).join('&');
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      spinner: "crescent",
      message: 'Please wait...'
    });
    
    await loading.present();
    return loading;
  }

  async dismissLoading() {
    this.loadingController.dismiss();
  }

}
