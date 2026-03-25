import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormGroup,FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DxFormModule, DxButtonModule, DxFileUploaderModule } from 'devextreme-angular';
import { Router } from '@angular/router';
import { ClientService } from '../../../../../client-service';
@Component({
  selector: 'app-profil-edit',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule, DxFormModule, DxButtonModule, DxFileUploaderModule],
  templateUrl: './profil-edit.html',
  styleUrl: './profil-edit.css'
})
export class ProfilEdit {
  form: FormGroup;
  photoPreview: string | null = null;
  selectedPhoto: File | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private clientService: ClientService
  ) {
    const client = this.clientService.getClient();
    this.form = this.fb.group({
      nom: [client.nom, Validators.required],
      prenom: [client.prenom, Validators.required],
      cin: [client.cin, Validators.required],
      dateNaissance: [client.dateNaissance, Validators.required],
      adresse: [client.adresse, Validators.required],
      telephone: [client.telephone, Validators.required],
      email: [client.email, [Validators.required, Validators.email]]
    });

    this.photoPreview = client.photo;
  }

  onFieldChanged(e: any) {
    this.form.get(e.dataField)?.setValue(e.value);
  }

  onPhotoSelected(e: any) {
    const file = e.value?.[0];
    if (file) {
      this.selectedPhoto = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const updatedData: any = { ...this.form.value };
      if (this.photoPreview) {
        updatedData.photo = this.photoPreview;
      }
      this.clientService.updateClient(updatedData);
      alert('Informations modifiées avec succès !');
      this.router.navigate(['/client']);
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  onCancel() {
    this.router.navigate(['/client']);
  }
}