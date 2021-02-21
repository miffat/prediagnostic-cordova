import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  async home(){
    // this.router.navigate(['home']);
    this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() => {
      this.router.navigate(["/home"]);
      });
  }

}
