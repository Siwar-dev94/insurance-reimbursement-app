import { Component, OnInit } from '@angular/core';
import { AssureService } from '../../assure-service';
import { Router,RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { DxFormModule,DxTextBoxModule, DxSelectBoxModule, DxDateBoxModule,  DxButtonModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  standalone:true,
  imports: [ CommonModule,
    FormsModule,
    RouterModule,
    DxFormModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxDateBoxModule,
    DxButtonModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css'
})
export class Inscription {
     colCount: number = 2;

     ngOnInit() {
  this.updateColCount();

  // Optionnel : écoute le redimensionnement de la fenêtre
  window.addEventListener('resize', () => {
    this.updateColCount();
  });
}

updateColCount() {
  this.colCount = window.innerWidth < 768 ? 1 : 2;
}



    formData: any = {
    civilite: '',
    nationalite: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    email: '',
    telephone: '',
    pieceIdentite: ''
  };
 constructor(private assureService:AssureService , private router:Router){}

 submit() {
    if (
      this.formData.nom &&
      this.formData.prenom &&
      this.formData.dateNaissance &&
      this.formData.email &&
      this.formData.telephone &&
      this.formData.pieceIdentite &&
      this.formData.nationalite &&
      this.formData.civilite
    ) {
      const lastId = this.assureService.getAll().reduce((max, a) => a.id > max ? a.id : max, 0);
      this.assureService.add({
        id: lastId + 1,
        nom: this.formData.nom,
        prenom: this.formData.prenom,
        dateNaissance: this.formData.dateNaissance,
        email: this.formData.email,
        documents: ''
      });
     this.router.navigate(['/inscription-success']);

    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  goBack() {
  this.router.navigate(['/login']); 

}
}
