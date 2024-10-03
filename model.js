
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.tab = new Array();
}

function Forme(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;
}

function Rectangle(x,y, largeur, hauteur, couleur, epaisseur) {
    Forme.call(this, couleur, epaisseur);
    this.x = x;
    this.y = y;
    this.largeur = largeur;
    this.hauteur = hauteur;
}

Rectangle.prototype = new Forme();

function Ligne(x1, y1, x2, y2, couleur, epaisseur) {
    Forme.call(this, couleur, epaisseur);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}

Ligne.prototype = new Forme();
