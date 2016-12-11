import { Component, OnInit } from '@angular/core';

const profile = {
  name: 'Гагарина Александра',
  email: 'aleksandra.gagarina@gmail.com',
  image: '../../assets/images/main-logo.jpg',
  background: './../assets/images/background.jpg'
}

@Component({
  selector: 'ck-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  profile = profile;

  constructor() { }

  ngOnInit() {
  }

}
