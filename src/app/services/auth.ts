import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(username: string, password: string) {
    return this.http.post('asdf', {});
  }

  isAuthenticated(): boolean {
    // Implement your logic to check if the user is authenticated
    return true;
  }

  logout() {
    // Implement your logout logic, e.g., clear the token from local storage
    localStorage.removeItem('token');
  }
}
