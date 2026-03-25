import { Component } from '@angular/core';
import { DxButtonModule,DxFileUploaderModule,DxNumberBoxModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RemboursementsService } from '../../../../remboursements-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  standalone:true,
  imports: [DxButtonModule,DxFileUploaderModule,CommonModule,FormsModule,DxNumberBoxModule  ],
  templateUrl: './ajout.html',
  styleUrl: './ajout.css'
})
export class Ajout {

   montant = 0;
  documents = '';
  fileUploaderValue: any[] = [];

  constructor(private service: RemboursementsService, private router: Router) {}

  envoyer() {
    this.service.add({
      userName: 'Siwar',
      date: new Date(),
      montant: this.montant,
      statut: 'En attente',
      documents: this.documents
    });
     this.montant = 0;
    this.documents = '';
    this.fileUploaderValue = [];

    this.router.navigate(['remboursements']);
  }

  ;

onFileSelected(e: any) {
  const file = e.value[0];
  if (file) {
    this.documents = file.name;
  }
}

}




