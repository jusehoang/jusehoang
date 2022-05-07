import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountByAdminComponent } from './add-account-by-admin.component';

describe('AddAccountByAdminComponent', () => {
  let component: AddAccountByAdminComponent;
  let fixture: ComponentFixture<AddAccountByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccountByAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
