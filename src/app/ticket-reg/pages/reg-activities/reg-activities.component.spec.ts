import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegActivitiesComponent } from './reg-activities.component';

describe('RegActivitiesComponent', () => {
  let component: RegActivitiesComponent;
  let fixture: ComponentFixture<RegActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
