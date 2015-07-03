var Queue = function(){
	// Hey! Rewrite in the new style. Your code will wind up looking very similar,
	// but try not not reference your old code in writing the new style.

	var someInstance = Object.create(queueMethods);

	someInstance.storage = {};

	someInstance.back = 0;
	someInstance.front = 0;

	return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.back++] = value;
};

queueMethods.dequeue = function() {
	return this.size() > 0 ? this.storage[this.front++] : undefined;
};

queueMethods.size = function() {
	return this.back - this.front;
};