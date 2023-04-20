import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWishListComponent } from './body-wish-list.component';

describe('BodyWishListComponent', () => {
  let component: BodyWishListComponent;
  let fixture: ComponentFixture<BodyWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyWishListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
