import { Component } from '@angular/core';
import { DxButtonModule,DxTextBoxModule,DxFormModule,DxSelectBoxModule, DxCheckBoxModule} from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parametres',
  standalone:true,
  imports: [ CommonModule,
    DxFormModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxTextBoxModule],
  templateUrl: './parametres.html',
  styleUrl: './parametres.css'
})
export class Parametres {

historiqueConnexions: string[] = [];



telephone: string = '';
  codeEnvoye: string = '';
  codeSaisi: string = '';
  nouveauMotDePasse: string = '';
  confirmMotDePasse: string = '';
  etape: 'verif' | 'code' | 'change' = 'verif';

  timer: number = 60;
  timerInterval: any;
  canResend: boolean = false;

  parametres = {
    notificationsEmail: true,
    notificationsSMS: false,
    langue: 'Français'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const historique = localStorage.getItem('historiqueConnexions') || '';
     this.historiqueConnexions = historique ? historique.split(',') : [];

  }

  resetHistorique() {
  localStorage.removeItem('historiqueConnexions');
  this.historiqueConnexions = [];
}


  logout() {
    this.router.navigate(['/login']);
  }

  envoyerCode() {
    if (this.telephone === '94939462') { 
      this.codeEnvoye = this.generateCode();
      alert('Code envoyé (simulation) : ' + this.codeEnvoye);
      this.etape = 'code';
      this.startTimer();
    } else {
      alert('Numéro incorrect');
    }
  }

  startTimer() {
    this.timer = 60;
    this.canResend = false;

    this.timerInterval = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        clearInterval(this.timerInterval);
        this.canResend = true;
      }
    }, 1000);
  }

  resendCode() {
    this.envoyerCode();
  }

  generateCode(): string {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  verifierCode() {
    if (this.codeSaisi === this.codeEnvoye) {
      this.etape = 'change';
      clearInterval(this.timerInterval);
    } else {
      alert('Code incorrect');
    }
  }

  changerMotDePasse() {
    if (this.nouveauMotDePasse !== this.confirmMotDePasse) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

   
    localStorage.setItem('clientPassword', this.nouveauMotDePasse);

    alert('Mot de passe modifié avec succès');
    this.etape = 'verif';
    this.resetForm();
  }

  resetForm() {
    this.telephone = '';
    this.codeSaisi = '';
    this.nouveauMotDePasse = '';
    this.confirmMotDePasse = '';
    this.timer = 60;
    this.canResend = false;
    clearInterval(this.timerInterval);
  }

 


}

