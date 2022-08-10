import { element, LinkedList, MyNode } from "./linked_list";

class DoublyNode extends MyNode {
  prev?: DoublyNode | null;
  next: DoublyNode | null;
  constructor(element: element) {
    super(element);
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLikedList extends LinkedList {
  tail: DoublyNode | null;
  head: DoublyNode | null;
  constructor() {
    super();
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  // 链表尾部新增一项
  append(element: element) {
    const newNode = new DoublyNode(element);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  // 链表特定位置插入一个新的项
  insert(position: number, element: element): boolean {
    if (position < 0 || position > this.length) return false;

    const newNode = new DoublyNode(element);

    if (position == 0) {
      if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (position == this.length) {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let currentNode = this.head,
        i = 0;
      while (i++ < position) {
        currentNode = currentNode!.next;
      }

      currentNode!.prev!.next = newNode;
      newNode.prev = currentNode?.prev;
      currentNode!.prev = newNode;
      newNode.next = currentNode;
    }
    this.length++;
    return true;
  }

  // 获取对应位置的元素
  //   get(position: number): element {}

  // 返回元素在链表中的索引，如果链表中没有该元素则返回-1
  //   indexOf(element: element): number {
  //     return -1;
  //   }

  // 从链表特定位置移除一项

  removeAt(position: number): element | null | undefined {
    if (position < 0 || position > this.length - 1) return null;
    let i = 0;
    let currentNode = this.head;
    if (position == 0) {
      if (this.length == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head!.next;
        this.head!.prev = null;
      }
    } else if (position == this.length - 1) {
      currentNode = this.tail;
      this.tail!.prev!.next = null;
      this.tail = this.tail!.prev!;
    } else {
      let index = 0;
      while (index++ < position) {
        currentNode = currentNode!.next;
      }

      currentNode!.prev!.next = currentNode?.next!;
      currentNode!.next!.prev = currentNode?.prev!;
    }

    this.length--;
    return currentNode?.element;
  }

  // 修改某个位置的元素
  //   update(position: number, element: element): element | null | undefined {
  //     return "";
  //   }

  // 从链表中移除一项
  //   remove(element: element): void {}

  // 如果链表中不包含任何元素，返回true, 否则返回false
  //   isEmpty(): boolean {
  //     return false;
  //   }

  // 返回链表包含的元素个数，与数组的length属性类似
  //   size(): number {
  //     return 1;
  //   }
}
