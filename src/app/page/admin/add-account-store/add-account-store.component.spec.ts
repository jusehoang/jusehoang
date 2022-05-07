import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountStoreComponent } from './add-account-store.component';

describe('AddAccountStoreComponent', () => {
  let component: AddAccountStoreComponent;
  let fixture: ComponentFixture<AddAccountStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccountStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
