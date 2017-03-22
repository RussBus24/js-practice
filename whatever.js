function Burger(toppings) {
    this.toppings = [];
}

Burger.prototype.add = function(topping) {
    this.toppings.push(topping);
};

var burger = new Burger();
burger.add('onions');
burger.add('ketchup');
console.log(burger.toppings);