import { Routes } from '@angular/router';
import { Login } from './core/login/login';
import { AdminComponent } from './core/admin copy/admin';
import { DashboardComponent } from './core/admin copy/dashboard/dashboard';
import { GestionAssureesComponent } from './core/admin copy/gestion-assurees/gestion-assurees';
import { GestionRemboursementComponent } from './core/admin copy/gestion-remboursement/gestion-remboursement';
import { Client } from './core/Client/client/client';
import { Inscription } from './core/inscription/inscription';
import { ContactezNous } from './core/contactez-nous/contactez-nous';
import { ContactSucess } from './core/contactez-nous/contact-sucess/contact-sucess';
import { InscriSuccess } from './core/inscription/inscri-success/inscri-success';
import { Profil } from './core/Client/client/profil/profil';
import { ProfilEdit } from './core/Client/client/profil/profil-edit/profil-edit';
import { RemboursementsComponent } from './core/Client/client/remboursements/remboursements';
import { Ajout } from './core/Client/client/ajout/ajout';
import { Messagerie } from './core/Client/client/messagerie/messagerie';
import { Parametres } from './core/Client/client/parametres/parametres';
import { Notifications } from './core/Client/client/notifications/notifications';
import { MessagerieAdmin } from './core/admin copy/messagerie-admin/messagerie-admin';


export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { 
    path: 'login', 
    loadComponent: () => import('./core/login/login').then(m => m.Login) 
  },
  { 
    path: 'admin', 
    loadComponent: () => import('./core/admin copy/admin').then(m => m.AdminComponent),
    children: [
      { 
        path: 'dashboard', 
        loadComponent: () => import('./core/admin copy/dashboard/dashboard').then(m => m.DashboardComponent),
        data: { text: 'dashboard', icon: 'chart' }
      },
      { 
        path: 'gestionAssurees', 
        loadComponent: () => import('./core/admin copy/gestion-assurees/gestion-assurees').then(m => m.GestionAssureesComponent),
        data: { text: 'gestion des Assurees', icon: 'user' }
      },
    {
      path:'GestionRemboursements', loadComponent:() => import('./core/admin copy/gestion-remboursement/gestion-remboursement').then(m =>m.GestionRemboursementComponent),
      data:{text:'gestion des Remboursements' , icon:'user'}
    } ,
    {
      path:'messagerieAdmin' ,loadComponent:() => import('./core/admin copy/messagerie-admin/messagerie-admin').then(m => m.MessagerieAdmin),
      data: { text: 'Messagerie', icon: 'message' }
    }],
    
  },

  
  {path:'client' ,
   component: Client, 
    children: [  { path: '', redirectTo: 'remboursements', pathMatch: 'full' }, // ✅ Remboursements par défaut
      { path: 'remboursements', component: RemboursementsComponent },
      { path: 'ajout-demande', component: Ajout },
      { path: 'profil', component: Profil },
      { path: 'edit', component: ProfilEdit } ,
      {path:'messagerie' , component:Messagerie},
      {path:'parametres' , component:Parametres},
      {path:'notifications', component:Notifications}]           },
  
  {path:'client-profil' , loadComponent:() => import('./core/Client/client/profil/profil').then(m=>m.Profil)},
  {path:'edit' , loadComponent:() => import('./core/Client/client/profil/profil-edit/profil-edit').then(m =>m.ProfilEdit)},
  {path:'inscription' , loadComponent:() => import('./core/inscription/inscription').then(m =>m.Inscription )},
  {path:'inscription-success' , loadComponent:() => import('./core/inscription/inscri-success/inscri-success').then(m => m.InscriSuccess)},
  {path :'contactez-nous' , loadComponent:() => import('./core/contactez-nous/contactez-nous').then(m =>m.ContactezNous)},
  { path:'sucess', loadComponent:() => import('./core/contactez-nous/contact-sucess/contact-sucess').then(m => m.ContactSucess)},
    ];



    
    

