class Node {
    key: any;
    left: Node | null;
    right: Node | null;
    constructor(key: any) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
  root: Node | null;
  constructor() {
    this.root = null;
  }

  insert(key: any) {
    const newNode = new Node(key);

    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node: Node, newNode: Node) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 先序遍历
  preOrderTraversal(handler: (key: any) => {}) {
    this.preOrderTraversalNode(this.root, handler);
  }
  preOrderTraversalNode(node: Node | null, handler: (key: any) => {}) {
    if (node != null) {
      handler(node.key);

      this.preOrderTraversalNode(node.left, handler);

      this.preOrderTraversalNode(node.right, handler);
    }
  }

  // 中序遍历
  midOrderTraversal(handler: (key: any) => {}) {
    this.midOrderTraversalNode(this.root, handler);
  }
  midOrderTraversalNode(node: Node | null, handler: (key: any) => {}) {
    if (node != null) {
      this.midOrderTraversalNode(node.left, handler);

      handler(node.key);

      this.midOrderTraversalNode(node.right, handler);
    }
  }

  // 后序遍历
  postOrderTraversal(handler: (key: any) => {}) {
    this.postOrderTraversalNode(this.root, handler);
  }
  postOrderTraversalNode(node: Node | null, handler: (key: any) => {}) {
    if (node != null) {
        this.postOrderTraversalNode(node.left, handler);

        this.postOrderTraversalNode(node.right, handler);
        
        handler(node.key);
    }
    }
    
    getMax() {
        let node = this.root;

        while (node != null && node.right != null) {
            node = node.right;
        }

        return node!.key;
    }

    getMin() {
        let node = this.root;

        while (node != null && node.left != null) {
            node = node.left;
        }

        return node!.key;
    }

    search(key: any) {
        let node = this.root;

        while (node != null) {
            if (key < node.key) {
                node = node.left;
            } else if (key > node.key) {
                node = node.right;
            } else {
                return true;
            }
        }

        return false;
    }

    remove(key: any) {
        let current:Node|null = this.root;
        let parent:Node|null = null;
        let isLeftChild:boolean = true; // current节点是否是parent节点的左节点

        if (current == null) return false;

        while (current.key != key) {
            parent = current;
            if (key < current.key && current.left) {
                isLeftChild = true;
                current = current.left;
            } else if(key >= current.key && current.right){
                isLeftChild = false;
                current = current.right;
            } else {
                return false;
            }
        }

        // 删除叶子节点
        if (current.left == null && current.right == null) {
            if (current == this.root) {
                this.root = null;
            } else if (isLeftChild) {
                parent!.left = null;
            } else {
                parent!.right = null;
            }
        }

        // 删除只有一个子节点的节点
        else if (current.left == null) {
            if (current == this.root) {
                this.root = current.right;
            } else if (isLeftChild) {
                parent!.left = current.right;
            } else {
                parent!.right = current.right;
             }
        } else if (current.right == null) {
            if (current == this.root) {
                this.root = current.left; 
            } else if (isLeftChild) {
                parent!.left = current.left;
            } else {
                parent!.right = current.left;
            }
        }

        // 删除有两个子节点的节点
        else {
            let successor = this.getSuccessor(current);

            if (current == this.root) {
                this.root = successor;
            } else if (isLeftChild) {
                parent!.left = successor;
            } else {
                parent!.right = successor; 
            }

            successor.left = current.left;
        }

        return true;
    }

    getSuccessor(deleteNode: Node) {
        let successorParent = deleteNode;
        let successor = deleteNode;
        let current = deleteNode.right;

        while (current != null) {
            successorParent = successor;
            successor = current;
            current = current.left;
        }

        if (successor != deleteNode.right) {
            successorParent.left = successor.right;
            successor.right = deleteNode.right;
        }

        return successor;
    }
}