var HashTable = function(){
  this._limit = this.lowestLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.lowestLimit = 8;

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if ( !this._storage.get(i) ) this._storage.set(i, []);

  for(var idx = 0; idx < this._storage.get(i).length; idx++){
    if( this._storage.get(i)[idx][0] === k ){
      this._storage.get(i)[idx][1] = v;
      return;
    }
  }
  this._storage.get(i).push([k,v]);
  this._size++;
  if(this._size > 0.75 * this._limit){
    this.doubleSize();
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)){
    for(var idx = 0; idx < this._storage.get(i).length; idx++){
      if(this._storage.get(i)[idx][0] === k){
        return this._storage.get(i)[idx][1];
      }
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var thisHash = this;

  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, _.reject(this._storage.get(i), function(item){
    var found = item[0] === k;
    if ( found ) thisHash._size--;

    return found;
  }));

  if (this._size < 0.25 * this._limit){
    this.halveSize();
  }
};

HashTable.prototype.rehash = function(){
  var newStorage = LimitedArray(this._limit);
  this._storage.each(function(bucket){
    _.each(bucket, function(kvp){
      var i = getIndexBelowMaxForKey(kvp[0], this._limit);
      if ( !newStorage.get(i) ) newStorage.set(i, []);
      newStorage.get(i).push([kvp[0],kvp[1]]);
    })
  });

  this._storage = newStorage;
};

HashTable.prototype.doubleSize = function(){
  this._limit *= 2;
  this.rehash();
}

HashTable.prototype.halveSize = function(){
  this._limit = Math.max((this._limit/2)|0, this.lowestLimit);
  this.rehash();
}

HashTable.prototype.sizeUsed = function(){
  return _.reduce(this._storage.storage, function(acc, bucket){
    return acc + (bucket && bucket.length > 0) ? 1 : 0;
  },0);
}

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(remove + 1) = O(n)
 * retrieve: O(n)
 * remove: O(n)
 */
