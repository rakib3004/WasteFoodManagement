import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoRegComponent } from './ngo-reg.component';

describe('NgoRegComponent', () => {
  let component: NgoRegComponent;
  let fixture: ComponentFixture<NgoRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
