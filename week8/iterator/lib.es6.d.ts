interface IteratorResult<T>{
    done: boolean;
    value: T;
}

interface Iterator<T>{
    next(value?:any):IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(a?: any): IteratorResult<T>;
}

interface Iterable<T>{
    [Symbol.iterator]():Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T>{
    [Symbol.iterator]():IterableIterator<T>;
}
