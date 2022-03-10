class Grid {
    constructor(element_id, col=5, row=5) {
        this.element = document.querySelector(element_id);
        this.col = col;
        this.row = row;
        this.createGrid();
        this.createReplay();
        this.createTurnCount();
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

    createReplay() {
        var button = document.createElement("button");

        button.innerHTML = "Replay";
        this.element.appendChild(button);
    }

    createTurnCount() {
        var span = document.createElement("span");

        span.innerHTML = 0;
        this.element.appendChild(span);
    }

}

function getRandomInt(maxValue) {
    return Math.floor(Math.random() * maxValue);
}

function getArrayRandomInt(length, maxValue) {
    var array = [];
    
    while(array.length < length) {
        var randomInt = getRandomInt(maxValue);

        if (array.indexOf(randomInt) === -1) {
            array.push(randomInt);
        }
    }

    return array;
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
    cellLocalIndex = $(cell).index();
    cellGlobalIndex = $(cell).index() + rowIndex * 5;

    changeState(cell);
    console.log(cellLocalIndex);
    console.log(cellGlobalIndex);

    if (cellLocalIndex > 0) {
        changeState($(".cell").eq(cellGlobalIndex-1));
    }

    if (cellLocalIndex < 4) {
        changeState($(".cell").eq(cellGlobalIndex+1));
    }

    if (rowIndex > 0) {
        changeState($(".cell").eq(cellGlobalIndex-5));
    }

    if (rowIndex < 4) {
        changeState($(".cell").eq(cellGlobalIndex+5));
    }
}

function initGame() {
    array = getArrayRandomInt(5, 24);

    for (var i=0; i<array.length; i++) {
        changeState($(".cell").eq(array[i]));
    }
}

function replayGame() {
    $(".cell").each(function() {
        $(this).attr("id", "off")
    });

    $("span").html("0");
}

function countTurn() {
    var i = $("span").html();
    $("span").html(++i);
}

$(document).ready(function() {
    initGame();
    $("td").click(function() {
        toggle(this);
        countTurn();
    });

    $("button").click(function() {
        replayGame();
    });
})

var c4 = new Grid(".gameManager");