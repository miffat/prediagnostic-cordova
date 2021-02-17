import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import PatternLock from "patternlock";
import { ClooneproviderService } from '../../services/clooneprovider.service';

@Component({
  selector: 'app-lockpattern-modal',
  templateUrl: './lockpattern-modal.page.html',
  styleUrls: ['./lockpattern-modal.page.scss'],
})
export class LockpatternModalPage implements OnInit {

  public lockPattern: any = '';
  public getLockPattern: any = '';

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private clooneprovider: ClooneproviderService,
  ) { }

  ngOnInit() {
    this.lockPattern = new PatternLock('#patternContainer',{
      onDraw(pattern){
        console.log(pattern);
      }
    })
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  saveLockPattern(){
    this.clooneprovider.pattern = this.lockPattern.getPattern();
    console.log('Saved lock pattern: ',this.clooneprovider.pattern);
    this.dismiss()
  }

}
