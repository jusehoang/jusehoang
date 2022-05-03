import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMonneyRoomComponent } from './manage-monney-room.component';

describe('ManageMonneyRoomComponent', () => {
  let component: ManageMonneyRoomComponent;
  let fixture: ComponentFixture<ManageMonneyRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMonneyRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMonneyRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
