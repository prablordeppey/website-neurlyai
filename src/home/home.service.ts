import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  items!: object[]

  constructor() { }

  get getItems(){
    return this.items
  }

  fetchItems(){
    this.items = [
      {
        img_url: 'https://solvimm.com/wp-content/uploads/2018/09/o-que-e-machine-learning-capa.png',
        title: 'machine learning'
      }
    ]
  }
}
