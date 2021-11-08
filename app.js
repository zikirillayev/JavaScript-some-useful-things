function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    }
}
 
const yusuf = new User('Yusuf',)
yusuf.hello()

const samar = new User('samar' , 9 )
console.log(samar)
samar.hello()


// 1) Simple function this = window ______________________________

// what is THIS

// function hi(){
//     console.log(this)
// }
// hi()

// function showThis(a,b){
//     console.log(this)
//     function sum(){
//         console.log(this)
//         return a + b
//     }
//     console.log(sum())
// }
// showThis(+(prompt('a')),+(prompt('b')))

// ________________________________________________



// 2) passage about 'with method Obj'_________________________
// const obj = {
//     a:20,
//     b:15,
//     sum: function(){
//         console.log('Hello')
//         console.log(`${this.a} + ${this.b}`)
//     }
// }
// obj.sum()
// __________________________________________________



function sayName(surname){
   console.log(this);
   console.log(this.name + " " + surname );
}
const user = {
    name: "Samar"
}

// USEFUL = this: call, apply , bind.

sayName.call(user, 'Badriddinov')
sayName.apply(user, ['Badriddinov'])

function count(num){
    return this * num
}
const double = count.bind(2)
console.log(double(13));
console.log(double(14));
console.log(double(15));



// Button practice
const btn = document.querySelector('button')
btn.addEventListener('click' , function (){
    this.style.backgroundColor = 'crimson'
// btn.addEventListener('click' , event => {
    // event.target.this.style.backgroundColor = 'crimson'
})

const obj = {
    num : 5,
    name: "Samar",
    sayNumber: function (){
        const say = () =>{
            console.log(this.num)
            console.log(this.name)
        }
        say()
    }
}
obj.sayNumber()



// This with CLASSES

class Square{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    calcArea(){
        return this.width * this.height
    }
}

class ColorSquare extends Square {
    constructor(width, height, text, bg){
        super(width, height)
        this.text = text;
        this.bg = bg
    }
    showMyProps(){
        console.log(`The text ${this.text} and ${this.bg}`)
    }
}

const firstSquare = new Square(100 , 100)
const secondSquare = new Square(50, 2)
console.log(firstSquare.calcArea())
console.log(secondSquare.calcArea())

const div = new ColorSquare(10, 20, 'Hello', 'crimson')
div.showMyProps()
console.log(div.calcArea())
