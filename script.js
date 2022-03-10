class Grid {
    constructor(element_id, col=5, row=5) {
        this.element = document.querySelector(element_id);
        this.col = col;
        this.row = row;
        this.grid = Array(this.row);

        for (var i=0; i<this.row; i++) {
            this.grid[i] = Array(this.col).fill(0);
        }

        this.createGrid();
    }

    createGrid() {
        var table = document.createElement("table");

        for (var i=0; i<this.row; i++) {
            var tr = table.appendChild(document.createElement("tr"));

            for (var j=0; j<this.col; j++) {
                var td = tr.appendChild(document.createElement("td"));
            }
        }

        this.element.innerHTML = "";
        this.element.appendChild(table);
    }
}

var c4 = new Grid(".gameManager")