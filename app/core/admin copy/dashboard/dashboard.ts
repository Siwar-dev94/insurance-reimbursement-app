import { Component } from '@angular/core';
import { AssureService } from '../../../assure-service';
import { RemboursementsService,Remboursement } from '../../../remboursements-service';
import { CommonModule } from '@angular/common';
import { DxChartModule,DxPieChartModule} from 'devextreme-angular';


@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [DxChartModule ,CommonModule,DxPieChartModule ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  
  totalAssures = 0;
  totalRemboursements = 0;
  montantTotal = 0;
  statsParStatut: any[] = [];

  remboursementsParMois: any[] = [];
  remboursementsParTrimestre: any[] = [];

  constructor(
    private assureService: AssureService,
    private remboursementService: RemboursementsService
  ) {}

  ngOnInit(): void {
    const assures = this.assureService.getAll();
    const remboursements = this.remboursementService.getAll();

    this.totalAssures = assures.length;
    this.totalRemboursements = remboursements.length;
    
    let total = 0;
   for (let r of remboursements) {
  total += r.montant;  // On ajoute le montant de chaque remboursement à total
}
this.montantTotal = total;


    this.remboursementsParMois = this.groupByMonth(remboursements);
    this.remboursementsParTrimestre = this.groupByTrimester(remboursements);

    this.calculerStatuts(remboursements);
  }

 groupByMonth(data: Remboursement[]): any[] {
  // Créer un objet vide pour stocker les totaux par mois
  let resultat: any = {};

  // Parcourir chaque remboursement
  for (let remboursement of data) {
    // Extraire le mois en français, ex: "janvier"
    let nomMois = remboursement.date.toLocaleString('fr-FR', { month: 'long' });

    // Si ce mois n'existe pas encore dans le résultat, on l'initialise à 0
    if (!resultat[nomMois]) {
      resultat[nomMois] = 0;
    }

    // Ajouter le montant de ce remboursement au total du mois
    resultat[nomMois] += remboursement.montant;
  }

  // Transformer le résultat en tableau (pour l'afficher dans un graphique)
  let tableauFinal = [];
  for (let mois in resultat) {
    tableauFinal.push({ mois: mois, montant: resultat[mois] });
  }

  return tableauFinal;
}


 groupByTrimester(data: Remboursement[]): any[] {
 
  let resultat: any = {};

  for (let remboursement of data) {
    
    let mois = remboursement.date.getMonth();

    let numeroTrimestre = Math.floor(mois / 3) + 1;

    let nomTrimestre = "T" + numeroTrimestre;

    if (!resultat[nomTrimestre]) {
      resultat[nomTrimestre] = 0;
    }

    
    resultat[nomTrimestre] += remboursement.montant;
  }

  
  let tableauFinal = [];
  for (let t in resultat) {
    tableauFinal.push({ trim: t, montant: resultat[t] });
  }

  return tableauFinal;
}

calculerStatuts(remboursements: any[]): void {
  
  const compteur: any = {};

  for (let i = 0; i < remboursements.length; i++) {
    let statut = remboursements[i].statut;

    
    if (compteur[statut] === undefined) {
      compteur[statut] = 0;
    }


    compteur[statut] = compteur[statut] + 1;
  }

 
  let resultat: any[] = [];
  for (let statut in compteur) {
    resultat.push({ statut: statut, nombre: compteur[statut] });
  }

 
  this.statsParStatut = resultat;
}
}








