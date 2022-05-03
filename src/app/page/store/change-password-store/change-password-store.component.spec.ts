import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordStoreComponent } from './change-password-store.component';

describe('ChangePasswordStoreComponent', () => {
  let component: ChangePasswordStoreComponent;
  let fixture: ComponentFixture<ChangePasswordStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
