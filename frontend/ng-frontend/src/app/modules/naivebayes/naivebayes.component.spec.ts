import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaivebayesComponent } from './naivebayes.component';

describe('NaivebayesComponent', () => {
  let component: NaivebayesComponent;
  let fixture: ComponentFixture<NaivebayesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaivebayesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaivebayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
