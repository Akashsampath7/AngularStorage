import { Component } from '@angular/core';

@Component({
  selector: 'app-lsstorage',
  templateUrl: './lsstorage.component.html',
  styleUrls: ['./lsstorage.component.css']
})
export class LsstorageComponent {
  inputValue: string ='';
  name='';

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
     this.saveValue();
     }
     }

     saveValue(): void {

      if (this.inputValue) {
      //localStorage.setItem('storedValue', this.inputValue);
      sessionStorage.setItem('sessionValue', this.inputValue);
       this.inputValue = '';
      }
      }

      saveData() {
        sessionStorage.setItem('name', 'JonSnow');
    }
    getData() {
      return sessionStorage.getItem('name');
    }
}
