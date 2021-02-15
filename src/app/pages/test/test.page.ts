import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  public initHome: any;

  constructor(
    private platform: Platform,
  ) { }

  ngOnInit() {

      // this.platform.ready().then(() => {
      //   $rootScope.lock = null
      //   $rootScope.lock = new PatternLock("#patternContainer");
      //   //$rootScope.lock2 = new PatternLock("#patternHolderset",{enableSetPattern : true});
      //   //alert("initHome")
      //   //console.log($rootScope.lock)
      //   //$rootScope.lock.getPattern();
      //   //$rootScope.$apply();
      //   //$location.reload()
      //   // this.signaturePad.off();
      //   if ($window.localStorage["reload"] == 1) {
      //     $window.location.reload(true)
      //     $window.localStorage["reload"] = 0
      //   }
      // })
    
  }

  
}
