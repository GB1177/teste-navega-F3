import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BrCurrencyPipe } from './../../pipes/br-currency.pipe';


@Component({
  selector: 'app-contribuicao-voluntaria',
  templateUrl: './contribuicao-voluntaria.component.html',
  styleUrls: ['./contribuicao-voluntaria.component.less'],
  standalone: true,
  imports: [CommonModule, CardModule, BrCurrencyPipe],
})
export class ContribuicaoVoluntariaComponent {
  @Input() contributionVoluntaria!: number;
}
