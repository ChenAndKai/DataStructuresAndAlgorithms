export class Stack {
    items: Partial<number|string>[];
    constructor() {
        this.items = []
    }

    //移除栈顶元素，同时返回被移除的元素
    push(element: number | string) {
        this.items.push(element);
    }

    //移除栈顶元素，同时返回被移除的元素
    pop() {
        return this.items.pop();
    }

    //返回栈顶元素，不对栈做任何处理
    peak() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    //如果栈里没有任何元素就返回true，否则返回false
    isEmpty() {
        return this.items.length === 0;
    }

    //返回元素个数，这个方法和数组的Length属性类似
    size() {
        return this.items.length
    }
}


export function dec2bin(num: number) {
    const stack = new Stack();

    while (num > 0) {
        let remainder = num % 2;
        num = Math.floor(num / 2);
        stack.push(remainder);
    }

    let binString = '';
    while (!stack.isEmpty()) {
        binString += stack.pop();
    }

    return binString;
}