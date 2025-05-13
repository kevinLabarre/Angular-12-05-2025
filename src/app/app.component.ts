import { Component } from '@angular/core';
import { User } from './interfaces/user.interface';
import { User as UserModel } from './models/user.model';
import { Roles } from './enums/roles.enum';
import { ExerciceHeritageComponent } from "./components/exercice-heritage/exercice-heritage.component";
import { EventHandlingComponent } from "./components/event-handling/event-handling.component";


interface User2 {
  id: number,
  name: string,
}

@Component({
  selector: 'app-root',
  imports: [ExerciceHeritageComponent, EventHandlingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() {
    console.log(this.user3.fullName)
  }

  myNumber: number | undefined;

  // Le ' ? ' veut dire que la variable peut être undefined
  myVar?: string | number | null = "";

  myVar2: null = null

  title: string = "Bienvenue sur angular";

  myTable?: number[];

  user: User = {
    id: 1,
    name: "Toto",
    username: "Toto",
    // email: "Toto"
  }

  // Typage
  user2: { id: number, name: string, username: string, email?: string } = {
    id: 1,
    name: "Toto",
    username: "Toto",
    // email: "Toto"
  }



  user3: UserModel = new UserModel(1, "Toto", "Toto", "Toto", Roles.USER)

  john: UserModel = new UserModel(1, "john", "Trésor", "john@tresor.fr", Roles.USER)

  roles?: "admin" | "user" | "guest"
  roles2?: Roles  // Equivalet ligne au dessus


  jojo: any = {
    name: "Jojo"
  }



  display(): string {
    return "voici ma fonction display !";
  }

  get data() {

    this.jojo.nane = "john"

    return "Mes data ici !!"
  }


}



// Portée var / let et const
// Fonctions fléchées
// Destructuration
// Spread operator
// array.prototype.includes, forEach et map
// Object.fromEntries
// class
