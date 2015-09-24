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

BinarySearchTreeMethods.getMinMaxDepths = function(){
  var mindepth, maxdepth;

  var inorderSearch = function(bst, depth){
    if(bst.left) { inorderSearch(bst.left, depth+1); }
    if(bst.right) { inorderSearch(bst.right, depth+1); }

    //This is the deepest-most child
    if (!bst.left && !bst.right) {
      mindepth = Math.min(mindepth, depth);
      maxdepth = Math.max(maxdepth, maxdepth);
    }
  }

  inorderSearch(this, 1);

  return [mindepth, maxdepth];
}

BinarySearchTreeMethods.rebalance = function(){
  // called on all inserts, returns if not necessary.
  //In order depth first log to flat array.
  
  var flat = [];

  var inorderSearch = function(bst){
    if(bst.left) { bst.left.depthFirstLog(func); }
    flat.push(bst);
    if(bst.right) { bst.right.depthFirstLog(func); }
  }

  //Rebalance
    //Get middle of the flat
    //Split it in half
    //Then recurse and balance accordingly


}

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n)
 * contains: O(log n)
 * depthFirstLog: O(n)
 */
