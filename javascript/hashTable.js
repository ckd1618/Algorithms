class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(str, num) {
    var hashOutput = this._hash(str);
    if (!this.data[hashOutput]) {
      this.data[hashOutput] = [];
    }
    this.data[hashOutput].push([str, num]);
    return this.data;
  }

  get(str) {
    var hashOutput = this._hash(str);
    if (this.data[hashOutput]) {
      for (let i = 0; i < this.data[hashOutput].length; i++) {
        if (this.data[hashOutput][i][0] === str) {
          return this.data[hashOutput][i][1];
        }
      }
    }
    return null;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'));