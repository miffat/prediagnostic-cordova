import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { SubmittedDetailsPage } from "../submitted-details/submitted-details.page";
import { ClooneproviderService } from '../../services/clooneprovider.service';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.page.html',
  styleUrls: ['./submitted.page.scss'],
})
export class SubmittedPage implements OnInit {

  arrlist = []
  isDataAvailable: boolean = false;

  constructor(
    public modalCtrl: ModalController,
    private clooneprovider: ClooneproviderService,
    private http: Http,
    private platform: Platform,
  ) { 
    // this.initSubmitted
  }

  ngOnInit() {
    // this.platform.ready().then(() => {
    //   this.initSubmitted
    // });
    
  }

  ionViewWillEnter(){
    console.log('first')
    this.initSubmitted();
    this.isDataAvailable = true
  }

  async doRefresh(event) {
    console.log('Begin async operation');
    this.initSubmitted();
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let postForm = {
      getsubmitlist: this.clooneprovider.branchCode
    }
    console.log(postForm)
    let loading = await this.clooneprovider.showLoading();

    this.http.post(this.clooneprovider.apiUrl, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
      let apiData           = resp.json();

      this.arrlist = apiData;
      console.log('Succes get data', this.arrlist)

      loading.dismiss();
      event.target.complete(); //close ion-refresher

    }, (error) => { 
      console.log('Failed: ', error)
      this.clooneprovider.showAlert('Error!', 'Network error. Please pull to refresh');
    });
    

    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   event.target.complete();
    // }, 2000);
  }

  async initSubmitted() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let postForm = {
      getsubmitlist: this.clooneprovider.branchCode
		}
    console.log(postForm)
    let loading = await this.clooneprovider.showLoading();

    this.http.post(this.clooneprovider.apiUrl, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
      let apiData           = resp.json();
      this.arrlist = apiData;

      loading.dismiss();

    }, (error) => { 
      console.log('Failed: ', error)
      this.clooneprovider.showAlert('Error!', 'Network error. Please pull to refresh');
    });

  }

  async openDetails(id) {
    const modal = await this.modalCtrl.create({
      component: SubmittedDetailsPage,
      componentProps: {
        detailID: id
      }
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
