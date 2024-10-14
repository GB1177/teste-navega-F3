import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuicaoVoluntariaComponent } from './contribuicao-voluntaria.component';

describe('ContribuicaoVoluntariaComponent', () => {
  let component: ContribuicaoVoluntariaComponent;
  let fixture: ComponentFixture<ContribuicaoVoluntariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContribuicaoVoluntariaComponent]
    });
    fixture = TestBed.createComponent(ContribuicaoVoluntariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
