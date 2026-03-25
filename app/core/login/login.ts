import { Component,ChangeDetectorRef } from '@angular/core';
import {  Router } from '@angular/router';
import { DxFormModule,DxTextBoxModule, DxButtonModule,DxValidatorModule } from 'devextreme-angular';
import { User } from '../../user';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [  DxFormModule,DxTextBoxModule, DxButtonModule,DxValidatorModule] ,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  
 protected title = 'LOGIN';
 passwordOptions: any;
  constructor(private router:Router, private cdr: ChangeDetectorRef, private userService:User ){
  this.passwordOptions = this.getPasswordEditorOptions();
  }
   user = {
        email: '' ,
        motDePasse : ''
};

 showPassword: boolean = false;

  passwordCriteria = {
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
    
  };

  
  onPasswordInput(e: any) {
    const value = e.value || '';
    this.passwordCriteria.length = value.length >= 8;
    this.passwordCriteria.uppercase = /[A-Z]/.test(value);
    this.passwordCriteria.lowercase = /[a-z]/.test(value);
    this.passwordCriteria.number = /\d/.test(value);
    this.passwordCriteria.special = /[!@#\$%\^\&*\)\(+=._-]/.test(value);
    
    
  

  }

  validatePassword() {
    const c = this.passwordCriteria;
    console.log(c)

    const isValid = c.length && c.uppercase && c.lowercase && c.number && c.special;
console.log(isValid);
    return isValid || "Le mot de passe ne respecte pas les critères.";
  }

  public login(){
      const clientPassword = localStorage.getItem('clientPassword') || 'SiwarSS94?';

   if (!this.validatePassword()) {
    alert("Le mot de passe ne respecte pas les critères.");
    return;
  }
 
  
  if (this.user.email && this.user.motDePasse === 'Admin12345?') {
    this.router.navigate(['admin']);
  }
  else if( this.user.email === 'harzlisiwar7@gmail.com' && this.user.motDePasse === clientPassword ){
    this.router.navigate(['admin/dashboard']);

    const now = new Date().toLocaleString(); // par exemple : "02/08/2025, 12:15:30"
    const historique = localStorage.getItem('historiqueConnexions') || '';
    const nouveauHistorique = historique ? historique + ',' + now : now;
     localStorage.setItem('historiqueConnexions', nouveauHistorique);

  }
   else {
    alert("Email ou mot de passe incorrect");
  }
}

 

   getPasswordEditorOptions() {
    return {
      mode: this.showPassword ? 'text' : 'password',
      buttons: [{
        name: 'passwordEye',
        location: 'after',
        options: {
          icon: this.showPassword ? 'eyeopen' : 'eyeclose',
          onClick: () => {
            this.showPassword = !this.showPassword;
            this.passwordOptions = this.getPasswordEditorOptions();
            this.cdr.detectChanges();
          }
        }
      }],
      onInput: (e: any) => this.onPasswordInput(e)
    }  
  }
  ngOnInit() {
  document.body.classList.add('login-background');
}

ngOnDestroy() {
  document.body.classList.remove('login-background');
}

goToSignup() {
  this.router.navigate(['/inscription']);
}

contactSupport() {
   this.router.navigate(['/contactez-nous'], { queryParams: { from: 'login' } });
}



}
  


