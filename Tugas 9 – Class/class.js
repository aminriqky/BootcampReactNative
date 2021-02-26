// 1. Animal Class
// Release 0
class Animal {
    constructor(sheep) {
        this._name = sheep;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name() {
        return this._name;
    }
    set name(x) {
        return this._name = x;
    }

    get legs() {
        return this._legs;
    }
    set legs(x) {
        return this._legs = x;
    }

    get cold_blooded() {
        return this._cold_blooded;
    }
    set cold_blooded(x) {
        return this._cold_blooded = x;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Release 1

class Ape extends Animal{
    constructor (sungokong) {
        super(sungokong);
        this._apeName = sungokong;
        this._apeLegs = 2;
    }
    yell() {
        return console.log("Auooo");
    }
}
class Frog extends Animal{
    constructor (kodok) {
        super(kodok);
        this._frogName = kodok;
        this._frogLegs = 2;
    }
    jump() {
        return console.log("hop hop");
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

// 2. Function to Class
class Clock {
    constructor ({ template }) {
    
        var timer;
    
        function render() {
            var date = new Date();
        
            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
        
            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;
        
            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;
        
            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);
        
            console.log(output);
        }
    
        this.stop = function() {
            clearInterval(timer);
        };
    
        this.start = function() {
            render();
            timer = setInterval(render, 1000);
        }
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 