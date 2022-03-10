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
                
                td.setAttribute("class", "cell");
                td.setAttribute("id", "off");
                tr.appendChild(td);
            }
        }

        this.element.innerHTML = "";
        this.element.appendChild(table);
    }

}

function changeState(cell) {
    switch ($(cell).attr("id")) {
        case "on":
            $(cell).attr("id","off");
            break;

        case "off":
            $(cell).attr("id","on");
            break;
    }
}

function toggle(cell) {
    rowIndex = $(cell).parent().index();
    cellLocalIndex = $(cell).index() + rowIndex;
    cellGlobalIndex = $(cell).index() + rowIndex * 5;

    changeState(cell);

    if (cellLocalIndex > 0) {
        changeState($(".cell").eq(cellGlobalIndex-1));
    }

    if (cellLocalIndex < 5) {
        changeState($(".cell").eq(cellGlobalIndex+1));
    }

    if (cellLocalIndex%5 > 0) {
        changeState($(".cell").eq(cellGlobalIndex-5));
    }

    if (cellLocalIndex%5 < 5) {
        changeState($(".cell").eq(cellGlobalIndex+5));
    }
}

$(document).ready(function() {
    
    $("td").click(function() {

        toggle(this);
    })
})

var c4 = new Grid(".gameManager")