import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountStoreComponent } from './manage-account-store.component';

describe('ManageAccountStoreComponent', () => {
  let component: ManageAccountStoreComponent;
  let fixture: ComponentFixture<ManageAccountStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAccountStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAccountStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
