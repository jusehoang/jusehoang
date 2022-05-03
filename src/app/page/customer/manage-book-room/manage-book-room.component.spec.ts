import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBookRoomComponent } from './manage-book-room.component';

describe('ManageBookRoomComponent', () => {
  let component: ManageBookRoomComponent;
  let fixture: ComponentFixture<ManageBookRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBookRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBookRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
