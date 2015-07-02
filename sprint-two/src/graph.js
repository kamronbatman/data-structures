

var Graph = function(){
  this.nodes = [];
  this.edges = {};
  /*
    this.edges like
    {
      "kittens":{
        "penguins":_,
        "puppies":_
      },
     "penguins":{
        "kittens":_
      },
      "puppies":{
        "kittens":_
      }
    }
  */
};

Graph.prototype.addNode = function(node){
  if (!this.contains(node)) {
    this.nodes.push(node);
    this.edges[node] = {};
  }
};

Graph.prototype.contains = function(node){
  return _.contains(this.nodes, node);
};

Graph.prototype.removeNode = function(node){
  var edges = Object.keys(this.edges[node]);
  delete this.edges[node];

  _.each(edges, function(o_node){
    delete this.edges[o_node][node];
  });

  this.nodes = _.without(this.nodes, node);
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return toNode in this.edges[fromNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode][toNode] = true;
  this.edges[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.edges[fromNode][toNode];
  delete this.edges[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



