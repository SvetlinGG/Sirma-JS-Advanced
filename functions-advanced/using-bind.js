
const person = {
    name: 'Svetlin',
    greet: function(){
        console.log(`Hello, my name is ${this.name}`);
        
    }
};
const person2 = {
    name: 'Pesho',
}
person.greet();
person.greet.apply(person2);

