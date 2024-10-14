import { NgxMaskDirective } from 'ngx-mask';
import { provideNgxMask } from 'ngx-mask';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
})
export class LoginComponent {
  loginData = {
    emailCpf: '',
    password: '',
  };

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {

    this.formatCpfIfNecessary();

    if (
      this.authService.login(this.loginData.emailCpf, this.loginData.password)
    ) {
      console.log('Login bem-sucedido');
      this.router.navigate(['/dashboard']).then(() => {
      });
    } else {
      console.error('Credenciais inválidas');
    }
  }

  formatCpfIfNecessary() {
    if (this.isCpf(this.loginData.emailCpf)) {
      this.loginData.emailCpf = this.authService.formatCpf(
        this.loginData.emailCpf
      );
    }
  }

  isCpf(value: string): boolean {
    return /^\d{11}$/.test(value.replace(/\D/g, ''));
  }

  passwordVisible = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  isValidInput(): boolean {
    const value = this.loginData.emailCpf;
    return (
      this.authService.validateCPF(value) ||
      this.authService.validateEmail(value)
    );
  }
}
