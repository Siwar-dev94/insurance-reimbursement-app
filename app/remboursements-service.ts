import { Injectable } from '@angular/core';


export interface Remboursement{
id: number;
  userName: string;
  date: Date;
  montant: number;
  statut: string;
  documents: string
}



@Injectable({
  providedIn: 'root'
})
export class RemboursementsService {

  constructor() { }

  remboursements =   [ { id: 1, userName: 'Ahmed', date: new Date(2025, 7, 1), montant: 200, statut: 'En attente', documents: 'doc1.jpg',
    },
     {id: 2, userName: 'Lina', date: new Date(2025, 2, 12), montant: 350, statut: 'Accepté', documents: '' },
    { id: 3, userName: 'Siwar', date: new Date(2025, 6, 5), montant: 400, statut: 'Refusé', documents: '' }];
    
  getAll(): Remboursement[] {
    return this.remboursements;
  }

 add(remboursement: any) {
  const newId = this.remboursements.length + 1;
  remboursement.id = newId;
  this.remboursements.push(remboursement);
}

}

