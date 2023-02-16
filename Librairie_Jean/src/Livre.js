// une Livre
export default class Livre {
  constructor(id, titre, qtestock, prix) {
    
    this._titre = titre;
    this._qtestock = qtestock;
    this._prix = prix; 
    this._id = id;
    //this._id = Date.now() + Math.floor(Math.random() * 10); // génération d'un id unique
  }

  get titre() {
    return this._titre;
  }
  get id() {
    return this._id;
  }

  get qtestock () {
    return this._qtestock;
  }



  get prix() {
    return this._prix;
  }



  // modifier le titre
  set titre(titre) {
    this._titre = titre;
  }
  pourAfficher() {
    return `Titre : ${this._titre} ` + ` Stock : ${this._qtestock}` + ` Prix : ${this._prix}`;
  }
}
