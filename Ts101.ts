// Primitives types
//1.numbers
let x: number = 2;
let y: number = 3.2;
//2.string
let text: string = 'Hello';
//3.boolean
let havingMoney: boolean = true;
//4.undefined 
let myMoney = undefined; // value working with variables
//5.null
let myCat = null; // object working with objects
// ============================================
// ANY type
let myVar: any;
// ============================================
// Arrays
let array1: number[] = [1, 2, 3, 4, 5]; // first way
let array2: Array<number> = [1, 2, 3, 4, 5]; // second way with type > Array
let array3: string[] = ['a', 'b', 'c', 'd', 'e'];
let array4: any = new Array(); // create an array of any type
// ============================================
// Functions
function absoluteValue(x: number): number{
    let y;
    if( x < 0 || x >= 0){
        this.y= Math.abs(x);
    }
    return y;
}

console.log(absoluteValue(5));
// ============================================
// Interfaces
// We can have { properties, methods, events }
// We do not have implementation
// do not exist in javascript

interface IUser {
    username: string;
    password: string;
}
// ============================================





