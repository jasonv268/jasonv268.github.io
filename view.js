
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Forme.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
}


Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.x+this.largeur, this.y+this.hauteur);
    ctx.stroke();
}

Ligne.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
}

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.tab.forEach(function(elt) {
        elt.paint(ctx);
    });
}