import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtepComponent } from './vtep.component';

describe('VtepComponent', () => {
  let component: VtepComponent;
  let fixture: ComponentFixture<VtepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VtepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
