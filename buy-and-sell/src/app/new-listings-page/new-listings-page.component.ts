import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-new-listings-page',
  templateUrl: './new-listings-page.component.html',
  styleUrls: ['./new-listings-page.component.css']
})
export class NewListingsPageComponent implements OnInit {
  constructor(
    private router: Router,
    private listingService: ListingsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit({ name, description, price }): void{
    this.listingService.createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      })
  }

}
