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

  public startDate: any = '';
  public endDate: any = '';
  public tempStartDate: any = '';
  public tempEndDate: any = '';

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

  showStartDate(){
    this.startDate = this.tempStartDate.split('T')[0]; 
    console.log(this.startDate);
  }

  showEndDate(){
    this.endDate = this.tempEndDate.split('T')[0]; 
    console.log(this.endDate);
  }

  sortOldest(){
    this.order = this.descending ? 1 : -1;
  }

  sortLatest(){
    this.order = this.ascending ? -1 : 1;
  }

  ionViewWillEnter(){
    // this.initSubmitted();
    this.isDataAvailable = true
  }

  async doRefresh(event) {
    if(this.startDate == ""){
      event.target.complete(); //close ion-refresher
      this.clooneprovider.showAlert('Missing Input!', 'Please input From Date');
    } else if(this.endDate == ""){
      event.target.complete(); //close ion-refresher
      this.clooneprovider.showAlert('Missing Input!', 'Please input Until Date');
    } else if(this.startDate > this.endDate){
      event.target.complete(); //close ion-refresher
      this.clooneprovider.showAlert('Wrong Date Input!', 'Please input correct date range');
    } else {
      console.log('Begin async operation');
      this.initSubmitted();
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let postForm = {
        getsubmitlist: this.clooneprovider.branchCode,
        searchDateFrom: this.startDate,
        searchDateUntil: this.endDate,
      }
      console.log(postForm)
      let loading = await this.clooneprovider.showLoading();
  
      this.http.post(this.clooneprovider.apiUrlsubmittedForm, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
        let apiData           = resp.json();
        if(apiData == null){
          loading.dismiss();
          event.target.complete(); //close ion-refresher
          this.clooneprovider.showAlert('No Data', 'Please choose another date');
        } else {
          this.arrlist = apiData;
          this.arrlistBackup = apiData;
          console.log('Succes get data', this.arrlist)
    
          loading.dismiss();
          event.target.complete(); //close ion-refresher
        }
      }, (error) => { 
        console.log('Failed: ', error)
        this.clooneprovider.showAlert('Error!', 'Network error. Please pull to refresh');
      });
    }
    
    

    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   event.target.complete();
    // }, 2000);
  }

  async initSubmitted() {
    if(this.startDate == ""){
      this.clooneprovider.showAlert('Missing Input!', 'Please input From Date');
    } else if(this.endDate == ""){
      this.clooneprovider.showAlert('Missing Input!', 'Please input Until Date');
    } else if(this.startDate > this.endDate){
      this.clooneprovider.showAlert('Wrong Date Input!', 'Please input correct date range');
    } else {
  
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let postForm = {
        getsubmitlist: this.clooneprovider.branchCode,
        searchDateFrom: this.startDate,
        searchDateUntil: this.endDate,
      }
      console.log(postForm)
      let loading = await this.clooneprovider.showLoading();
      // console.log(this.clooneprovider.jsonToURLEncoded(postForm))
  
      this.http.post(this.clooneprovider.apiUrlsubmittedForm, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
        let apiData           = resp.json();
        if(apiData == null){
          loading.dismiss();
          this.clooneprovider.showAlert('No Data', 'Please choose another date');
        } else {
          this.arrlist = apiData;
          this.arrlistBackup = apiData;
    
          loading.dismiss();
        }
  
      }, (error) => { 
        console.log('Failed: ', error)
        this.clooneprovider.showAlert('Error!', 'Network error. Please pull to refresh');
      });
    }

    

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
