import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

   client = {
    nom: 'Harzli',
    prenom: 'Siwar',
    photo: 'assets/hello.jpg',
    cin: 12345678,
    dateNaissance: '2000-01-01',
    email: 'harzlisiwar7@gmail.com',
    telephone: 94939462,
    adresse: 'Tunis'
  };

  updateClient(data: Partial<typeof this.client>) {
    this.client = { ...this.client, ...data };
  }

  getClient() {
    return this.client;
  }
}

