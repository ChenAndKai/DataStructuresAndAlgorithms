
type element = number | string

type priorityQueue = {
    element: element,
    priority?: number
}

export class Queue {
    items: priorityQueue[]
    constructor() {
        this.items = [];
    }

    //向队尾添加一个（或多个）新的项
    enqueue(element: element, priority?: number) {
        this.items.push({element,priority});
    }

    //移除队列的第一项(即排在队列最前面), 并返回被移除的元素
    dequeue() {
        return this.items.shift();
    }

    //返回队列的第一个元素-最先被添加，也将是最先被移除的元素，队列不做任何改动
    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    //如果队列中不包含任何元素，返回true，否则返回false
    isEmpty() {
        return this.items.length === 0;
    }

    //返回队列中包含的元素个数，与数组length属性类似
    size() {
        return this.items.length;
    }
}

class QueueElement {
    element: element;
    priority: number;
    constructor(element: element, priority: number) {
        this.element = element;
        this.priority = priority;
    }
}

export class PriorityQueue extends Queue {
    enqueue(element: element, priority: number) {
        const queueElement = new QueueElement(element, priority);
        
        if (this.isEmpty()) {
            this.items.push(queueElement);
        } else {
            let added: boolean = false;
            for (let i = 0; i < this.items.length; i++) {
                if (!this.items[i].priority) return;
                if (this.items[i].priority! > queueElement.priority) {
                    this.items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }

            if (!added) {
                this.items.push(queueElement);
            }
        }
    }
}


export function passGame(nameList: string[],num: number) {
    const queue = new Queue();
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            queue.enqueue(queue.dequeue()?.element!);
        }
        queue.dequeue()
    }

    return queue.front();
}