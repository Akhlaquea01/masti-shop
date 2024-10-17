import { Component } from '@angular/core';
interface Order {
  id: string;
  customer: string;
  items: string[];
  total: number;
  status: string;
}
@Component({
  selector: 'masTi-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders: Order[] = [
    { id: 'ORD001', customer: 'John Doe', items: ['T-shirt', 'Mug'], total: 500, status: 'Pending' },
    { id: 'ORD002', customer: 'Jane Smith', items: ['Frame', 'Keychain'], total: 300, status: 'Delivered' },
    { id: 'ORD003', customer: 'David Johnson', items: ['Custom T-shirt'], total: 250, status: 'Cancelled' },
  ];

  updateStatus(order: Order, status: string) {
    order.status = status;
    alert(`Order ${order.id} marked as ${status}`);
  }
}
