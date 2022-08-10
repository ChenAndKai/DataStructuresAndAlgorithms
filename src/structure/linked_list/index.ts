/* 单项链表测试
import { LinkedList, } from "./linked_list";
const linkedList = new LinkedList();
linkedList.append('a');
linkedList.append('b');
linkedList.append('c');
linkedList.append('d');
console.log(linkedList)
console.log(linkedList.insert(0, 'e'))
console.log(linkedList.get(3))
console.log(linkedList.indexOf('d'))
console.log(linkedList.removeAt(2), linkedList);
console.log(linkedList.update(3,'e'), linkedList);
console.log(linkedList.remove('a'), linkedList);
console.log(linkedList.isEmpty(),linkedList.size())
*/

import { DoublyLikedList } from "./doubly_linked_list";
const linkedList = new DoublyLikedList();
linkedList.append("aaa");
linkedList.append("ccc");
linkedList.append("ddd");
linkedList.append("eee");
linkedList.insert(0, "000");
linkedList.insert(2, "bbb");
linkedList.insert(4, "fff");
console.log(linkedList);
// console.log(linkedList.get(2));
// console.log(linkedList.indexOf("fff"));
// console.log(linkedList.removeAt(0), linkedList);
// console.log(linkedList.removeAt(3), linkedList);
// console.log(linkedList.update(0, "1111"), linkedList);
// console.log(linkedList.remove("bbb"), linkedList);
console.log(linkedList.size(), linkedList.isEmpty());
