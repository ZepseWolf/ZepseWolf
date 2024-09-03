import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirstrikeComponent } from './airstrike.component';

describe('AirstrikeComponent', () => {
  let component: AirstrikeComponent;
  let fixture: ComponentFixture<AirstrikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirstrikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirstrikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
