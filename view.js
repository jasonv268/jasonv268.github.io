
Forme.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
};

Rectangle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx); // Appelle la méthode paint de Forme
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.largeur, this.hauteur);
    ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx); // Appelle la méthode paint de Forme
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
};

// Fichier vue
Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // Couleur de fond du canvas
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.tab.forEach(function(elt) {
        elt.paint(ctx);
    });
};