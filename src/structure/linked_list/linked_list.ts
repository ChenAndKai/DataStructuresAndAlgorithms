export type element = number | string;

export class MyNode {
  element: element;
  next: MyNode | null;
  constructor(element: element) {
    this.element = element;
    this.next = null;
  }
}

export class LinkedList {
  head: MyNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 向列表尾部添加一个新的项
  append(element: element) {
    const newNode = new MyNode(element);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current: MyNode | null = this.head;
      while (current.next) {
        current = current?.next;
      }

      current.next = newNode;
    }
    this.length++;
  }

  //向列表特定位置插入一个新的项
  insert(position: number, element: element): boolean {
    if (position < 0 || position > this.length) return false;

    const newNode = new MyNode(element);

    if (position == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let count: number = 0;
      let currnet: MyNode | null = this.head;
      let previous: MyNode | null = null;
      while (count++ < position) {
        previous = currnet;
        currnet = currnet!.next;
      }
      previous!.next = newNode;
      newNode.next = currnet;
    }

    this.length++;
    return true;
  }

  //获取对应位置的元素
  get(position: number) {
    if (position < 0 || position > this.length - 1) return null;

    let count: number = 0;
    let current: MyNode | null = this.head;
    while (count++ < position) {
      current = current!.next;
    }

    return current?.element;
  }

  //返回元素在列表中的索引，如果列表中没有该元素则返回-1
  indexOf(element: element) {
    let current: MyNode | null = this.head;
    let count: number = 0;

    while (current) {
      if (current?.element === element) {
        return count;
      }
      count++;
      current = current!.next;
    }
    return -1;
  }

  //修改某个位置的元素
  update(position: number, element: element) {
    const result = this.removeAt(position);
    this.insert(position, element);
    return result;
  }

  //从列表的特定位置移除一项
  removeAt(position: number) {
    if (position < 0 || position > this.length - 1) return null;

    let current: MyNode | null = this.head;

    if (position == 0) {
      this.head = current!.next;
    } else {
      let count = 0;
      let previous: MyNode | null = null;
      while (count++ < position) {
        previous = current;
        current = current!.next;
      }
      previous!.next = current!.next;
    }
    this.length--;

    return current?.element;
  }

  //从列表中移除一项
  remove(element: element) {
    const index = this.indexOf(element);
    if (index == -1) {
      return;
    } else {
      this.removeAt(index);
    }
    return index;
  }

  //如果链表中不包含任何元素，返回true，否则返回false
  isEmpty() {
    return this.length == 0;
  }

  //返回链表包含的元素个数，与数组length属性类似
  size() {
    return this.length;
  }
}
