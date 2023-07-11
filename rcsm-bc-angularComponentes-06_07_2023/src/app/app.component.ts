import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularComponent1';

  // Establecemos las variables que queremos almacenar y enviar desde el padre al hijo
  name = '';
  cif = '';
  address = '';
  group = '';
  // Esto es un objeto para almacenar la información que nos entra de 
  // cada usuario que nos entra
  users: any = [];
  // Esta variable comprueba que haya entrado algún dato de usuarios
  showElement: boolean = false;

  // Esta función recibe y guarda cada usuario que entra
  newUser(){

    this.users.push({

      name: this.name,
      cif: this.cif,
      address: this.address,
      group: this.group
    });
    
    this.showElement = true;
  }
}
