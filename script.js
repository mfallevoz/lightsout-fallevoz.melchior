class Grid {
    constructor(element_id, col=5, row=5) {
        this.element = document.querySelector(element_id);
        this.col = col;
        this.row = row;
        this.createGrid();
    }

    createGrid() {
        var table = document.createElement("table");

        for (var i=0; i<this.row; i++) {
            var tr = table.appendChild(document.createElement("tr"));

            for (var j=0; j<this.col; j++) {
                var td = document.createElement("td");
                
                td.setAttribute("id", "off");
                tr.appendChild(td);
            }
        }

        this.element.innerHTML = "";
        this.element.appendChild(table);
    }

}

var c4 = new Grid(".gameManager")

$(document).ready(function() {
    $("td").click(function() {
        $(this).attr("id","on");
    })
})