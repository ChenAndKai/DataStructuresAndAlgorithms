import { LinkedList } from "./linked_list";

const linkedList = new LinkedList();

linkedList.append('a');
linkedList.append('b');
linkedList.append('c');
linkedList.append('d');

// console.log(linkedList)
// console.log(linkedList.insert(0, 'e'))
// console.log(linkedList.get(3))
// console.log(linkedList.indexOf('d'))
// console.log(linkedList.removeAt(2), linkedList);
// console.log(linkedList.update(3,'e'), linkedList);
// console.log(linkedList.remove('a'), linkedList);
console.log(linkedList.isEmpty(),linkedList.size())