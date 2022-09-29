//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
 buffer;
 bufferIsFull;
  readIndex;
  writeIndex;
  constructor(size) {
    this.buffer = new Array(size)
      this.bufferIsFull = false
    this.readIndex = 0
    this.writeIndex = 0

  }

  write(value) {
    if (this.bufferIsFull === true) {
      throw new BufferFullError()
    }
    this.buffer[this.writeIndex] = value
    this.writeIndex = this.nextIndex(this.writeIndex)
    if (this.readIndex === this.writeIndex) {
      this.bufferIsFull = true
    }
  }

  read() {
    if (this.bufferIsFull === false && this.readIndex === this.writeIndex) {
      throw new BufferEmptyError()
    }

    if (this.bufferIsFull === true) {
      this.bufferIsFull = false
    }

    const buffer = this.buffer[this.readIndex]
    this.readIndex = this.nextIndex(this.readIndex)
    return buffer
  }

  forceWrite(buffer) {
    if (this.bufferIsFull === false) {
      return this.write(buffer)
    }

      this.buffer[this.writeIndex] = buffer
      this.readIndex = this.nextIndex(this.readIndex)
      this.writeIndex = this.nextIndex(this.writeIndex)

  }

  clear() {
      this.bufferIsFull = false
      this.readIndex = 0
      this.writeIndex = 0
  }
 nextIndex(index) {
    return (index + 1) % this.buffer.length;
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor(message) {
    super(message);
  }
}

export class BufferEmptyError extends Error {
  constructor(message) {
    super(message);
  }
}
