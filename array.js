class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
get(index) {
    return this.data[index];
}

push(element){
    this.data[this.length] = element;

    this.length++;

    return this.data;
}
unshift(element){
    //no permite insertar datos como strings vacíos (" ")
    //o el numero 0, pues estos valores en condicionales if representan false,
    // pero estos son datos validos para insertar.
     if (!element) {
      return this.length
    }
    for (let i = this.length-1; i>=0; i--) {
        this.data[i+1]= this.data[i];  
        }
                
            this.data[0]= element;
    this.length++;

    return this.data;
}
shift(){
       let item = this.data[0];
    if (this.length <= 0) {
      return undefined;
    }
    //for (let i = 0; i < this.length-1; i++) {
    //  this.data[i] = this.data[i + 1];
    //}
    //delete this.data[this.length-1];
    //this.length--;
    this.shiftIndex(0);
    return item;

  }

delete(index) {
    let item = this.data[index];
    
    this.shiftIndex(index);
    return  item;
}
shiftIndex(index) {
    for(let i = index; i < this.length-1; i++){
        this.data[i] = this.data[i+1]
    }
        delete this.data[this.length-1];
    this.length--;
}
pop() {
    let lastItem = this.data[this.length-1];
    
    delete this.data[this.length-1];

    this.length--;
    return lastItem;
}
}
const myArray = new MyArray();

myArray.push("Hola");
myArray.push("soy");
myArray.push("Jolie");
myArray.push("and Iam awesome");
myArray.delete(1);
myArray.unshift("and Iam recovered");
myArray.shift();