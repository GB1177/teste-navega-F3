import { Component, OnInit } from '@angular/core';
import { mockDashboard } from '../../mocks/dashboard-mocks';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { BrCurrencyPipe } from '../../pipes/br-currency.pipe';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.less'],
  standalone: true,
  imports: [ChartModule, CommonModule, BrCurrencyPipe],
})
export class DashboardChartComponent implements OnInit {
  totalContribuicoes: number = mockDashboard.totalContribuicoes;
  contributionMensal: number = mockDashboard.contribuicaoonMensal;
  contributionVoluntaria: number = mockDashboard.contribuicaonVoluntaria;

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
          cutout: '70%',
        },
      ],
    };
  }

  getTotalContribuicoes(): number {
    return this.contributionMensal + this.contributionVoluntaria;
  }
}
