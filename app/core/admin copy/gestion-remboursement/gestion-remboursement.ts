import { Component } from '@angular/core';
import { DxDataGridModule,DxPopupModule, DxFormModule ,   DxSpeedDialActionModule ,DxButtonModule, DxDateBoxModule,DxNumberBoxModule,DxSelectBoxModule, DxFileUploaderModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

import { RemboursementsService,Remboursement } from '../../../remboursements-service';
@Component({
  selector: 'app-gestion-remboursement',
  standalone :true,
  imports: [ CommonModule,
    DxDataGridModule,
    DxPopupModule,
    DxFormModule,
    DxButtonModule,
    DxDateBoxModule,
    DxNumberBoxModule,
    DxSelectBoxModule,  DxSpeedDialActionModule,DxFileUploaderModule],
  templateUrl: './gestion-remboursement.html',
  styleUrl: './gestion-remboursement.css'
})
export class GestionRemboursementComponent {
    
  remboursements: Remboursement[] = [];
  statutOptions = ['En attente', 'Accepté', 'Refusé'];

  Ajout = false;
  modifierPopupVisible = false;

  newRemboursement = {
    userName: '',
    date: new Date(),
    montant: 0,
    statut: 'En attente',
    documents: ''
  };

 remboursementEnCours: Remboursement | null = null;

   constructor(private remboursementService: RemboursementsService) {}

  ngOnInit(): void {
    this.remboursements = this.remboursementService.getAll();
  }

  ajouterRemboursement() {
    this.remboursementService.add(this.newRemboursement);
    this.newRemboursement = {
      userName: '',
      date: new Date(),
      montant: 0,
      statut: '',
      documents:''
    };
    this.Ajout = false;
  }

  onFilesSelected(e: any) {
  const file = e.value[0];
  if (file) {
    this.newRemboursement.documents = file.name;
  }
}

 editRemboursement = (e: any) => {
    this.remboursementEnCours = { ...e.row.data };
    this.modifierPopupVisible = true;
  };

  onFichierModifie(e: any) {
    const file = e.value[0];
    if (file && this.remboursementEnCours) {
      this.remboursementEnCours.documents = file.name;
    }
  }

  validerModification() {
    if (!this.remboursementEnCours) return;

    const index = this.remboursements.findIndex(r => r.id === this.remboursementEnCours!.id);
    if (index !== -1) {
      this.remboursements[index] = { ...this.remboursementEnCours };
    }

    this.remboursementEnCours = null;
    this.modifierPopupVisible = false;
  }
}



   

