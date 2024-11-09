console.log('Hola mundo')

// Seleccionar los elementos necesarios
const nameInput = document.getElementById('nameInput') 
const phoneInput = document.getElementById('phoneInput') 
const addContactButton = document.getElementById('addContactButton') 
const contactList = document.getElementById('contactList') 
const contactDetail = document.getElementById('contactDetail') 
const contactName = document.getElementById('contactName') 
const contactPhone = document.getElementById('contactPhone') 
const closeDetailButton = document.getElementById('closeDetailButton')

// Funcion para agregar nuevo contacto
const addContact = () => {
  const name = nameInput.value.trim()
  const phone = phoneInput.value.trim()

  if (name === '' || phone === '') {
    alert("Porfavor, ingresa nombre y telefono")
    return
  }

  //crear un elemento de contacto en la lista
  const contactItem = document.createElement('li')
  contactItem.classList.add('contact-item')
  contactItem.textContent = `${name} - ${phone}`

  //crear img contacto
  // const imgContact = document.createElement('img')
  // imgContact.src = 'https://picsum.photos/200/300'

  // boton  de borrar
  const deleteButton = document.createElement('button')
  deleteButton.textContent = "X"
  deleteButton.addEventListener('click', (event) => {
    event.stopPropagation() // Evitar que se abra el detalle del contacto
    contactList.removeChild(contactItem)
  })

  //Evento para mostrar los detalles del contacto
  contactItem.addEventListener('click', () => showContactDetails(name, phone))

  //Agregar el boton de borrar y el contacto a la lista
  // contactItem.appendChild(imgContact)
  contactItem.appendChild(deleteButton)
  contactList.appendChild(contactItem)

  // Limpiar el formulario 
  nameInput.value = ''
  phoneInput.value = ''

}


//Funcion para mostrar los detalles de un contacto
const showContactDetails = (name, phone) => {
  contactName.textContent = `Nombre: ${name}`
  contactPhone.textContent = `Telefono: ${phone}`
  contactDetail.classList.remove('hidden')
}


const closeContactDetails = () => {
  contactDetail.classList.add('hidden')
}

// Evento para agregar contacto al hacer clic en el botón
addContactButton.addEventListener('click', addContact)

// Evento para cerrar los detalles del contacto
closeDetailButton.addEventListener('click', closeContactDetails)

// Evento para agregar contacto al presionar Enter en el campo de telefono
phoneInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addContact()
  }
})

