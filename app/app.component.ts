import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  key: string = 'Name';  
  key1: string ='domain';
  key2: string='experience';

  myItem: string;
  storeName() {
    localStorage.setItem(this.key, 'akash',);
    this.myItem = localStorage.getItem(this.key);

    localStorage.setItem(this.key1, 'Front end',);
    this.myItem = localStorage.getItem(this.key1);

    localStorage.setItem(this.key2, 'six');
    this.myItem = localStorage.getItem(this.key2);
    
  }

  localStorageValue: string | null = localStorage.getItem('storedValue');

 sessionStorageValue: string | null = sessionStorage.getItem('sessionValue');
}
