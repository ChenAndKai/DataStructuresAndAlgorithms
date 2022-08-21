const MAX_LOAD_FACTOR = 0.75;
const MIN_LOAD_FACTOR = 0.75;

export class HashTable {
  storage: any[];
  count: number;
  limit: number;
  constructor() {
    this.storage = [];
    this.count = 0;
    this.limit = 8;
  }

  hashFunc(str: string, max: number) {
    let hashCode: number = 0;

    for (let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i);
    }

    hashCode = hashCode % max;

    return hashCode;
  }

  put(key: string, value: string | number) {
    const index = this.hashFunc(key, this.limit);

    let bucket = this.storage[index];
    if (bucket === undefined) {
      bucket = [];
      this.storage[index] = bucket;
    }

    let overide = false;
    for (let i = 0; i < bucket.length; i++) {
      let tuple: [string, string | number] = bucket[i];
      if (tuple[0] == key) {
        tuple[1] = value;
        overide = true;
      }
    }

    if (!overide) {
      bucket.push([key, value]);
      this.count++;

      if (this.count > MAX_LOAD_FACTOR * this.limit) {
        this.resize(this.limit * 2);
      }
    }
  }

  get(key: string) {
    const index = this.hashFunc(key, this.limit);

    const bucket = this.storage[index];
    if (bucket === undefined) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple: [string, string | number] = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    return null;
  }

  remove(key: string) {
    const index = this.hashFunc(key, this.limit);

    const bucket = this.storage[index];

    if (bucket === undefined) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple: [string, string | number] = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;

        if (this.limit > 8 && this.count < this.limit * MIN_LOAD_FACTOR) {
          this.resize(Math.floor(this.limit / 2));
        }
        return tuple[1];
      }
    }
  }

  isEmpty() {
    return this.count == 0;
  }

  size() {
    return this.count;
  }

  resize(newLimit: number) {
    let oldStorage = this.storage;

    this.limit = newLimit;
    this.storage = [];
    this.count = 0;

    oldStorage.forEach((bucket) => {
      if (bucket == null) {
        return;
      }

      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        this.put(tuple[0], tuple[1]);
      }
    });
  }
}
