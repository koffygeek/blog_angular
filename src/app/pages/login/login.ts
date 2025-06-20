import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.username, this.password).subscribe({
        next: (res) => {
          this.authService.saveToken(res.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          // Handle login error, e.g., show an error message
          console.error('Login failed: ', err);
          alert('Login failed ' + err.error?.message || 'Check credentials');
        },
      });
    }
  }
}
