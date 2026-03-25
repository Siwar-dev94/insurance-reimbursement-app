import { Component, OnInit } from '@angular/core';
import { DxDataGridModule, DxPopupModule, DxFormModule, DxButtonModule, DxSpeedDialActionModule, DxFileUploaderModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { AssureService,Assure } from '../../../assure-service';

@Component({
  selector: 'app-gestion-assurees',
  standalone: true,
  imports: [DxDataGridModule, CommonModule, DxPopupModule, DxFormModule, DxButtonModule, DxSpeedDialActionModule, DxFileUploaderModule
  ],
  templateUrl: './gestion-assurees.html',
  styleUrl: './gestion-assurees.css'
})
export class GestionAssureesComponent implements OnInit {

  assures: Assure[] = [];
  formMode: 'add' | 'edit' = 'add';
  public popupVisible = false;
  currentAssure: Assure = this.initEmptyAssure();

  constructor(private assureService: AssureService) { }

  ngOnInit(): void {
    this.assures = this.assureService.getAll();
  }

  initEmptyAssure(): Assure {
    return { id: 0, nom: '', prenom: '', dateNaissance: '', email: '', documents: '' };
  }

  openForm(mode: 'add' | 'edit', assure?: Assure) {
    this.formMode = mode;
    this.currentAssure = mode === 'edit' && assure ? { ...assure } : this.initEmptyAssure();
    this.popupVisible = true;
  }

  editAssure = (e: any) => {
    const data = e.row.data;
    this.openForm('edit', data);
  };

  saveAssure() {
    if (this.formMode === 'add') {
      this.currentAssure.id = this.assures.length ? Math.max(...this.assures.map(a => a.id)) + 1 : 1;
      this.assureService.add({ ...this.currentAssure });
    } else if (this.formMode === 'edit') {
      this.assureService.update({ ...this.currentAssure });
    }
    this.assures = this.assureService.getAll();
    this.popupVisible = false;
  }

  deleteAssure(e: any) {
    const id = e.row.data.id;
    if (confirm('Voulez-vous vraiment supprimer cet assuré ?')) {
      this.assureService.delete(id);
      this.assures = this.assureService.getAll();
    }
  };

  public removeDocument(): void {
   this.currentAssure.documents = '';
}


 public onFieldChange(e: any) {
    this.currentAssure = { ...this.currentAssure, [e.dataField]: e.value };
  }

 

public onFilesSelected(event: any): void {
 const file = event.value?.[0];
 if (file){
  this.currentAssure.documents = file.name;
 }
  }



}


