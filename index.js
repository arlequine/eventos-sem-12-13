console.log('Hola mundo')

// seleccionar el input y el contenedor de salida
const textInput = document.getElementById('textInput')
const output = document.getElementById('output')

// escuchar el evento de "keydown" en el input
textInput.addEventListener('keydown', (event) => {
  // verificar si se presiona Enter
  console.log('objeto event', event.key)
  if (event.key === 'Enter') {
    // Obtenemos el valor del Input
    const text = textInput.value


    //Creamos el customEvent con el nombre de "textSubmitted y le pasamos el texto en detail"
    const textSubmitted = new CustomEvent('textSubmitted', {
      detail: { text: text }
    })

    // despachamos el evento en el input
    textInput.dispatchEvent(textSubmitted)

    // limpiamos el campo de texto
    textInput.value = ''
  } 
}) 


// Escuchar el evento personalizado "TexSubmitted"

textInput.addEventListener('textSubmitted', (event) => {
  console.log(event)
  // obtenemor el texto desde el objeto detail del evento
  const submittedText = event?.detail?.text


  //Creamo nuevo elemento para ingresar el texto

  const newTextElement = document.createElement('p')
  newTextElement.textContent = `Texto ingresado ${submittedText}`

  //Agregamos el nuevo texto al contenedor de salida
  output.appendChild(newTextElement)
})



const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});



textInput.addEventListener('focus', (event) => {
  console.log('Focus', event)
})
textInput.addEventListener('blur', (event) => {
  console.log('Blur', event)
})