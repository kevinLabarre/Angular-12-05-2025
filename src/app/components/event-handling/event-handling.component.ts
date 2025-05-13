import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  imports: [],
  templateUrl: './event-handling.component.html',
  styleUrl: './event-handling.component.css'
})
export class EventHandlingComponent {

  message: string = "Toto"

  hello(name: string) {
    alert("Bonjour, bienvenue sur angular !" + " " + name)
  }

  onMouseOver() {
    this.message = "Way to go !"
  }

}
