
#  Typescript + ES6
[TOC]
## 1. Typescript
###  1.1. What is Typescript and Why do we need it?
  - Typescript ís a free & open source programming language , developed by Microsoft.  It is a superset of JavaScript, and adds optional static typing and class.
  - We need Typescript because : 
	  - Typescript will compile the code and generate compilation errors, if it finds some syntax errors. This helps to highlight errors before the script is run.
	  - Easy to develop the project
	  - There are many Framework to choose
	  - It's free open & source
### 1.2. How can you get Typescript and install it?
>npm install -g typescript
### 1.3. How do you compile Typescript files?
>tsc filename.ts
### 1.4. Which Object Oriented terms are supported by Typescript? Write an example.
- Modules
- Classes and Objects
-  Interfaces
- Data types
- Member Functions
Example: 
```
module Animal {	
	export class Cat {	
	private name: string;
	private furry: string;
	constructor(name: string, furry: string) {	
		this.name = name;
		this.furry = furry;	
		}					
	sayHello(){
		document.write(`My name is ${this.name}. I havev ${this.furry} color`);
			}			
	}			
}			
var cat= new Animal.Cat("Boo", "black");			
cat.sayHello();
```


### 1.5.  How do you implement inheritance in Typescript? Write an example.
To implement inheritance in Typescript, we use `extends` 
```
class Animal {
	leg: number;
	furry: string;
	constructor(private name: string) {
		this.name = name;
	}

	sayHello(){
		document.write(`My name is ${this.name}. I havev ${this.leg} legs and ${this.furry}.`);
	}
}

class Dog extends Animal {
	
	constructor(name: string) {
		super(name);
		this.leg = 4;
		this.furry = "brown"
	}
}

var cun = new Dog('Boo');
cun.sayHello();
```

## 2.ES6
  - Write an example for each of the following new features in ES6:  `Block scope variable` `Template Literals` `Multi-line strings` `Arrow functions` `For...of` `Default parameters`
### Block scope variable 
```
function func() {
    if (true) {
        let name_1 = "Phuong";
    }
    console.log(name); // errors
}
function func1() {
    if (true) {
        var name = "Phuong";
    }
    console.log(name); // Phuong
}

```
### Template Literals
```
console.log(`1 + 1 = ${1 + 1}`);// 1 + 1 = 2
```
### Multi-line strings
```
console.log(`1 and 1 make
 ${1 + 1}`);
//1+1=
//2

```
###  Arrow functions
```
var theNumberAfter = [1, 2, 3].map(x => x +1 );
```
### For...of
```
let array = [1, 2, 3, 4, 5];

for (let value of array) {
  console.log(value);
}
```

### Default parameters
```
function add (a, b = 1) {
  return a + b;
}
add (1)//2
add (2,2)//4

```

