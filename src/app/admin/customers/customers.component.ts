import { Component } from '@angular/core';
interface Customer {
  name: string;
  email: string;
  phone: string;
  orders: string[];
}
@Component({
  selector: 'masTi-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  customers: Customer[] = [
    { name: 'John Doe', email: 'john@example.com', phone: '9876543210', orders: ['ORD001', 'ORD002'] },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '9988776655', orders: ['ORD003'] },
    { name: 'David Johnson', email: 'david@example.com', phone: '9123456789', orders: [] },
  ];

  searchQuery: string = '';

  filteredCustomers() {
    return this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
