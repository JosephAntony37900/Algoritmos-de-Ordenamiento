// models/LinkedList.js
import Node from "./Node.js";

class LinkedList {
    head;
    size;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    bubbleSort() {
        if (this.head == null) return;

        let swapped;
        let current;
        do {
            swapped = false;
            current = this.head;

            while (current.next != null) {
                if (current.value.business > current.next.value.business) {
                    let aux = current.value;
                    current.value = current.next.value;
                    current.next.value = aux;
                    swapped = true;
                }
                current = current.next;
            }
        } while (swapped);
    }

    mergeSort() {
        if (!this.head || !this.head.next) return;

        this.head = this.#mergeSortIterative(this.head);
    }

    #mergeSortIterative(head) {
        let step = 1;
        let left, right;
        let tail;
        const dummy = new Node(null);
        dummy.next = head;

        while (true) {
            let current = dummy.next;
            let left = current;
            current = this.#split(current, step);
            if (!current) break;
            let right = current;
            current = this.#split(current, step);

            tail = dummy;
            while (left || right) {
                if (!right || (left && left.value.business <= right.value.business)) {
                    tail.next = left;
                    left = left.next;
                } else {
                    tail.next = right;
                    right = right.next;
                }
                tail = tail.next;
            }

            tail.next = null;
            step *= 2;
        }

        return dummy.next;
    }

    #split(node, step) {
        if (!node) return null;

        for (let i = 1; node.next && i < step; i++) {
            node = node.next;
        }

        const next = node.next;
        node.next = null;
        return next;
    }

    radixSort() {
        const max = this.#getMax();
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            this.#countSort(exp);
        }
    }

    #getMax() {
        let max = this.head.value;
        let current = this.head.next;

        while (current) {
            if (current.value.business > max.business) {
                max = current.value;
            }
            current = current.next;
        }
        return max;
    }

    #countSort(exp) {
        const output = new Array(this.size);
        const count = new Array(10).fill(0);

        let current = this.head;
        while (current) {
            count[Math.floor(current.value / exp) % 10]++;
            current = current.next;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        current = this.head;
        while (current) {
            output[count[Math.floor(current.value / exp) % 10] - 1] = current.value;
            count[Math.floor(current.value / exp) % 10]--;
            current = current.next;
        }

        current = this.head;
        for (let i = 0; i < this.size; i++) {
            current.value = output[i];
            current = current.next;
      }
    }

    linearSearch(target) {
        let current = this.head
        while (current) {
            if (current.value.business === target) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
}

export default LinkedList;
