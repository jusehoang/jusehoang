import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountCustomerComponent } from './manage-account-customer.component';

describe('ManageAccountCustomerComponent', () => {
  let component: ManageAccountCustomerComponent;
  let fixture: ComponentFixture<ManageAccountCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAccountCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAccountCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
