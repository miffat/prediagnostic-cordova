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
  arrlistBackup = []
  isDataAvailable: boolean = false;

  ascending: boolean = true
  descending: boolean = true;
  order: number;
  column: string = 'created';

  constructor(
    public modalCtrl: ModalController,
    private clooneprovider: ClooneproviderService,
    private http: Http,
    private platform: Platform,
  ) { 
    // this.initSubmitted
  }

  ngOnInit() {
    
  }

  sortOldest(){
    this.order = this.descending ? 1 : -1;
  }

  sortLatest(){
    this.order = this.ascending ? -1 : 1;
  }

  // sortArr(){
  //   this.arrlist.sort((obj1, obj2) => {
  //     if (obj1.created > obj2.created) {
  //         return 1;
  //     }
  
  //     if (obj1.created < obj2.created) {
  //         return -1;
  //     }
  
  //     return 0;
  //   });
  // }

  ionViewWillEnter(){
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
      this.arrlistBackup = apiData;
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
      this.arrlistBackup = apiData;

      loading.dismiss();

    }, (error) => { 
      console.log('Failed: ', error)
      this.clooneprovider.showAlert('Error!', 'Network error. Please pull to refresh');
    });

  }

  // SEARCH ITEMS
  async filterList(evt) {
    this.arrlist = this.arrlistBackup;
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.arrlist = this.arrlist.filter(currentItems => {
      if (currentItems.brand && searchTerm) {
        return (currentItems.brand.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 
        || currentItems.model.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 
        || currentItems.son.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 
        || currentItems.created.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 
        );
      }
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
