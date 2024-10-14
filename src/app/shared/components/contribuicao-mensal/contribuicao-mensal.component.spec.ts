import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuicaoMensalComponent } from './contribuicao-mensal.component';

describe('ContribuicaoMensalComponent', () => {
  let component: ContribuicaoMensalComponent;
  let fixture: ComponentFixture<ContribuicaoMensalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContribuicaoMensalComponent]
    });
    fixture = TestBed.createComponent(ContribuicaoMensalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
