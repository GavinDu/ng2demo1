import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  money = 100;

  newMoney: number;

  moneyList = [100, 200, 300, 400, 500];

  fetchMoney = new Promise((resolve, reject) => {
    setTimeout(() => resolve(200), 2000);
  });

  constructor() { }

  ngOnInit() {
  }

  addMoney() {
    if (this.newMoney) {
      this.moneyList.push(this.newMoney);
    }
  }
}
