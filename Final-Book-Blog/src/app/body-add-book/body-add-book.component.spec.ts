import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAddBookComponent } from './body-add-book.component';

describe('BodyAddBookComponent', () => {
  let component: BodyAddBookComponent;
  let fixture: ComponentFixture<BodyAddBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAddBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
