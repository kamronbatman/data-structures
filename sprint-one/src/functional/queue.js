var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  someInstance.length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance.storage[someInstance.length++] = value;
  };

  someInstance.dequeue = function(){
    var val = someInstance.storage[0];

    if (someInstance.length > 0) {
      for ( var i = 1; i < someInstance.length; i++ )
      {
        someInstance.storage[i-1] = someInstance.storage[i];
      }

      delete someInstance.storage[someInstance.length--];
    }

    return val;
  };

  someInstance.size = function(){
    return someInstance.length;
  };

  return someInstance;
};
