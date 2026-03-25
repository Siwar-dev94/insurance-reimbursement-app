import { Injectable } from '@angular/core';


export interface Assure {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: string;
  email: string;
 documents?: string; }

@Injectable({
  providedIn: 'root'
})
export class AssureService {

  constructor() { }

  assures: Assure[] = [
    { id: 1, nom: 'Harzli', prenom: 'Siwar', dateNaissance: '1980-05-12', email: 'mohamed@example.com', documents: '' },
    { id: 2, nom: 'Trabelsi', prenom: 'Sana', dateNaissance: '1990-07-30', email: 'sana@example.com', documents: ''  },
    { id: 3, nom: 'Ben Ali', prenom: 'Sami', dateNaissance: '1990-04-01', email: 'sami@mail.com', documents: ''  },
    { id: 4, nom: 'Hajri', prenom: 'Lina', dateNaissance: '1985-09-12', email: 'lina@mail.com', documents: 'test.png'  }
  ];
    getAll(): Assure[] {
    return this.assures;
  }

  add(assure: Assure) {
    this.assures.push(assure);
  }

  update(assure: Assure) {
    const index = this.assures.findIndex(a => a.id === assure.id);
    if (index !== -1) this.assures[index] = assure;
  }

  delete(id: number) {
    this.assures = this.assures.filter(a => a.id !== id);
  }
}

