var Tree = function(value,parent){
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;
  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value, this));
};

treeMethods.contains = function(target){
  if (this.value === target) { return true; }

  return Boolean(_.find(this.children, function(child){
    return child.contains(target);
  }));
};

treeMethods.removeFromParent = function(){
  var value = this.value;

  this.parent.children = _.reject(this.parent.children, function(child){
    return child.value === value;
  });

  this.parent = null;
}

treeMethods.traverse = function(cb){
  cb(this);
  _.each(this.children, function(child){
    child.traverse(cb);
  });
}


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 * removeFromParents: O(n)
 */
