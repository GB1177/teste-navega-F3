import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { mockUsers } from '../../../shared/mocks/user-mocks';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: any;

  class MockAuthService {
    login(emailCpf: string, password: string) {
      return true; // Retorna verdadeiro para simular um login bem-sucedido
    }
  }

  beforeEach(() => {
    mockRouter = {
      navigate: jest.fn(),
    };

    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => null,
        },
      },
    };

    TestBed.configureTestingModule({
      imports: [FormsModule, LoginComponent], // Adicionando LoginComponent aqui
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: AuthService, useClass: MockAuthService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit and navigate on valid login', () => {
    component.loginData.emailCpf = mockUsers[0].emailCpf;
    component.loginData.password = mockUsers[0].password;

    component.onSubmit();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should not navigate on invalid login', () => {
    component.loginData.emailCpf = 'invalid@user.com';
    component.loginData.password = 'wrongpassword';

    component.onSubmit();

    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });
});
