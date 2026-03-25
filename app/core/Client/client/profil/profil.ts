import { Component,Input,Output,EventEmitter } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { ClientService } from '../../../../client-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profil',
  standalone:true,
  imports: [DxButtonModule],
  templateUrl: './profil.html',
  styleUrl: './profil.css'
})
export class Profil {
 constructor(
    private router: Router,
    public clientService: ClientService // <-- inject service
  ) {}

  get client() {
    return this.clientService.getClient();
  }

  requestEdit() {
    this.router.navigate(['/edit']);
  }
}

