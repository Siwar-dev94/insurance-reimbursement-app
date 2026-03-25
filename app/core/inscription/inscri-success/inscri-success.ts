import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';

@Component({
  selector: 'app-inscri-success',
  standalone:true,
  imports: [ DxButtonModule,RouterModule],
  templateUrl: './inscri-success.html',
  styleUrl: './inscri-success.css'
})
export class InscriSuccess {

  constructor(private router:Router){}

   goHome() {
    this.router.navigate(['/']);
  }
}
