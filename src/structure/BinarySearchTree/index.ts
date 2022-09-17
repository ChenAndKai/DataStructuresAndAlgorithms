import { BinarySearchTree } from "./BinarySearchTree";

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(7);
bst.insert(32);
bst.insert(1);
bst.insert(30);
bst.insert(15);
bst.insert(52);
bst.insert(17);
bst.insert(40);
// console.log(bst);

var resultString = '';
// bst.preOrderTraversal((key: any) =>
//     resultString += key + '_'
// )

// bst.midOrderTraversal((key: any) =>
//     resultString += key + '_'
// )

// bst.postOrderTraversal((key: any) =>
//     resultString += key + "_"
// );

// console.log(resultString);

// console.log(bst.getMax(), bst.getMin())

// console.log(bst.search(10), bst.search(9), bst.search(26));


console.log(bst.remove(52))
var resultString = "";
bst.midOrderTraversal((key: any) =>
    resultString += key + ' '
)
console.log(resultString);