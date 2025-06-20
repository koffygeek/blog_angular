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

  logout() {}
  // Implement your logic to log out the user

  login(username: string, password: string) {
    return this.http.post<any>('asdf', {});
  }

  saveToken(token: string) {}
}
