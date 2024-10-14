import { Component } from '@angular/core';
import { actionOptions } from '../../interfaces/action-option.interface';
import { mockDashboard } from '../../mocks/dashboard-mocks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.less'],
  standalone: true,
  imports: [CommonModule],
})
export class ActionListComponent {
  listedOptions = actionOptions; // Carrega as opções de ação
  totalContribuicoes: number = mockDashboard.totalContribuicoes;
  contributionMensal: number = mockDashboard.contribuicaoonMensal;
  contributionVoluntaria: number = mockDashboard.contribuicaonVoluntaria;
  porcentagemSalarioMensal: number = mockDashboard.porcentagemSalarioMensal;

  readonly chartColors = ['#594CBE', '#E22E6F'];
  readonly hoverColors = ['#6257bd', '#de4079'];

  doughnutData: any;

  ngOnInit(): void {
    this.doughnutData = {
      labels: ['Mensal', 'Voluntária'],
      datasets: [
        {
          data: [this.contributionMensal, this.contributionVoluntaria],
          backgroundColor: this.chartColors,
          hoverBackgroundColor: this.hoverColors,
        },
      ],
    };
  }

  getTotalContribuicoes(): number {
    return this.contributionMensal + this.contributionVoluntaria;
  }

  onActionSelect(action: string) {
    console.log(`Ação selecionada: ${action}`);
  }
}
