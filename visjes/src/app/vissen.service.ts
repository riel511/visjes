import { Injectable } from '@angular/core';
import { VisVijver } from './vis-vijver';

@Injectable({
  providedIn: 'root'
})

export class VissenService {
  constructor() { }
  url = 'http://localhost:3000/locations';
  
  async getAllHousingLocations(): Promise<VisVijver[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<VisVijver | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }

}