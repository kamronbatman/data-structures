var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage[i] = this._storage[i] || [];
  this.remove(k);
  this._storage[i].push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var idx = 0; idx < this._storage[i].length; idx++){
    if(this._storage[i][idx][0] === k){
      return this._storage[i][idx][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = _.reject(this._storage[i], function(item){
    return item[0] === k;
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
