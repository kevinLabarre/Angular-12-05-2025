export interface User {
  id: number,
  name: string,
  username: string,
  email?: string   // ' ? ' -> l'attribut n'est pas obligatoire

  // display(): string  // on utilise les méthodes lorsqu'on veut implémenter des class

}
