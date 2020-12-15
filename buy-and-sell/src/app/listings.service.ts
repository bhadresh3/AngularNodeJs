import { Injectable } from '@angular/core';
import { Listing } from './types'
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  listings : Listing[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getListings(): Observable<Listing[]>{
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id : string): Observable<Listing>{
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: string): Observable<Listing>{
    return this.http.post<Listing>(
      `api/listings/{$id}/add-view`,
      {},
      httpOptions,
    )
  }

  getListingsForUsers(): Observable<Listing[]>{
    return this.http.get<Listing[]>('/api/users/12345/listings')
  }

  deleteListig(id: string): Observable<any>{
    return this.http.delete(`/api/listings/${id}`)
  }
  
  createListing(name: string, description: string, price: number){
    return this.http.post<Listing>(
      '/api/listings',
      {
        name,
        description,
        price
      },
      httpOptions,
    )
  }

  editListing(id: string, name: string, description: string, price: number): Observable<Listing>{
    return this.http.post<Listing>
    (
     `/api/listings/${id}`,
     { name, description, price},
     httpOptions, 
    )
  }

}
