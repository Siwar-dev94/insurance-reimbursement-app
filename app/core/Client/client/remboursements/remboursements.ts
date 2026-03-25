import { Component,OnInit } from '@angular/core';
import { RemboursementsService,Remboursement } from '../../../../remboursements-service';
import { DxDataGridModule,DxButtonModule} from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remboursements',
  imports:[CommonModule, DxDataGridModule,DxButtonModule] ,
  templateUrl: './remboursements.html',
  styleUrl: './remboursements.css'
})
export class RemboursementsComponent {
   remboursements: Remboursement[] = [];
   constructor(private service: RemboursementsService, private router: Router) {
    const user = 'Siwar'; 
    this.remboursements = this.service.getAll().filter(r => r.userName === user);
  }

  totalMontant(): number {
  return this.remboursements
    .filter(r => r.statut === 'Accepté')
    .reduce((total, r) => total + r.montant, 0);
}
  ajouter():void{
    this.router.navigate(['/client/ajout-demande']);
  }

}