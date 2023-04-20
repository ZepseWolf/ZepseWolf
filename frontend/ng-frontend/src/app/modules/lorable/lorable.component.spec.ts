import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorableComponent } from './lorable.component';

describe('LorableComponent', () => {
  let component: LorableComponent;
  let fixture: ComponentFixture<LorableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LorableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LorableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
