
let nombre = '' 
let email = '' 
let telefono = '' 

function validateName(){  
  nombre = prompt('Ingresa tu nombre (prueba "Pedro o Pablo")').toLowerCase()
  let capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
  
  while(!capitalizedName || ['Pedro', 'Pablo'].includes(capitalizedName)){
    switch(capitalizedName){
      case false:
        alert('debes ingresar un nombre valido, intenta nuevamente')
        nombre = prompt('Ingresa tu nombre (prueba "pedro")').toLowerCase()
        capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break
      case 'Pedro':
        alert('no aceptamos Pedros, nada personal, intenta nuevamente')
        nombre = prompt('Intenta ingresar un nombre que no sea Pedro').toLowerCase()
        capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break
      case 'Pablo':
        alert('no aceptamos Pablos, nada personal, intenta nuevamente')
        nombre = prompt('Intenta ingresar un nombre que no sea Pablo').toLowerCase()
        capitalizedName = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break      
    }
  }
  return capitalizedName
}

function containsAtSymbol(string) {
  return string.includes("@");
}

function validateEmail(){
  email = prompt('ingresa el email')
  while(!email || !containsAtSymbol(email)){
      alert('debes ingresar un email valido')
      email = prompt('ingresa un email valido')
  }
  return email
}

function validatePhoneNumber() {
  telefono = prompt("Ingrese el número de teléfono ej: 54 9 11 1234 5678")
  telefono = telefono.replace(/\s/g, "")
  let regex = /^54\d{11}$/
  while(!regex.test(telefono)){
    alert('hay un error en el numero indicado, debe comenzar con 54 y tener en total 13 numeros de largo')
    telefono = prompt("Ingrese el número de teléfono ej: 54 9 11 1234 5678").replace(/\s/g, "")
  }
  return telefono
}

console.log(`el nombre es ${validateName(nombre)}`)
console.log(`el email es ${validateEmail(email)}`)
console.log(`el telefono es ${validatePhoneNumber(telefono)}`)
