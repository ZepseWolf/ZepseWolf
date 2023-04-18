import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapnypComponent } from './snapnyp.component';

describe('SnapnypComponent', () => {
  let component: SnapnypComponent;
  let fixture: ComponentFixture<SnapnypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapnypComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapnypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
