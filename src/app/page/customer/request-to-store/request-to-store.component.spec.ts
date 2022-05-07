import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestToStoreComponent } from './request-to-store.component';

describe('RequestToStoreComponent', () => {
  let component: RequestToStoreComponent;
  let fixture: ComponentFixture<RequestToStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestToStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestToStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
