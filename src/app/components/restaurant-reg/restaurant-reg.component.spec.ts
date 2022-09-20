import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantRegComponent } from './restaurant-reg.component';

describe('RestaurantRegComponent', () => {
  let component: RestaurantRegComponent;
  let fixture: ComponentFixture<RestaurantRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
