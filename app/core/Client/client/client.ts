import { Component , OnInit } from '@angular/core';
import { Router,RouterModule,ActivatedRoute, NavigationEnd } from '@angular/router';
import { CommonModule} from '@angular/common';
import { DxTreeViewModule,DxButtonModule,DxToolbarModule,DxResponsiveBoxModule } from 'devextreme-angular';
import { Profil } from './profil/profil';
import { filter } from 'rxjs';
import { ClientService } from '../../../client-service';

@Component({
  selector: 'app-client',
  standalone:true,
  imports: [  CommonModule,
    RouterModule,
    DxTreeViewModule,
    DxButtonModule,
    DxResponsiveBoxModule,
    DxToolbarModule,
    Profil],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client  {
 
  
    activePath: string = '';
  showProfilCard = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public clientService: ClientService
  ) {}

  get client() {
    return this.clientService.getClient();
  }

  goToProfil() {
    this.showProfilCard = !this.showProfilCard;
  }

  edit() {
    this.router.navigate(['/edit']);
  }

  ngOnInit() {
    this.setActivePathFromRoute();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActivePathFromRoute();
      });
  }

  setActivePathFromRoute() {
    this.activePath = this.route.snapshot.firstChild?.routeConfig?.path || '';
  }

  goContact() {
    const currentPath = this.router.url;
    this.router.navigate(['/contactez-nous'], { queryParams: { returnTo: currentPath } });
  }

  navigate(path: string | undefined) {
    if (path) {
      this.activePath = path;
      this.router.navigate(['/client', path]);
    }
  }

  treeItems = [
    { text: 'Remboursements', path: 'remboursements' },
    { text: 'Nouvelle Demande', path: 'ajout-demande' },
    { text: 'Messagerie', path: 'messagerie' },
    { text: 'Paramètres', path: 'parametres' },
    { text: 'Notifications', path: 'notifications' }
  ];
}
  








