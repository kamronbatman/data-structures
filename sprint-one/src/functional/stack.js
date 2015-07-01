var Stack = function(){
  var someInstance = {}; //Used for constructors

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  someInstance.length = 0;

  // Implement the methods below
  someInstance.push = function(value){
    someInstance.storage[someInstance.length++] = value;
  };

  someInstance.pop = function(){
    var val = someInstance.storage[someInstance.length-1];

    if (someInstance.length > 0){
      delete someInstance.storage[--someInstance.length];
    }

    return val;
  };

  someInstance.size = function(){
    return someInstance.length;
  };

  return someInstance;
};
