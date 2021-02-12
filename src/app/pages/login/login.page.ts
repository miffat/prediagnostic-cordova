import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public router: Router,
    public menuCtrl: MenuController
    ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  onLogin() {
    this.router.navigateByUrl('/home');
    // if (form.valid) {
    //   this.userData.login(this.login.username);
    //   this.router.navigateByUrl('/app/tabs/home');
    // }
  }

  ionViewDidLeave(){
    this.menuCtrl.enable(true);
  }
}
