



//super simple just types by adding number then you cant pass strings
function add(val1: number, val2: number) {
    return val1 + val2;
}

add(1, 10);



export class Person {
    firstName: string;
    middleName: string;
    lastName: string;
    
    constructor(data?: any) {
        this.firstName = data.firstName || 'Dylan';
        this.lastName = data.lastName || 'Israel';
        this.middleName = data.middleName;    
    }
}
//person calls Person
//you can do first name, last name etc
//any optional values
function sayHello(person: Person) {
    return `Say Hello to My Little Friend, ${person.firstName}!`    
}

sayHello(new Person({firstName: 'Dylan'}));