import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  // @ViewChild('slides') slides;
  shoeNum: number;
  currentIndex: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    const shoeNum = this.route.snapshot.params['number'];
    console.log('Num', shoeNum);
    this.shoeNum = shoeNum;
  }
  setSilderIndex (index: number) {
    this.currentIndex = index;
  }

  goBack () {
    this.navCtrl.back();
  }

  gotoQRCode () {
    this.router.navigate(['/share', { number: this.shoeNum}]);
  }
}
