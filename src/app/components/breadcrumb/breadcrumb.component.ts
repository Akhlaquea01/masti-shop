import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface BreadcrumbItem {
  label: string;
  url?: string; // Optional for the current page
}
@Component({
  selector: 'masTi-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor]
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
}
