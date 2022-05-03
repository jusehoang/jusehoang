import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBookRoomComponent } from './history-book-room.component';

describe('HistoryBookRoomComponent', () => {
  let component: HistoryBookRoomComponent;
  let fixture: ComponentFixture<HistoryBookRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBookRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBookRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
