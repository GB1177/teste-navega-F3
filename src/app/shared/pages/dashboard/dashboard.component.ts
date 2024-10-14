import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { mockDashboard } from '../../mocks/dashboard-mocks';
import { actionOptions } from '../../interfaces/action-option.interface';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from "../../components/header/header.component";
import { ActionListComponent } from '../../components/action-list/action-list.component';
import { DashboardChartComponent } from "../../components/dashboard-chart/dashboard-chart.component";
import { ContribuicaoMensalComponent } from '../../components/contribuicao-mensal/contribuicao-mensal.component';
import { ContribuicaoVoluntariaComponent } from '../../components/contribuicao-voluntaria/contribuicao-voluntaria.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ChartModule,
    FormsModule,
    CardModule,
    NavbarComponent,
    HeaderComponent,
    ActionListComponent,
    DashboardChartComponent,
    ContribuicaoMensalComponent,
    ContribuicaoVoluntariaComponent,
    ButtonModule
  ],
})
export class DashboardComponent implements OnInit {
  listedOptions = actionOptions;
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

  // Função chamada quando uma ação é selecionada
  onActionSelect(action: string) {
    console.log(`Ação selecionada: ${action}`);
    // Aqui você pode adicionar lógica para o que deve acontecer ao clicar na ação
  }
}
