import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-esqueci-a-senha',
  templateUrl: './esqueci-a-senha.component.html',
  styleUrls: ['./esqueci-a-senha.component.less'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
})
export class EsqueciASenhaComponent {}
