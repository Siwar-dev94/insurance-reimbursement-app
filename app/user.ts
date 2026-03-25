import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

  constructor() { }
   private currentPassword = 'SiwarSS94?';
  private currentEmail = 'harzlisiwar7@gmail.com';
  private currentTelephone = '94939462';

  private verificationCode: string = '';

  getEmail() { return this.currentEmail; }
  getPassword() { return this.currentPassword; }
  getTelephone() { return this.currentTelephone; }

  updatePassword(newPassword: string) {
    this.currentPassword = newPassword;
  }

  generateVerificationCode(): string {
    this.verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    return this.verificationCode;
  }

  verifyCode(code: string): boolean {
    return this.verificationCode === code;
  }
}


