import { Queue,passGame,PriorityQueue } from "./queue";

// const queue = new Queue();

// queue.enqueue('a');
// queue.enqueue('b');
// queue.enqueue(2);
// queue.enqueue('c');
// queue.enqueue('d');

// console.log(queue.items);
// console.log(queue.dequeue());
// console.log(queue.items);
// console.log(queue.front());
// console.log(queue.items);


// console.log(passGame(['a','b','c','d'],2));

const queue = new PriorityQueue();


queue.enqueue('aaa', 100);
queue.enqueue('bbb', 150);
queue.enqueue('ccc', 120);
queue.enqueue('ddd', 90);

queue.items.forEach(item => {
    console.log(item.element, item.priority);
})

