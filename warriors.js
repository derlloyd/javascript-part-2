function Warrior(name, gender) {
    this.name = name,
    this.gender = gender,
    this.level = 1,
    this.weapon = "wooden sword",
    this.power = Math.ceil(Math.random()*100)
}

Warrior.prototype = {
    fight: function() {console.log("rushes to the arena with")},
    faceoff: function(opponent) {
        if (this.power >= opponent.power) {
            console.log(this.name + " defeats " + opponent.name + " with " 
            + this.power + " versus " + opponent.power + " power!");
        } else {
            console.log(opponent.name + " defeats " + this.name + " with " 
            + opponent.power + " versus " + this.power + " power!");            
        }
    }
}   

var warriorA = new Warrior("Dave","M")
var warriorB = new Warrior("Grohl", "M")
var WarriorC = new Warrior("Susan", "F")

console.log(warriorB.fight())
console.log(warriorA.faceoff(warriorB))