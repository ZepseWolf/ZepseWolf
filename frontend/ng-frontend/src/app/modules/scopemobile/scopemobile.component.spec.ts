import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopemobileComponent } from './scopemobile.component';

describe('ScopemobileComponent', () => {
  let component: ScopemobileComponent;
  let fixture: ComponentFixture<ScopemobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopemobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopemobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
