export const quiz = [
  {
    question: `Q. What's the output?`,
    content: `
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}`,
    choices: [
      "0 1 2 and 0 1 2",
      "0 1 2 and 3 3 3",
      "3 3 3 and 0 1 2"
    ],
    answer: "3 3 3 and 0 1 2"
  },
  {
    question: `Q. What's the output?`,
    content: `
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());`,
    choices: [
      "20 and 62.83185307179586",
      "20 and NaN",
      "20 and 63",
      "NaN and 63"
    ],
    answer: "20 and NaN"
  },
  {
    question: `Q. What's the output?`,
    content: `
+true;
!'Lydia';`,
    choices: [
      "1 and false",
      "false and NaN",
      "false and false"
    ],
    answer: "1 and false"
  },
  {
    question: `Q. Which one is true?`,
    content: `
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};`,
    choices: [
      "mouse.bird.size is not valid",
      "mouse[bird.size] is not valid",
      "mouse[bird['size']] is not valid",
      "All of them are valid"
    ],
    answer: "mouse.bird.size is not valid"
  },
  {
    question: `Q. What's the output?`,
    content: `
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);`,
    choices: [
      "Hello",
      "Hey!",
      "undefined",
      "Error"
    ],
    answer: "Hello"
  },
  {
    question: `Q. What's the output?`,
    content: `
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));`,
    choices: [
      "orange",
      "purple",
      "green",
      "TypeError"
    ],
    answer: "TypeError"
  },
  {
    question: `Q. What's the output?`,
    content: `
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);`,
    choices: [
      "true false true",
      "false false true",
      "true false false",
      "false true true",
    ],
    answer: "true false false"
  },
  {
    question: `Q. What's the output?`,
    content: `function bark() {
                    console.log('Woof!');
                  }

                  bark.animal = 'dog';`,
    choices: [
      "Nothing, this is totally fine!",
      "SyntaxError. You cannot add properties to a function this way.",
      "'Woof' gets logged.",
      "ReferenceError",
    ],

    answer: "Nothing, this is totally fine!"
  },

  {
    question: `What is the correct answer?`,
    content: `What are the three phases of event propagation?`,
    choices: [
      "Target > Capturing > Bubbling",
      "Bubbling > Target > Capturing",
      "Target > Bubbling > Capturing",
      "Capturing > Target > Bubbling",
    ],
    answer: "Capturing > Target > Bubbling"
  },

  {
    question: `What's the output?`,
    content: `"What are the three phases of event propagation?"`,
    choices: [
      "Target > Capturing > Bubbling",
      "Bubbling > Target > Capturing",
      "Target > Bubbling > Capturing",
      "Capturing > Target > Bubbling",
    ],
    answer: "Capturing > Target > Bubbling"
  },

  {
    question: `What's the output?`,
    content: `var num = 8;\nvar num = 10;\n\nconsole.log(num);`,
    choices: [
      "8",
      "10",
      "SyntaxError",
      "ReferenceError",
    ],
    answer: "10"
  },
  {
    question: `What's the output?`,
    content: `const obj = { 1: 'a', 2: 'b', 3: 'c' };\nconst set = new Set([1, 2, 3, 4, 5]);\n\nobj.hasOwnProperty('1');\nobj.hasOwnProperty(1);\nset.has('1');\nset.has(1);`,
    choices: [
      "false true false true",
      "false true true true",
      "true true false true",
      "true true true true",
    ],
    answer: "true true false true"
  },
  {
    question: `What's the output?`,
    content: `const obj = { a: 'one', b: 'two', a: 'three' };\nconsole.log(obj);`,
    choices: [
      "{ a: 'one', b: 'two' }",
      "{ b: 'two', a: 'three' }",
      "{ a: 'three', b: 'two' }",
      "SyntaxError",
    ],
    answer: "{ a: 'three', b: 'two' }"
  },
  {
    question: `What is the correct answer?`,
    content: `The JavaScript global execution context creates two things for you: the global object, and the \"this\" keyword.`,
    choices: [
      "true",
      "false",
      "it depends",
    ],
    answer: "true"
  },
  {
    question: `What's the output?`,
    content: `for (let i = 1; i < 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}`,
    choices: [
      "1 2",
      "1 2 3",
      "1 2 4",
      "1 3 4",
    ],
    answer: "1 2 4"
  },
  {
    question: `What's the output?`,
    content: `String.prototype.giveLydiaPizza = () => {\n  return 'Just give Lydia pizza already!';\n};\n\nconst name = 'Lydia';\n\nconsole.log(name.giveLydiaPizza());`,
    choices: [
      "'Just give Lydia pizza already!'",
      "TypeError: not a function",
      "SyntaxError",
      "undefined",
    ],
    answer: "'Just give Lydia pizza already!'"
  },
  {
    question: `What's the output?`,
    content: `const a = {};\nconst b = { key: 'b' };\nconst c = { key: 'c' };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);`,
    choices: [
      "123",
      "456",
      "undefined",
      "ReferenceError",
    ],
    answer: "456"
  },
  {
    question: `What's the output?`,
    content: `const foo = () => console.log('First');\nconst bar = () => setTimeout(() => console.log('Second'));\nconst baz = () => console.log('Third');\n\nbar();\nfoo();\nbaz();`,
    choices: [
      "First Second Third",
      "First Third Second",
      "Second First Third",
      "Second Third First",
    ],
    answer: "First Third Second"
  },
  {
    question: `What is the event.target when clicking the button?`,
    content: `<div onclick=\"console.log('first div')\">\n  <div onclick=\"console.log('second div')\">\n    <button onclick=\"console.log('button')\">\n      Click!\n    </button>\n  </div>\n</div>`,
    choices: [
      "Outer div",
      "Inner div",
      "button",
      "An array of all nested elements.",
    ],
    answer: "button"
  },
  {
    question: `When you click the paragraph, what's the logged output?`,
    content: `<div onclick=\"console.log('div')\">\n  <p onclick=\"console.log('p')\">\n    Click here!\n  </p>\n</div>`,
    choices: [
      "p div",
      "div p",
      "p",
      "div",
    ],
    answer: "p div"
  },
  {
    question: `What's the output?`,
    content: `function sayHi() {\n  return (() => 0)();\n}\n\nconsole.log(typeof sayHi());`,
    choices: [
      "'number'",
      "'string'",
      "'object'",
      "'undefined'",
    ],
    answer: "'string'"
  },
  {
    question: `Which of these values are falsy?`,
    content: `0;\nnew Number(0);\n('');\n(' ');\nnew Boolean(false);\nundefined;`,
    choices: [
      "0, '', undefined",
      "0, new Number(0), '', new Boolean(false), undefined",
      "0, '', new Boolean(false), undefined",
      "All of them are falsy",
    ],
    answer: "0, '', undefined",
  },
  {
    question: `What's the output?`,
    content: `console.log(typeof typeof 1);`,
    choices: [
      "'number'",
      "'string'",
      "'object'",
      "'undefined'",
    ],
    answer: "'string'"
  },


  {
    question: `What's the output?`,
    content: `const numbers = [1, 2, 3];\nnumbers[10] = 11;\nconsole.log(numbers);`,
    choices: [
      "[1, 2, 3, null x 7, 11]",
      "[1, 2, 3, 11]",
      "[1, 2, 3, empty x 7, 11]",
      "SyntaxError",
    ],
    answer: "[1, 2, 3, empty x 7, 11]",
  },
  {
    question: `What's the output?`,
    content: `(() => {\n  let x, y;\n  try {\n    throw new Error();\n  } catch (x) {\n    (x = 1), (y = 2);\n    console.log(x);\n  }\n  console.log(x);\n  console.log(y);\n})();`,
    choices: [
      "1 undefined 2",
      "undefined undefined undefined",
      "1 1 2",
      "1 undefined undefined",
    ],
    answer: "1 undefined 2",
  },
  {
    question: `What is the correct answer?`,
    content: `Everything in JavaScript is either a...`,
    choices: [
      "primitive or object",
      "function or object",
      "trick question! only objects",
      "number or object",
    ],
    answer: "primitive or object",
  },
  {
    question: `What's the output?`,
    content: `[[0, 1], [2, 3]].reduce(\n  (acc, cur) => {\n    return acc.concat(cur);\n  },\n  [1, 2],\n);`,
    choices: [
      "[0, 1, 2, 3, 1, 2]",
      "[6, 1, 2]",
      "[1, 2, 0, 1, 2, 3]",
      "[1, 2, 6]",
    ],
    answer: "[1, 2, 0, 1, 2, 3]",
  },
  {
    question: `What's the output?`,
    content: `!!null;\n!!'';\n!!1;`,
    choices: [
      "false true false",
      "false false true",
      "false true true",
      "true true false",
    ],
    answer: "false false true",
  },
  {
    question: `What does the setInterval method return in the browser?`,
    content: `setInterval(() => console.log('Hi'), 1000);`,
    choices: [
      "a unique id",
      "the amount of milliseconds specified",
      "the passed function",
      "undefined",
    ],
    answer: "a unique id",
  },
  {
    question: `What does this return?`,
    content: `[...'Lydia'];`,
    choices: [
      "[\"L\", \"y\", \"d\", \"i\", \"a\"]",
      "[\"Lydia\"]",
      "[[], \"Lydia\"]",
      "[[\"L\", \"y\", \"d\", \"i\", \"a\"]]",
    ],
    answer: "[\"L\", \"y\", \"d\", \"i\", \"a\"]",
  },
  {
    question: `What's the output?`,
    content: `function* generator(i) {\n  yield i;\n  yield i * 2;\n}\n\nconst gen = generator(10);\n\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);`,
    choices: [
      "[0, 10], [10, 20]",
      "20, 20",
      "10, 20",
      "0, 10 and 10, 20",
    ],
    answer: "10, 20",
  },
  {
    question: `What does this return?`,
    content: `const firstPromise = new Promise((res, rej) => {\n  setTimeout(res, 500, 'one');\n});\n\nconst secondPromise = new Promise((res, rej) => {\n  setTimeout(res, 100, 'two');\n});\n\nPromise.race([firstPromise, secondPromise]).then(res => console.log(res));`,
    choices: [
      "\"one\"",
      "\"two\"",
      "\"two\" \"one\"",
      "\"one\" \"two\"",
    ],
    answer: "two",
  },
  {
    question: `What's the output?`,
    content: `let person = { name: 'Lydia' };\nconst members = [person];\nperson = null;\n\nconsole.log(members);`,
    choices: [
      "null",
      "[null]",
      "[{}]",
      "[{ name: \"Lydia\" }]",
    ],
    answer: "[{ name: \"Lydia\" }]",
  },
  {
    question: `What's the output?`,
    content: `const person = {\n  name: 'Lydia',\n  age: 21,\n};\n\nfor (const item in person) {\n  console.log(item);\n}`,
    choices: [
      "{ name: \"Lydia\" }, { age: 21 }",
      "\"name\", \"age\"",
      "\"Lydia\", 21",
      "[\"name\", \"Lydia\"], [\"age\", 21]",
    ],
    answer: "\"name\", \"age\"",
  },
  {
    question: `What's the output?`,
    content: `console.log(3 + 4 + '5');`,
    choices: [
      "\"345\"",
      "\"75\"",
      "12",
      "\"12\"",
    ],
    answer: "\"75\"",
  },
  {
    question: `What's the value of num?`,
    content: `const num = parseInt('7*6', 10);`,
    choices: [
      "42",
      "\"42\"",
      "7",
      "NaN",
    ],
    answer: "7",
  },
  {
    question: `What's the output?`,
    content: `[1, 2, 3].map(num => {\n  if (typeof num === 'number') return;\n  return num * 2;\n});`,
    choices: [
      "[]",
      "[null, null, null]",
      "[undefined, undefined, undefined]",
      "[ 3 x empty ]",
    ],
    answer: "[undefined, undefined, undefined]",
  },

  {
    question: "What's the output?",
    content: `function getInfo(member, year) {
    member.name = 'Lydia';
    year = '1998';
  }
  
  const person = { name: 'Sarah' };
  const birthYear = '1997';
  
  getInfo(person, birthYear);
  
  console.log(person, birthYear);`,
    choices: [
      "{ name: \"Lydia\" }, \"1997\"",
      "{ name: \"Sarah\" }, \"1998\"",
      "{ name: \"Lydia\" }, \"1998\"",
      "{ name: \"Sarah\" }, \"1997\"",
    ],
    answer: "{ name: \"Lydia\" }, \"1997\"",
  },
  {
    question: "What's the output?",
    content: `function Car() {
    this.make = 'Lamborghini';
    return { make: 'Maserati' };
  }
  
  const myCar = new Car();
  console.log(myCar.make);`,
    choices: [
      "\"Lamborghini\"",
      "\"Maserati\"",
      "ReferenceError",
      "TypeError",
    ],
    answer: "\"Maserati\"",
  },
  {
    question: "What's the output?",
    content: `(() => {
    let x = (y = 10);
  })();
  
  console.log(typeof x);
  console.log(typeof y);`,
    choices: [
      "\"undefined\", \"number\"",
      "\"number\", \"number\"",
      "\"object\", \"number\"",
      "\"number\", \"undefined\"",
    ],
    answer: "\"undefined\", \"number\"",
  },
  {
    question: "What's the output?",
    content: "const set = new Set([1, 1, 2, 3, 4]);\n\nconsole.log(set);",
    choices: [
      "[1, 1, 2, 3, 4]",
      "[1, 2, 3, 4]",
      "{1, 1, 2, 3, 4}",
      "{1, 2, 3, 4}",
    ],
    answer: "{1, 2, 3, 4}",
  },
  {
    question: "What's the output?",
    content: `const name = 'Lydia';
  age = 21;
  
  console.log(delete name);
  console.log(delete age);`,
    choices: [
      "false, true",
      "\"Lydia\", 21",
      "true, true",
      "undefined, undefined",
    ],
    answer: "false, true",
  },
  {
    question: "What's the output?",
    content: `const numbers = [1, 2, 3, 4, 5];
  const [y] = numbers;
  
  console.log(y);`,
    choices: [
      "[[1, 2, 3, 4, 5]]",
      "[1, 2, 3, 4, 5]",
      "1",
      "[1]",
    ],
    answer: "1",
  },
  {
    question: "What's the output?",
    content: `const user = { name: 'Lydia', age: 21 };
  const admin = { admin: true, ...user };
  
  console.log(admin);`,
    choices: [
      "{ admin: true, user: { name: \"Lydia\", age: 21 } }",
      "{ admin: true, name: \"Lydia\", age: 21 }",
      "{ admin: true, user: [\"Lydia\", 21] }",
      "{ admin: true }",
    ],
    answer: "{ admin: true, name: \"Lydia\", age: 21 }",
  },
  {
    question: "What's the output?",
    content: `const person = { name: 'Lydia' };
  
  Object.defineProperty(person, 'age', { value: 21 });
  
  console.log(person);
  console.log(Object.keys(person));`,
    choices: [
      "{ name: \"Lydia\", age: 21 }, [\"name\", \"age\"]",
      "{ name: \"Lydia\", age: 21 }, [\"name\"]",
      "{ name: \"Lydia\"}, [\"name\", \"age\"]",
      "{ name: \"Lydia\"}, [\"age\"]",
    ],
    answer: "{ name: \"Lydia\", age: 21 }, [\"name\"]",
  },
  {
    question: "What's the output?",
    content: `const settings = {
       username: 'lydiahallie',
    level: 19,
    health: 90,
    const data = JSON.stringify(settings, ['level', 'health']);
    console.log(data);`,
  
  
    choices: [
      "{\"level\":19, \"health\":90}",
      "{\"username\": \"lydiahallie\"}",
      "[\"level\", \"health\"]",
      "{\"username\": \"lydiahallie\", \"level\":19, \"health\":90}",
    ],
  
    answer: "{\"level\":19, \"health\":90}",
  },
  {
    question: "What's the output?",
    content: `console.log(Number(2) === Number(2));
  console.log(Boolean(false) === Boolean(false));
  console.log(Symbol('foo') === Symbol('foo'));`,
    choices: [
      "true, true, false",
      "false, true, false",
      "true, false, true",
      "true, true, true",
    ],
    answer: "true, true, false",
  },
  {
    question: "What's the output?",
    content: `console.log('🥑' + '💻');`,
    choices: [
      "\"🥑💻\"",
      "257548",
      "A string containing their code points",
      "Error",
    ],
    answer: "\"🥑💻\"",
  },
  {
    question: "What's the output?",
    content: `const animals = {};
  let dog = { emoji: '🐶' }
  let cat = { emoji: '🐈' }
  
  animals[dog] = { ...dog, name: "Mara" }
  animals[cat] = { ...cat, name: "Sara" }
  
  console.log(animals[dog]);`,
    choices: [
      "{ emoji: \"🐶\", name: \"Mara\" }",
      "{ emoji: \"🐈\", name: \"Sara\" }",
      "undefined",
      "ReferenceError",
    ],
    answer: "{ emoji: \"🐈\", name: \"Sara\" }",
  },
  {
    question: "What's the output?",
    content: `const fruit = ['🍌', '🍊', '🍎'];
  
  fruit.slice(0, 1);
  fruit.splice(0, 1);
  fruit.unshift('🍇');
  
  console.log(fruit);`,
    choices: [
      "['🍌', '🍊', '🍎']",
      "['🍊', '🍎']",
      "['🍇', '🍊', '🍎']",
      "['🍇', '🍌', '🍊', '🍎']",
    ],
    answer: "['🍇', '🍊', '🍎']",
  },

];