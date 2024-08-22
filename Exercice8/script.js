function add(a, b) {
  let sum = Number(a) + Number(b); // caster => forcer le type d'une variable
  return sum;
}

let int = 3;
let float = 1.5;

console.log(add(int, float));

export default add;
