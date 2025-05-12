export function Logger(target: any) {
  // Ajoute une propriété à la classe
  target.prototype.logger = function () {
    console.log(`Instance de ${target.name} créée à ${new Date()}. Nom du user : ${this.firstName}`);
  };

  // Garde un historique des classes décorées
  // console.log(`Classe ${target.name} chargée à ${new Date()}`);
}
