class circularBuffer {
    constructor(size) {
        super();
        this.buffer = new Array(size);
        this.head = 0;
        this.point = 0;
    }
    
    isEmpty() {
        return buffer.every(n => !n);
    }

    isFull() {
        return (buffer[this.point]) ? true : false;
    }

    updatePoint(n) {
        this.point = (n) ? n : ++point % size;
    }

    updateHead(n) {
        this.head = (n) ? n : ++head % size;
    }

    read() {
        if (this.isEmpty()) throw new Error('buffer is empty');

        let pop = buffer[head];
        this.buffer[head] = null;
        this.updateHead();

        return pop;
    }

    write(data) {
        if (this.isFull()) throw new Error('buffer is full');

        if (data) {
            this.buffer[point] = data;
            this.updatePoint();
        }
    }

    forceWrite(data) {
        this.buffer[point] = data;
        updatePoint();
        updateHead();
    }

    clear() {
        this.buffer.forEach((el, i, a) => a[i] = null);

        updatePoint(0);
        updateHead(0);
    }
}
