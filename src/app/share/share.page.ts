import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
  shoeNum: number;


  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.shoeNum = this.route.snapshot.params['number'] || 2;
  }

  goBack() {
    this.navCtrl.back();
  }
}
