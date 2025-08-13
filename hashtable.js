class HashTable {
 constructor(size) {
  this.data = new Array(size);
 }

 // Simple hash function
 hash(key) {
  let hashValue = 0;
  for (let i = 0; i < key.length; i++) {
     hashValue += (key.charCodeAt(i) * i) % this.data.length;
  }
  return hashValue;
 }

 // Method to insert key-value
 insert(key, value) {
  const address = this.hash(key);
  if (!this.data[address]) {
    this.data[address] = [];
  }
  this.data[address].push([key, value]);
return this.data; 
}

 // Method to search value by key
 search(key) {
  const address = this.hash(key);
  if (!this.data[address]) return null;

  for (let item of this.data[address]) {
    if (item[0] === key) {
      return item[1];
    }
  }
  return null;
 }

 // Method to delete key-value
 delete(key) {
    const address = this.hash(key)
    const item = this.data[address]

    if (item) {
      //* iterate over the item
      for (let i = 0; i < item.length; i++) {
        if (item[i][0] === key) {
          //* save the deleted item
          let deletedSpace = item[i]
          //* delete the item
          delete item[i]
          //* delete the item's space
          item.splice(i, 1)
          return deletedSpace
        }
      }
    }
  }

  getAllKeys(){
    let keys = [];
    for(let i=0; i<this.data.length; i++){
      if(this.data[i]!== undefined){
        let item =this.data[i];
        for(let j = 0; j<item.length; j++){
          keys.push(item[j][0])
        }
      }
    }
    return keys;
  }
  
}
const myHashTable = new HashTable(50);
myHashTable.insert("Mia", 14);
myHashTable.insert("Sol", 0.4);
myHashTable.insert("Alberti", 40);
myHashTable.insert("Jolie",50);
myHashTable.getAllKeys();
