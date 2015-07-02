var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  someInstance.back = 0;
  someInstance.front = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance.storage[someInstance.back++] = value;
  };

  someInstance.dequeue = function(){
    return someInstance.size() > 0 ? someInstance.storage[someInstance.front++] : undefined;
  };

  someInstance.size = function(){
    return someInstance.back - someInstance.front;
  };

  return someInstance;
};