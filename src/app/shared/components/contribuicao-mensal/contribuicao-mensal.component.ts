import { BrCurrencyPipe } from './../../pipes/br-currency.pipe';
import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-contribuicao-mensal',
  templateUrl: './contribuicao-mensal.component.html',
  styleUrls: ['./contribuicao-mensal.component.less'],
  standalone: true,
  imports: [CommonModule, CardModule, BrCurrencyPipe],
})
export class ContribuicaoMensalComponent {
  @Input() contributionMensal!: number;
  @Input() porcentagemSalarioMensal!: number;
}
