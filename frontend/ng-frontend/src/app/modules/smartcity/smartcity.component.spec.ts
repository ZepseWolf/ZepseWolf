import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcityComponent } from './smartcity.component';

describe('SmartcityComponent', () => {
  let component: SmartcityComponent;
  let fixture: ComponentFixture<SmartcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartcityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
