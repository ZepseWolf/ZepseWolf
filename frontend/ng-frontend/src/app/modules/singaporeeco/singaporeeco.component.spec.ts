import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingaporeecoComponent } from './singaporeeco.component';

describe('SingaporeecoComponent', () => {
  let component: SingaporeecoComponent;
  let fixture: ComponentFixture<SingaporeecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingaporeecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingaporeecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
