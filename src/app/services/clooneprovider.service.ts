import { Injectable, Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { MenuController, Platform, AlertController } from '@ionic/angular';
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

  constructor(
    public alertCtrl: AlertController    
  ) { }

  async showAlert(title, text) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: text,
      buttons: ['OK'],
    });
    await alert.present();
    return alert;
  }

  jsonToURLEncoded(jsonString: any) {
    return Object.keys(jsonString).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
    }).join('&');
  }
}
