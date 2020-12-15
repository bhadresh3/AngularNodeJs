import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsDetailComponent } from './listings-detail.component';

describe('ListingsDetailComponent', () => {
  let component: ListingsDetailComponent;
  let fixture: ComponentFixture<ListingsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
