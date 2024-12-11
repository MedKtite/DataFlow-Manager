import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  emailError: string = '';
  loginError: string = '';
  loading: boolean = false;

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  handleSubmit() {
    if (this.loginForm.invalid) {
      if (this.email?.invalid) {
        this.emailError = 'Please enter a valid email address.';
      }
      if (this.password?.invalid) {
        this.loginError = 'Password cannot be empty.';
      }
      return;
    }

    this.emailError = '';
    this.loginError = '';
    this.loading = true;

    this.authService.login(this.email?.value, this.password?.value).then(result => {
      if (result?.error) {
        this.loginError = result.error;
      } else {
        this.router.navigate(['/dashboard']);
      }
      this.loading = false;
    });
  }
}