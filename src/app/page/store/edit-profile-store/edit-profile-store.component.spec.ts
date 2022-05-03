import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileStoreComponent } from './edit-profile-store.component';

describe('EditProfileStoreComponent', () => {
  let component: EditProfileStoreComponent;
  let fixture: ComponentFixture<EditProfileStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
