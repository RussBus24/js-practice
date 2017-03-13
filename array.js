var memory = require('./memory');

var Array = function() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
};
Array.SIZE_RATIO = 3;

Array.prototype.push = function(value) {
    if (this.length >= this._capacity) {
        this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
};

Array.prototype._resize = function(size) {
    var oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
        throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
};