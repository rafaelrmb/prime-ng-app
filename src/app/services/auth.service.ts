import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async login(username: string, password: string) {
    await new Promise(resolve => setTimeout(resolve, 3000));

    if (username === 'user' && password === 'password') {
      return { success: true, message: 'Login successful!' };
    } else {
      return { success: false, message: 'Invalid username or password.' };
    }
  }
}
