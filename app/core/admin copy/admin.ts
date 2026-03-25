import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DxToolbarModule,DxDrawerModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone:true,
  imports: [RouterModule,  CommonModule,DxToolbarModule,DxDrawerModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent {
  

}


