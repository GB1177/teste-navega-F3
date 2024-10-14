import { Injectable } from '@angular/core';
import { mockUsers } from '../mocks/user-mocks';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = mockUsers;

  login(emailCpf: string, password: string) {
    const user = this.users.find(
      (u) => u.emailCpf === emailCpf && u.password === password
    );

    if (user) {

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ emailCpf, password })
      );
      return true;
    }

    return false;
  }

  validateCPF(cpf: string): boolean {
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfPattern.test(cpf);
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }

  formatCpf(cpf: string): string {
    const numbers = cpf.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
