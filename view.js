
Forme.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
};

Rectangle.prototype.paint = function (ctx) {
    Forme.prototype.paint.call(this, ctx); // Appelle la méthode paint de Forme
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.largeur, this.hauteur);
    ctx.stroke();
};

Ligne.prototype.paint = function (ctx) {
    Forme.prototype.paint.call(this, ctx); // Appelle la méthode paint de Forme
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
};

// Fichier vue
Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = '#F0F0F0'; // Couleur de fond du canvas
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.tab.forEach(function (elt) {
        elt.paint(ctx);
    });
};

Rectangle.prototype.updateShapeList = function (ctx, button) {
    if (this.largeur > 0 && this.hauteur > 0) {


        let liste = document.getElementById("shapeList");
        let ul = document.createElement("ul");

        let p = document.createElement("p");
        p.textContent = "Rectangle(" + this.x + "," + this.y + "," + (this.x + this.largeur) + "," + (this.y + this.hauteur) + ")";

        // Insert button before the text
        p.insertBefore(button, p.firstChild);
        ul.appendChild(p);
        liste.appendChild(ul);
    }

};

Ligne.prototype.updateShapeList = function (ctx, button) {
    if (this.x1 != this.x2 && this.y1 != this.y2) {

        let liste = document.getElementById("shapeList");
        let ul = document.createElement("ul");

        let p = document.createElement("p");
        p.textContent = "Ligne(" + this.x1 + "," + this.y1 + "," + this.x2 + "," + this.y2 + ")";

        // Insert button before the text
        p.insertBefore(button, p.firstChild);
        ul.appendChild(p);
        liste.appendChild(ul);
    }
};

Drawing.prototype.updateShapeList = function (ctx) {
    let liste = document.getElementById("shapeList");
    liste.innerHTML = "";

    this.tab.forEach((element, index) => {
        let button = document.createElement("button");
        button.innerHTML = '<span class="glyphicon glyphicon-remove-sign"></span>';
        button.className = "btn btn-default";
        button.onclick = () => {
            this.tab.splice(index, 1); // Remove the element from the tab array
            this.paint(ctx);
            this.updateShapeList(ctx); // Update the shape list after removal
        };
        element.updateShapeList(ctx, button);
    });
};

