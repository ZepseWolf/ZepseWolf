import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPopoutComponent } from './error-popout.component';

describe('PopoutComponent', () => {
  let component: ErrorPopoutComponent;
  let fixture: ComponentFixture<ErrorPopoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPopoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
