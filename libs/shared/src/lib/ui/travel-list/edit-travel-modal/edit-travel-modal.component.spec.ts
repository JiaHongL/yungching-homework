import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTravelModalComponent } from './edit-travel-modal.component';

describe('EditTravelModalComponent', () => {
  let component: EditTravelModalComponent;
  let fixture: ComponentFixture<EditTravelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTravelModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTravelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
