
// Задание

// Используя даную строку с полным алфавитом, программно составить массив keyboard содержащий 3 других массива с буквами алфавита, идентичные строкам на клавиатуре.

// Массив keyboard будет иметь такую струтуру: [ [первая строка клавиатуры], [вторая строка клавиатуры], [третья строка клавиатуры] ].

// const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./"; 
// Используя готовый массив клавиатурных строк, обращаясь к элементам массива по индексам, записать в переменные слова и вывести их в консоль:
// hello
// javascript
// trainer


const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
console.log(alphabet);

let myAlphabet = alphabet.split("");
console.log(myAlphabet);

let keyBoard_1 = myAlphabet.slice(0,12);
console.log(keyBoard_1);

let line_1 = keyBoard_1.join(" ");
console.log(line_1); 

let keyBoard_2 = myAlphabet.slice(12,23);
console.log(keyBoard_2);

let line_2 = keyBoard_2.join(" ");
console.log(line_2);

let keyBoard_3 = myAlphabet.slice(23,33);
console.log(keyBoard_3);

let line_3 = keyBoard_3.join(" ");
console.log(line_3);


let board = [];

board[0] = keyBoard_1;

board[1] = keyBoard_2;

board[2] = keyBoard_3;

console.log(board);


let hello = board[1][5]+board[0][2]+board[1][8]+board[1][8]+board[0][8];

let javascript = board[1][6]+board[1][0]+board[2][3]+board[1][0]+board[1][1]+board[2][2]+board[0][3]+board[0][7]+board[0][9]+board[0][4];

let trainer = board[0][4]+board[0][3]+board[1][0]+board[0][7]+board[2][5]+board[0][2]+board[0][3];


console.log(hello);
console.log(javascript);
console.log(trainer);
