
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd){
		switch (this.currEditingMode) {
			case editingMode.rect:
				this.currentShape = new Rectangle(dnd.init_x, dnd.init_y, dnd.init_x, dnd.init_y, this.currColour, this.currLineWidth);
				break;
			case editingMode.line:
				this.currentShape = new Ligne(dnd.init_x, dnd.init_y, dnd.init_x, dnd.init_y, this.currColour, this.currLineWidth);
				break;
		}
	}

	this.onInteractionUpdate = function(dnd){
		switch (this.currEditingMode) {
			case editingMode.rect:
				this.currentShape.largeur = dnd.final_x - dnd.init_x;
				this.currentShape.hauteur = dnd.final_y - dnd.init_y;
				break;
			case editingMode.line:
				this.currentShape.x2 = dnd.final_x;
				this.currentShape.y2 = dnd.final_y;
				break;
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}

	this.onInteractionEnd = function(dnd){
		drawing.tab.push(this.currentShape);
		drawing.paint(ctx);
		drawing.updateShapeList(ctx);
	}

	document.getElementById('butRect').onchange = (e) => {
		this.currEditingMode = editingMode.rect;
	}

	document.getElementById('butLine').onchange = (e) => {
		this.currEditingMode = editingMode.line;
	}
	document.getElementById('spinnerWidth').onchange = (e) => {
		this.currLineWidth = document.getElementById('spinnerWidth').value;
	}

	document.getElementById('colour').onchange = (e) => {
		this.currColour = document.getElementById('colour').value;
	}



	
	



};


