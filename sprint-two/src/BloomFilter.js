var BloomFilter = function() {
  var set = Object.create(bloomPrototype);

  set._limit = set.lowestLimit;
  set._size = 0;
  set._hashCount = set.lowestHashCount;

  set._storage = [];

  return set;
};

var bloomPrototype = {};

bloomPrototype.lowestLimit = 12;
bloomPrototype.lowestHashCount = 4;

bloomPrototype.add = function(item) {
  this._storage[JSON.stringify(item)] = true;
};

bloomPrototype.contains = function(item) {
  return JSON.stringify(item) in this._storage;
};

bloomPrototype.remove = function(item) {
  delete this._storage[JSON.stringify(item)];
};

bloomPrototype.prototype.doubleSize = function(){
  this._limit *= 2;
  this.rehash();
}

bloomPrototype.prototype.halveSize = function(){
  var oldlimit = this._limit;

  this._limit = Math.floor(this._limit / 2);
  if (this._limit < this._lowestLimit) {
    this._limit = this._lowestLimit;
  }

  if (oldlimit != this._limit) {
    this.rehash();
  }
}

bloomPrototype.prototype.sizeUsed = function(){
	return this._storage.length;
}

bloomPrototype.rehash = function(){

}

//Probably needs to be updated so that the hashes from each function do not self-collide.
//Determine if there is a default hash function to use.  Took this from hashTable.

bloomPrototype.getIndexBelowMaxForKey = function(str, max, initial) {
  var hash = initial || 0;

  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }

  return hash % max;
};

/**
 * Complexity: What is the time complexity of the above functions?
 * 
 */