import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent {
  registerForm: FormGroup;
  emailError: string = '';
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      isCheckedAgreement: [false, Validators.requiredTrue]
    }); 
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get isCheckedAgreement() {
    return this.registerForm.get('isCheckedAgreement');
  }

  async handleSubmit() {
    if (this.registerForm.invalid) {
      if (this.email?.invalid) {
        this.emailError = 'Please enter a valid email address.';
      } else if (!this.isCheckedAgreement?.value) {
        this.emailError = 'Please accept the Terms of Use and Privacy Policy.';
      }
      return;
    }

    this.emailError = '';
    this.isSubmitting = true;

    const { email, password, firstName, lastName } = this.registerForm.value;

    try {
      await this.authService.register(email, password, firstName, lastName);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Registration error:', error);
      this.emailError = 'Registration failed. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}