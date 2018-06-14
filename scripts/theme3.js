function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;
    this.enable = () => {
        self._enabled = true;
    }
    this.disable = () => {
        self._enabled = false;
    }
}

function Fridge(power) {
    Machine.call(this, power);
    var food = [];
    this.getFood = () => {
        return food.slice();
    }
    this.addFood = (...items) => {
        if (this._enabled) {
            if (food.length + items.length <= this._power / 100){
                food=food.concat(items);
            }
            else{
                console.log(`Fridge is full`)
            }
                

        }
        else {
            console.log('Fridge is closed');
        }
    }
}

Fridge.prototype = Object.create(Machine.prototype);