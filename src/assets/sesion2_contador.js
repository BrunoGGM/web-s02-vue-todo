/*let usuarios = [
  'Bruno',
  'Camilo',
  'Mariana',
  'Ana',
  'Luis',
  'Sofía',
  'Diego',
  'Valeria',
  'Jorge',
  'Fernanda',
  'Andrés',
  'Claudia',
  'Mateo',
  'Paula',
  'Ricardo',
  'Daniela',
  'Santiago',
  'Gabriela',
  'Felipe',
  'Laura',
]

let decirHola = function (nombre) {
  console.log('Hola ' + nombre)
}

for (let i = 0; i < usuarios.length; i++) {
  decirHola(usuarios[i])
}*/

/*
usuarios.forEach(nombre => {
    //decirHola(nombre)
});*/

// WHILE
/*
let nombre = prompt('Escribe tu nombre');

while (!isNaN(parseInt(nombre))){
    nombre = prompt('Escribe tu nombre');
}

console.log('Hola ' + nombre)
*/

// do while

/*
let password;

do {
    password = prompt('Escribe tu contraseña(123):')
} while (password == 123) 

alert('Bienvenido')
*/

let count = 0
console.log(count)
let value = document.getElementById('value')

let add = function () {
  count++
  console.log(count)
  updateValue()
}

let less = function () {
  count--
  console.log(count)
  updateValue()
}

let updateValue = function () {
  value.innerText = count
}


let addButton = document.getElementById('increment')
addButton.addEventListener('click', () => {
  add()
})

let lessButton = document.getElementById('decrement')
lessButton.addEventListener('click', () => {
  less()
})
