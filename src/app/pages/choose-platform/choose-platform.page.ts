import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-platform',
  templateUrl: './choose-platform.page.html',
  styleUrls: ['./choose-platform.page.scss'],
})
export class ChoosePlatformPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  choosePlatAction(){
    this.router.navigateByUrl('choose-start-dest')
  }

}
