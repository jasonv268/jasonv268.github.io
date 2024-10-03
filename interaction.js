function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.canvas = canvas; // Ajouter le canvas comme attribut
  this.interactor = interactor;
  this.init_x = 0;
  this.init_y = 0;
  this.final_x = 0;
  this.final_y = 0;
  this.editing = false;

  // Lier les méthodes à l'instance
  this.press = this.press.bind(this);
  this.move = this.move.bind(this);
  this.release = this.release.bind(this);

  canvas.addEventListener('mousedown', this.press, false);
  canvas.addEventListener('mousemove', this.move, false);
  canvas.addEventListener('mouseup', this.release, false);
}

DnD.prototype.press = function(evt) {
  this.editing = true;
  var pos = getMousePosition(this.canvas, evt); // Utiliser this.canvas
  this.init_x = pos.x;
  this.init_y = pos.y;
  console.log("Pression : " + this.init_x + " " + this.init_y);
  if (this.interactor) {
    this.interactor.onInteractionStart(this);
  }
};

DnD.prototype.move = function(evt) {
  if (this.editing) {
    var pos = getMousePosition(this.canvas, evt); // Utiliser this.canvas
    this.final_x = pos.x;
    this.final_y = pos.y;
    console.log("Déplacement : " + this.final_x + " " + this.final_y);
    if (this.interactor) {
      this.interactor.onInteractionUpdate(this);
    }
  }
};

DnD.prototype.release = function(evt) {
  this.editing = false;
  var pos = getMousePosition(this.canvas, evt); // Utiliser this.canvas
  this.final_x = pos.x;
  this.final_y = pos.y;
  console.log("Relâchement : " + this.final_x + " " + this.final_y);
  if (this.interactor) {
    this.interactor.onInteractionEnd(this);
  }
}

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

// Exemple d'utilisation
// canvas = document.getElementById('myCanvas');
// var dnd = new DnD(canvas, interactor);
