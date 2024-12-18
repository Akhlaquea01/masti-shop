import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface BreadcrumbItem {
  label: string;
  url?: string; // Optional for the current page
}
@Component({
  selector: 'masTi-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor]
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];

  constructor(private router: Router) { }
  navigateToUrl(url: string) {
    console.log(url);
    
    this.router.navigate([url], { replaceUrl: true });
  }
}
