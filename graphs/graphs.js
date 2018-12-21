class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
      this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
      for(let node of vertexArray){
          this.nodes.add(node)
      }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
      v1.adjacent.add(v2)
      v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
      v1.adjacent.delete(v2);
      v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {

    for(let node of this.nodes){
           node.adjacent.delete(vertex)
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
      let visited = new Set();
//       debugger;

      function _depthFirstSearch(start){
//           debugger;
          visited.add(start);

        for(let neighbor of start.adjacent){
            if(!visited.has(neighbor)){
                _depthFirstSearch(neighbor)
            }
        }
      }

      _depthFirstSearch(start)
      
      return visited;
 
  }

     shortestPath(source,target) {
      let queue = [source]
      let visited = new Set();
      let result = []
      let counter = 0;
      let min = Infinity;
      let current;
//       debugger;
      visited.add(source)

      while(queue.length > 0){
          
          current = queue.shift();
                    debugger;

          counter++;

          if(current === target && counter < min){
              min = counter;
          }

          result.push(current.value)

          for(let adj of current.adjacent){
              if(!visited.has(adj)){
                 visited.add(adj)

                  queue.push(adj)
              }
          }
      }
          
    return min;
      
  }
 
  

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
  
      let queue = [start]
      let visited = new Set();
      let result = []
      let current;
//       debugger;
      visited.add(start)

      while(queue.length > 0){
//           debugger;
          current = queue.shift();
          result.push(current.value)

          

          for(let adj of current.adjacent){
              if(!visited.has(adj)){
                 visited.add(adj)

                  queue.push(adj)
              }
          }
      }
          
    return result;
      
  }
}

let graph = new Graph()
let a = new Node("A")
let b = new Node("B")
let c = new Node("C")
let d = new Node("D")
let e = new Node("E")
let f = new Node("F")
let g = new Node("G")


graph.addVertices([a, b, c, d, e, f, g])
graph.addEdge(a, b)
graph.addEdge(a, c)
graph.addEdge(b, d)
graph.addEdge(c, d)
graph.addEdge(b, e)
graph.addEdge(g, e)
graph.addEdge(f, e)
graph.addEdge(d, f)
graph.addEdge(f, g)








// this is one option:
graph.shortestPath(a,g) // ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"]