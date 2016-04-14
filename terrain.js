// Create a constructor function called Tile that can create new tiles

function Tile(x, y) {
    this.x = x,
    this.y = y,
    this.height = Math.ceil(Math.random()*3),
    this.type = ["grass", "rocks", "water"][Math.floor(Math.random()*3)],
    this.condition = ["burning", "normal", "frozen"][Math.floor(Math.random()*3)]
}

Tile.prototype = {
    freeze: function() {
        // if condition burning, change to normal
        // if normal, change to frozen
        // if frozen, add 1 to height

        switch(this.condition) {
            case "burning":
                this.condition = "normal";
                break;
            case "normal":
                this.condition = "frozen";  
                break;
            default:
                this.height +=1
        }
    },
    burn: function() {
        // if frozen, change to normal
        // if normal, change to burning
        // if burning, height -1 to 0
        
        switch(this.condition) {
            case "frozen":
                this.condition = "normal";
                break;
            case "normal":
                this.condition = "burning";
                break;
            default:
                while(this.height > 0) {this.height -=1};
        }
    }
}

/*
var newTile = new Tile(20, 20)

console.log(newTile)

console.log(newTile.burn())

console.log(newTile)
*/

var bigArray = []

for (var i = 0; i < 20; i++) {
    var arraySub = [new Tile(1, 1).height]
    bigArray.push(arraySub);
    for (var j = 0; j < 20; j++) {
        var arraySubSub = new Tile(1, 1).height
        arraySub.push(arraySubSub)
    }
}

console.log(bigArray)