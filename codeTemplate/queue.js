// 큐는 Dictionary로 구현해야 속도가 빠르다
// 큐는 O(1)의 시간 복잡도를 보장한다.
// 줄을 서 있는 것과 같은 형태이다. (head / tail)
// FIFO

class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(elm) {
        this.items[this.tail] = elm;
        this.tail++;
    }

    dequeue() {
        const value = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return value;
    }

    peek() {
        return this.items[this.head];
    }

    getLength() {
        return this.tail - this.head;
    }
}