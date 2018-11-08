console.log('hello');
let f1 = function() {
    console.log('exec: f1');
}

let f2 = (a) => {console.log(a)}



function f3 (a) {
    a = a +1;
    return a;
}


let obj = {
    at1: 1,
    nome: 'Nome',
    f1: a => a+1
}

f1();
f2('teste');
console.log(f3(3));
console.log(obj.at1)
console.log(obj.nome)
console.log(obj.f1(2))

let obj2 = obj  
let obj3 = { ...obj}

obj2.at1 = 5
obj3.at1 = 6
console.log(obj.at1)
console.log(obj2.at1)
console.log(obj3.at1)

function name ({at1, nome}) {
    console.log(at1, nome)
}

name(obj)


// high order function
let soma = (a) => (b) => a+b

let add1 = soma(8)

console.log('high order function ' + add1(2))

// Strings
let a = 'eduardo'
let s = `${a} oliveira ${add1(5)}`
console.log(s)

// assincronismo
function  fa(done) {
    // execucao...
    done()
}

// Promise
function  fb(n) {
    return new Promise((resolve, reject) => {
        if (!n) reject ('n é obrigatório')
        if (n%2 == 0)
          resolve('par')
        else
          resolve('impar')
    })
}

fb(2)
  .then(result => console.log(result))
  .catch(erro => console.log(erro))

  fb(1)
  .then(result => console.log(result))
  .catch(erro => console.log(erro))

  fb()
  .then(result => console.log(result))
  .catch(erro => console.log(erro))


  // async await
  let fAsync = async () => {
      try {
        let result = await fb(2)
        console.log(result)
      } catch (error) {
          console.log(error)
      }
  }

  console.log('exemplo de async await')
  fAsync ()

  const modulo = require('./name')

  modulo.name('teste')