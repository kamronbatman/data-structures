var BinarySearchTree = function(value){
  var self = Object.create(BinarySearchTreeMethods);

  self.value = value;
  self.left = null;
  self.right = null;

  return self;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value){
  var newBST = BinarySearchTree(value);
  if(value == this.value) return;
  if(value < this.value){
    if(this.left) { this.left.insert(value); }
    else { this.left = newBST; }
  } else {
    if(this.right){ this.right.insert(value); }
    else { this.right = newBST; }
  }
};

BinarySearchTreeMethods.contains = function(target){
  if (this.value === target) { return true; }
  if (target < this.value) {
    if (this.left) { return this.left.contains(target); }
  }
  if (target > this.value) {
    if (this.right) { return this.right.contains(target); }
  }
  return false;
};

BinarySearchTreeMethods.depthFirstLog = function(func){
  func(this.value);
  if(this.right) { this.right.depthFirstLog(func); }
  if(this.left) { this.left.depthFirstLog(func); }
};

BinarySearchTreeMethods.breadthFirstLog = function(func){
  var queue = [this];

  do {
    //Take the node off the queue from the front
    var currentNode = queue.shift();

    //Check if left & right exist, and push them accordingly.
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);

    //Exec callback on our current node.
    func(currentNode.value);
  } while (queue.length > 0);
}


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n)
 * contains: O(log n)
 * depthFirstLog: O(n)
 */
