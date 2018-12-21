class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  walk(node = this) {
    let toVisitQueue = [node];
    let current = toVisitQueue.shift();

    console.log(current);

    if (current.children.length === 0) {
      return;
    } else {
      for (let child of current.children) {
        this.walk(child);
      }
    }
  }

  sumValues() {
    //         sets the root node to the to visit queue
    //         debugger;
    let toVisitQueue = [this];
    let sum = 0;
    while (toVisitQueue.length) {
      let current = toVisitQueue.pop();
      sum += current.val;

      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
    return sum;
  }
  sumEvenValues() {
    let toVisitQueue = [this];

    let sum = 0;

    while (toVisitQueue.length) {
      let current = toVisitQueue.pop();

      if (current.val % 2 === 0) sum += current.val;

      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }

    return sum;
  }

  maxDepth() {
    //       traverse node
    let toVisitQueue = [this];

    let counter = 0;
    let max = 0;

    while (toVisitQueue.length) {
      let current = toVisitQueue.pop();

      counter++;
      //         if there are no children, ask if counter
      if (current.children.length === 0) {
        if (counter > max) {
          max = counter;
        }
        //         reset counter regardless since there are no children
        counter--;
      }

      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }

    return max;
    //       add counter that increments with each node
    // if no children, ask if counter is greater than max, if so reset max, otherwise reset counter
  }
}

class BinNode {
  constructor(left = null, right = null) {
    this.left = left;
    this.right = right;
  }

  walk(node = this) {
    let toVisitQueue = [node];

    let current = toVisitQueue.shift();

    console.log(current);

    if (current.left !== null) {
      this.walk(current.left);
    }
    if (current.right !== null) {
      this.walk(current.right);
    }
  }

  minDepth(root = this) {
    if (!root) return 0;
    var min = Infinity;
    debugger;
    search(root, 1);

    function search(root, level) {
      debugger;
      if (root) {
        if (!root.left && !root.right) {
          if (min > level) min = level;
        }
        search(root.left, level + 1);
        search(root.right, level + 1);
      }
    }

    return min;
  }

  maxDepth(root = this) {
    if (!root) return 0;

    var max = 0;
    //        debugger
    search(root, 1);

    function search(root, level) {
      //            debugger
      if (root) {
        if (!root.left && !root.right) {
          if (max < level) max = level;
        }
        search(root.left, level + 1);
        search(root.right, level + 1);
      }
    }

    return max;
  }

  maxSum(root = this) {
    if (!root) return 0;

    var sumMax = 0;
    debugger;
    search(root, 1);

    function search(root, level) {
      debugger;
      if (root) {
        if (!root.left && !root.right) {
          sumMax += level;
        }
        search(root.left, level + 1);
        search(root.right, level + 1);
      }
    }

    return sumMax;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  walk() {
    this.root.walk();
  }

  sumValues() {
    return this.root.sumValues();
  }
  sumEvenValues() {
    return this.root.sumEvenValues();
  }

  minDepth() {
    return this.root.minDepth();
  }
  maxDepth() {
    return this.root.maxDepth();
  }
  maxSum() {
    return this.root.maxSum();
  }
}

// let org = new Tree(new Node('Amy', [new Node('Bob'),new Node('Barb'),new Node('Barry')]))
let org = new Tree(
  new BinNode(new BinNode(), new BinNode(new BinNode(), new BinNode()))
);

org.walk();

// sumValues
// Given a n-ary tree of integers, return the sum of all the integers.
// org.sumValues();

// countEvens
// Given a n-ary tree of integers, return the count of all the even integers.
// org.sumEvenValues();

// minDepth
// Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from root node down to the nearest leaf node.
// org.minDepth();

// maxDepth
// Given a binary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from root node down to the nearest leaf node.
// org.maxDepth();

// maxSum
// Given a binary tree, find the maximum path sum. The path may start and end at any node in the tree.
org.maxSum();

// nextLarger
// Given a binary tree and a integer x. Find and return the node with next larger element in the tree i.e. find a node just greater than x. Return null if no node is present with value greater than x.

// areCousins
// Given a binary tree and two nodes, determine whether the two nodes are cousins of each other or not.

// Two nodes are cousins of each other if they are at same level and have different parents.

// numGreater
// Given a n-ary tree and a number x, find and return the number of nodes which are greater than x.
