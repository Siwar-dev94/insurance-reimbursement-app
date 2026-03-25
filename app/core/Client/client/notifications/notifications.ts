import { Component } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone:true,
  imports: [CommonModule,DxButtonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

   notifications = [
    {
      type: 'alerte',
      titre: 'Remboursement en attente',
      message: 'Votre demande n°1287 est en cours de traitement.',
      date: '02 août 2025',
    },
    {
      type: 'offre',
      titre: 'Nouvelle offre Santé+',
      message: 'Découvrez notre nouveau plan avec 10% de réduction.',
      date: '01 août 2025',
    },
    {
      type: 'rappel',
      titre: 'Contrat à renouveler',
      message: 'Votre contrat expire dans 15 jours.',
      date: '28 juillet 2025',
    },
  ];

  supprimer(index: number) {
    this.notifications.splice(index, 1);
  }

  toutEffacer() {
    this.notifications = [];
  }
}
