import { Component,OnInit } from '@angular/core';
import { Router,RouterModule,ActivatedRoute} from '@angular/router';
import { DxFormModule,DxSelectBoxModule,
  DxTextBoxModule,
  DxButtonModule,
  DxCheckBoxModule,
  DxTextAreaModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contactez-nous',
  imports: [DxFormModule, DxSelectBoxModule,
  DxTextBoxModule,
  DxButtonModule,
  DxCheckBoxModule,
  DxTextAreaModule,RouterModule,CommonModule],
  standalone:true,
  templateUrl: './contactez-nous.html',
  styleUrl: './contactez-nous.css'
})
export class ContactezNous implements OnInit {
   
    contactForm = {
    civilite: '',
    nom: '',
    prenom: '',
    mobile: '',
    email: '',
    besoin: '',
    cin: '',
    message: ''
  };

   
  isAccepted = false;
  fromLogin = false;
returnTo: string | null = null;


  civiliteOptions = ['Mr', 'Mlle', 'Mme'];
  besoinOptions = [
    'Recevoir un nouveau mot de passe',
    'Problème de mot de passe',
    'Problème d’accès à mon espace',
    'Oubli des paramètres d’accès'
  ];


  constructor(private router:Router, private route: ActivatedRoute){}

 

   ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // ?from=login pour afficher "Annuler"
      this.fromLogin = params['from'] === 'login';

      // ?returnTo=/client/xxx (Angular décode tout seul le %2F)
      this.returnTo = params['returnTo'] ?? null;
      // DEBUG (optionnel) : console.log('fromLogin=', this.fromLogin, 'returnTo=', this.returnTo);
    });
  }

  goBack(): void {
    if (this.returnTo) {
      this.router.navigateByUrl(this.returnTo); // ex: /client/remboursements
    } else {
      this.router.navigate(['/client']);       // fallback si jamais absent
    }
  }

  cancel(): void {
    this.router.navigate(['/login']);
  }


  

  resetForm() {
    this.contactForm = {
      civilite: '',
      nom: '',
      prenom: '',
      mobile: '',
      email: '',
      besoin: '',
      cin: '',
      message: ''
    };
    this.isAccepted = false;
  }

  submitForm() {
    if (this.isAccepted) {
     
      this.router.navigate(['/sucess']);
    } else {
      alert("Veuillez accepter les conditions.");
    }
  }
}
