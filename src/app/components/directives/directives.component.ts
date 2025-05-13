import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { User as UserModel } from '../../models/user.model';
import { Roles } from '../../enums/roles.enum';

@Component({
  selector: 'app-directives',
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  consigne = `
  - afficher la liste des utilisateurs
  - mettre en place un bouton (ou une case à cocher) qui permet d'afficher / masquer les utilisateurs
  `

  displayUsers: boolean = true

  changeDisplay() {
    this.displayUsers = !this.displayUsers
  }

  numbers = [1, 2, 3, 4, 5, 4, 3, 1, 2, 5, 3, 5, 4]


  users: User[] = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      email: "john.doe@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      email: "jane.smith@example.com"
    },
    {
      id: 3,
      name: "Robert Johnson",
      username: "robjohnson",
      email: "robert.j@example.com"
    },
    {
      id: 4,
      name: "Emily Davis",
      username: "emilyd",
      email: "emily.davis@example.com"
    },
    {
      id: 5,
      name: "Michael Brown",
      username: "mikebrown",
      email: "michael.brown@example.com"
    }
  ]

}
