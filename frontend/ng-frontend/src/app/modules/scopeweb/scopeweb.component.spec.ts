import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopewebComponent } from './scopeweb.component';

describe('ScopewebComponent', () => {
  let component: ScopewebComponent;
  let fixture: ComponentFixture<ScopewebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopewebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopewebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
