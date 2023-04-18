import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativecnnComponent } from './negativecnn.component';

describe('NegativecnnComponent', () => {
  let component: NegativecnnComponent;
  let fixture: ComponentFixture<NegativecnnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativecnnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegativecnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
