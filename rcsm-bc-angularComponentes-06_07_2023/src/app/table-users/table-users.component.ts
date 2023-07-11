// Importamos el input para poder recibir información desde el padre
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent {

  // En el typescript del componente que muestra los datos de los usuarios, debemos recibir los datos
  @Input() data_users:any;

  constructor(){

    // Y en el constructor lo inicializamos vacío. De esta forma, luego podemos jugar con los datos en el HTML
    this.data_users = [];
  }
}
