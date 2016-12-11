import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ck-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.css']
})
export class ClientModalComponent implements OnInit {
  @Input() clientInfo;

  constructor() { }

  ngOnInit() {
  }

}
