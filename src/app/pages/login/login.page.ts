import { Http, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ClooneproviderService } from '../../services/clooneprovider.service';
import { decode } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginform: FormGroup;
  username: any = '';
  password: any = '';
  failed_messages: any;

  error_messages = {
    'username': [
      { type: "required"}
    ],
    'password': [
      { type: "required" }
    ]
  }

  constructor(
    public router: Router,
    public menuCtrl: MenuController,
    private platform: Platform,
    private authenticationService: AuthenticationService,
    public formBuilder: FormBuilder,
    private http: Http,
    public storage: Storage,
    private clooneprovider: ClooneproviderService
  ) {
    this.loginform = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  async login() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let postForm = {
      username: this.loginform.value.username,
      password: this.loginform.value.password
		}
    console.log(postForm)

    this.http.post(this.clooneprovider.apiUrl, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
      let apiData           = resp.json();
      console.log('Succes get data', apiData)

      if(apiData.success == 0){
        this.clooneprovider.showAlert(this.clooneprovider.invalidTitle, this.clooneprovider.invalidMsg);
      }else{
        this.clooneprovider.branchCode = this.loginform.value.username.toUpperCase();
        this.router.navigate(['home']);
      }
      
    }, (error) => { 
      console.log('Failed: ', error)
      this.clooneprovider.showAlert(this.clooneprovider.unableConnectTitle, this.clooneprovider.unableConnectMsg);
    });

  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }
}
