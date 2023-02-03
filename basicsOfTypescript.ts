// to use ts, you need to run npm i typescript
// typescript, just like ES6+ javascript, is compiled into ES5 javascript



// an interface gives information about the datatypes of the properties inside an object
// if there is ?, that means it's an optional field
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  imageURL?: string;
}

// here we have an interface that has another smaller interface inside of it
interface Image {
  url: string;
  size: { 
    width: number;
    height: number 
  }
}

// you can even reference an interface inside an interface
interface Product {
  id: string;
  name: string;
  description: string;
  image: Image;
}

// we can create an interface that changes the datatype of one of it's properties based on an argument
interface Backpack <T> {
  id: string;
  product: T;
  quatity: number;
}



// this is how you create an object, based off a certain interface
const user: User = {
  id: 2,
  name: "James",
  email: "james@gmail.com",
  password: "12345",
  role: "Optometrist"
}

// this is how you define a variable in ts
const firstName: string = "Pedro"

// we can also access the type of anything inside an interface
// User["id"] returns number as a type, just like typeof returns a type



// we can create an array of objects that are based on a certain interface
// can also do const usersArray: Array<User> = []
const usersArray: User[] = [

]

// we can also define an array/object based on multiple interfaces if need be
// | means OR
const usersOrImageArray1: User[] | Image[] = []; // here we have just initialised it to an empty array



// functions
// here we give the parameters a type, and also after the brackets we specify what will be returned, we can leave both or either empty obviously because we don't need to have parameters or a returned value
const getUsersArray = function(count: number): User[] {
  return usersArray;
}



// enumerators
// this means that the only value the Cheese variable can take is one of these options
enum Cheese {
  cheddar = "cheddar",
  goat = "goat",
  blue = "blue",
  american = "american"
}

const servesCheese = (cheeseType: Cheese, servings: number) => {
  console.log(`You want ${servings} of ${cheeseType} cheese`)
}

// servesCheese("Swiss", 7) won't work because "Swiss" is not part of the Cheese enum list

servesCheese(Cheese.goat, 10) // this will work



// it's important to note that you can create a react app based entirely on typescript as well, all you need is to write the command --> npx create-react-app name-of-react-app --template typescript
// if you are going to use ts with react, you need to learn a bit more about ts and how it interacts with JSX, functional components etc
