import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ck-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {
  orders = [
    { id: 1, client: { name: 'Иванов Иван' }, name: 'Торт 5 кг', amount: 5000, dateFrom: '11.11.2016', deadline: '11.12.2016', status: 'Оплачен' },
    { id: 2, client: { name: 'Эдуард' }, name: 'Капкейки 10 шт', amount: 1500, dateFrom: '15.11.2016', deadline: '19.12.2016', status: 'Оплачен' },
    { id: 3, client: { name: 'Василий Петрович' }, name: 'Торт 2 кг', amount: 3000, dateFrom: '26.11.2016', deadline: '15.12.2016', status: 'Подтверждение' },
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(order) {
    console.log(order);
  }

}
