import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-sucess',
  standalone:true,
  imports: [DxButtonModule,CommonModule],
  templateUrl: './contact-sucess.html',
  styleUrl: './contact-sucess.css'
})
export class ContactSucess {
  constructor(private router:Router){}

 
goHome() {
  this.router.navigate(['/']);
}

}
