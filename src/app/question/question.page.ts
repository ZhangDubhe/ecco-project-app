import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  shoeNum: number;
  constructor(
    private router: Router,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.shoeNum = 2;
  }
  inputValue(event: any)  {
    this.shoeNum = event.detail.value;
  }

  onSubmit() {
    if (this.shoeNum && this.shoeNum >= 0) {
      this.router.navigate(['/result', this.shoeNum]);
    } else {
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Tips!',
      message: 'Please input the number',
      buttons: ['OK']
    });

    await alert.present();
  }

}
