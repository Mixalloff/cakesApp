import { Component, EventEmitter, OnInit } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";

const clients = [
  { id: 1, name: 'Иванов Иван', source: 'vk', orders: [ {amount: 1000}, {amount: 2000} ], contacts: {phone: '+79998887766', vk: 'vk.com/ivanov'}, scoring: 5 },
  { id: 2, name: 'Александра', source: 'прямое предложение', orders: [ {amount: 1800} ], contacts: { instagram: 'instagram.com/aleksa' }, scoring: 2 },
  { id: 3, name: 'Петр Петрович', source: 'от клиента', orders: [ {amount: 500} ], contacts: { phone: '+79998885533', email: 'petrovic@mail.ru' }, scoring: 4, relative: 1 } // relative - привязка к пригласившему клиенту
];

@Component({
  selector: 'ck-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {
  clients = clients;
  selectedClient = {};
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  ngOnInit() {
  }

  ordersAmount(orders: {amount: number}[]) {
    return orders.reduce((prev, current) => prev + current.amount, 0);
  }

  onClick(client) {
    console.log(client);
  }

  openModal(client) {
    this.selectedClient = client;
    this.modalActions.emit({action:"modal", params:['open']});
  }

}
