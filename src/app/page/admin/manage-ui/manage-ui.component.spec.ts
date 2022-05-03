import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUiComponent } from './manage-ui.component';

describe('ManageUiComponent', () => {
  let component: ManageUiComponent;
  let fixture: ComponentFixture<ManageUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
