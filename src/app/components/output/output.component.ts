import { Component, EventEmitter, Output } from '@angular/core';
import { emit } from 'process';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {

  @Output() text = new EventEmitter<string>();

  @Output() data = new EventEmitter<User>();

  onClick() {
    // Je déclenche la fonction 'passText(text: string)' du composant parent
    // avec le texte "Texte venant du composant enfant"
    this.text.emit("Texte venant du composant enfant")

    const user: User = {
      id: 1,
      name: "Toto",
      username: "Toto",
      email: "Toto"
    }

    this.data.emit(user)
  }


}
