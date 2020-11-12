import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaRegistraComponent } from './vacuna-registra.component';

describe('VacunaRegistraComponent', () => {
  let component: VacunaRegistraComponent;
  let fixture: ComponentFixture<VacunaRegistraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunaRegistraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunaRegistraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
