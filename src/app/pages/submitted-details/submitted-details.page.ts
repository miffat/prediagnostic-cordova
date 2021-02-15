import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ClooneproviderService } from '../../services/clooneprovider.service';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-submitted-details',
  templateUrl: './submitted-details.page.html',
  styleUrls: ['./submitted-details.page.scss'],
})
export class SubmittedDetailsPage implements OnInit {

  public detailID: any = '';
  datalist = [];

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private clooneprovider: ClooneproviderService,
    private http: Http,
  ) {
    this.detailID = this.navParams.get('detailID');
   }

  ngOnInit() {
    console.log(this.detailID)

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let postForm = {
      getDetail: this.detailID
    }
    console.log(postForm)
    this.clooneprovider.showLoading();

    this.http.post(this.clooneprovider.apiUrl, this.clooneprovider.jsonToURLEncoded(postForm), { headers: headers }).subscribe((resp) => {
      let apiData           = resp.json();
      this.datalist = apiData;

      console.log('Succes get data', apiData)

      // loading.dismiss();
      this.clooneprovider.dismissLoading();


    }, (error) => { 
      console.log('Failed: ', error)
      this.clooneprovider.showAlert('Error!', 'Network error. Please pull to refresh');
    });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
