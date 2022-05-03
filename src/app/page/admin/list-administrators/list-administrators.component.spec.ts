import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdministratorsComponent } from './list-administrators.component';

describe('ListAdministratorsComponent', () => {
  let component: ListAdministratorsComponent;
  let fixture: ComponentFixture<ListAdministratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdministratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdministratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
