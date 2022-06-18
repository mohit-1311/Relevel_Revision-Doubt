// Falguni's doubt

const ps = require("prompt-sync");
const prompt = ps();

let T = prompt();

for (let i = 1; i <= T; i++) {
  let patty = prompt();
  let bun = prompt();

  console.log(Math.min(patty, bun));
}


importPackage(java.lang)
importPackage(java.io)

let reader = new BufferedReader(new InputStreamReader(System["in"]));
let T = reader.readLine();

for(let i=0; i<T; i++){
    let [patty, bun] = reader.readLine().split(' ')
    patty = Number(patty)
    bun = Number(bun)
    
    let result = patty < bun ? patty : bun; 
    
    System.out.println(result.toFixed(1))
}

//

let arr = [2];

console.log(arr.push(3));

console.log(arr);

//

let arr = [1, 1, 4, 2, 5];

let freq = new Array(6).fill(0);

for (let i = 0; i < arr.length; i++) {
  freq[arr[i]] += 1;
}

for (let i = 0; i < freq.length; i++) {
  if (freq[i] >= 1) console.log(i);
}
// freq = [0, 2, 1, 0, 1, 1]
// Index = 0  1  2  3  4  5

