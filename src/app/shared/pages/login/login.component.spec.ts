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
      imports: [FormsModule],
      declarations: [LoginComponent],
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
