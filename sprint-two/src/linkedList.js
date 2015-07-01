var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
  	var newNode = Node(value);
  	if (list.tail !== null) { list.tail.next = newNode; }
  	if (list.head == null) { list.head = newNode; }

  	list.tail = newNode;

  	//return list; //Chaining?
  };

  list.removeHead = function(){
  	var headNode = list.head;
  	if ( list.head == null ) { return null; }

  	list.head = headNode.next;

  	return headNode.value;
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

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
