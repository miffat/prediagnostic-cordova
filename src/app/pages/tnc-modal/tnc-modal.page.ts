import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClooneproviderService } from '../../services/clooneprovider.service';

@Component({
  selector: 'app-tnc-modal',
  templateUrl: './tnc-modal.page.html',
  styleUrls: ['./tnc-modal.page.scss'],
})
export class TncModalPage implements OnInit {

  // public tnc = {
  //   value: false
  // }

  public list = [
    {isChecked: false}
  ]

  constructor(
    public modalCtrl: ModalController,
    private clooneprovider: ClooneproviderService,
  ) { }

  ngOnInit() {
  }

  selOptions: Array < string > ;

  checkboxChange() {
    const selOptions = [];
    const checkboxes = this.list;

    for (let i = 0; i < checkboxes.length; ++i) {
        if (checkboxes[i].isChecked) {
            selOptions.push(' ');
        }
    }
    this.selOptions = selOptions;

    console.log(this.selOptions.length)
    if(this.selOptions.length == 0){
      this.clooneprovider.tncAgree = true
      console.log('agree')
    }else{
      this.clooneprovider.tncAgree = false
      console.log('disagree')
    }
}

  // onClick(){
  //   console.log(this.tnc = true)
  // }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
