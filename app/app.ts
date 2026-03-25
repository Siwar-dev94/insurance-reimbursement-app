import { Component } from '@angular/core';
import { RouterOutlet , NavigationEnd, Routes, Router } from '@angular/router';
import { Login } from './core/login/login'; 
import { routes} from './app.routes';
import { filter } from 'rxjs';
import { DxTreeViewModule,DxFormModule,DxButtonModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,  DxTreeViewModule,CommonModule,DxFormModule,DxButtonModule],
  templateUrl: './app.html',
  styleUrl:'./app.css'
})
export class App {
    
   admin = {
    name: 'Siwar Harzli',
    fonction: 'Employee',
    telephone: '12345678',
    adresse: 'Tunis, Tunisie',
   photo: 'assets/hello.jpg'
  };
 
  showTree = false;
  treeItems: any[] = [];
  isAdminPage = false;
  showAdminCard = false;
  editMode = false;



  constructor(private router: Router) {
     // Charger depuis localStorage si disponible
    const savedAdmin = localStorage.getItem('adminData');
    if (savedAdmin) {
      this.admin = JSON.parse(savedAdmin);

      // appliquer la photo sauvegardée sur les <img>
      setTimeout(() => {
        const photoBar = document.getElementById('admin-photo-bar') as HTMLImageElement;
        const photoCard = document.getElementById('admin-photo-card') as HTMLImageElement;
        if (photoBar) photoBar.src = this.admin.photo;
        if (photoCard) photoCard.src = this.admin.photo;
      }, 0);
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAdminPage = this.router.url.startsWith('/admin');
      }
    });

    this.treeItems = [];
    routes.forEach(route => {
      if (route.path === 'admin' && route.children) {
        route.children.forEach(child => {
          if (child.data) {
            this.treeItems.push({
              text: child.data['text'],
              icon: child.data['icon'],
              path: '/admin/' + child.path
            });
          }
        });
      }
    });

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.showTree = event.url.startsWith('/admin');
    });
  }

 
    toggleAdminCard() {
    this.showAdminCard = !this.showAdminCard;
  }

OnItemClick(e: any) {
    if (e.itemData.path) {
      this.router.navigate([e.itemData.path]);
    }
  }
onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const newPhoto = e.target.result;
        this.admin.photo = newPhoto;

        // mettre à jour directement les <img>
        const photoBar = document.getElementById('admin-photo-bar') as HTMLImageElement;
        const photoCard = document.getElementById('admin-photo-card') as HTMLImageElement;
        if (photoBar) photoBar.src = newPhoto;
        if (photoCard) photoCard.src = newPhoto;
      };
      reader.readAsDataURL(file);
    }
  }

  saveAdminInfo() {
  this.editMode = false;
  console.log('Nouvelles infos admin:', this.admin);

}

closeAdminCard() {
  this.showAdminCard = false;
  this.editMode = false;
}

}

