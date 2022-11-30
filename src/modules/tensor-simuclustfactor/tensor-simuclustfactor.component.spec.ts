import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensorSimuclustfactorComponent } from './tensor-simuclustfactor.component';

describe('TensorSimuclustfactorComponent', () => {
  let component: TensorSimuclustfactorComponent;
  let fixture: ComponentFixture<TensorSimuclustfactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TensorSimuclustfactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TensorSimuclustfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
