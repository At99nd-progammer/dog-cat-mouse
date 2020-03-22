function Cat() {
	this.stomatch = [];
}

Cat.prototype.eating = function(Mouse) {
	this.stomatch.push(Mouse);
}

Module.exports = Cat;