var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};
  someInstance.length = 0;


  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
	this.storage[this.length++] = value;
};

stackMethods.pop = function(){
	var val = this.storage[this.length-1];

	if (this.length > 0){
	  delete this.storage[--this.length];
	}

	return val;
};

stackMethods.size = function(){
	return this.length;
};