import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
import { ListingsService } from '../listings.service'

@Component({
  selector: 'app-listings-detail',
  templateUrl: './listings-detail.component.html',
  styleUrls: ['./listings-detail.component.css']
})
export class ListingsDetailComponent implements OnInit {

  listing: Listing; 
  isLoading : boolean = true;

  constructor(
    private route : ActivatedRoute,
    private listingsService : ListingsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id)
      .subscribe(listing=> {
        this.listing = listing;
        this.isLoading = false;
       });
    this.listingsService.addViewToListing(id)
    .subscribe(() => console.log('Views updated!'));
  }
}
