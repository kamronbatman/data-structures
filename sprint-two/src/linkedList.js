var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);

    if (!list.head) { list.head = newNode; }

    if (list.tail) {
      list.tail.next = newNode;
      //Doubly Linked
      newNode.previous = list.tail;
    }

    list.tail = newNode;
  };

  list.removeHead = function(){
    if (!list.head) { return undefined; }

    var value = list.head.value;
    list.head = list.head.next;

    //Doubly Linked
    if (list.head) {
      list.head.previous = null;
    }

    return value;
  };

  list.contains = function(target){
    var node = list.head;

    while (node !== null) {
      if (node.value === target) {
        return true;
      }

      node = node.next;
    }

    return false;
  };

  //Doubly Linked
  list.addToHead = function(value) {
    var newNode = Node(value);

    if (list.head) list.head.previous = newNode;

    newNode.next = list.head;
    list.head = newNode;

    if (!list.tail) list.tail = newNode;
  }

  //Doubly Linked
  list.removeTail = function() {
    if (!list.tail) {
      return undefined;
    }

    var value = list.tail.value;

    if (list.tail.previous) {
      list.tail.previous.next = null;
    }

    list.tail = list.tail.previous;

    return value;
  }

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  //Doubly Linked
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 * addToHead: O(1)
 * removeTail: O(1)
 */
