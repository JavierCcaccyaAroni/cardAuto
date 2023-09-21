// Todo : Manejo del DOM, capturando los elementos Html

const redColor = document.querySelector('.red')
const grayColor = document.querySelector('.gray')
const blackColor = document.querySelector('.black')
const cardButton = document.getElementById('button')
const cardButtonFeedback = document.querySelector('#feedback')
const cardImage = document.querySelector('.card__image img')
const cardDescription = document.querySelector('.card__description')
const cardPrice = document.querySelector('.card__price')

// Todo: utilizando los eventos en los elementos Html

redColor.addEventListener('click', () => {
    cardButton.style.backgroundColor = 'red'
    cardImage.src = './assets/mercedez_red.jpg'
    etiquetaH3.style.backgroundColor = 'red'
    cardButtonFeedback.style.display = 'none'
    cardButton.style.display = 'block'
})

grayColor.addEventListener('click', () => {
    cardButton.style.backgroundColor = 'gray'
    cardImage.src = './assets/mercedez_gray.jpg'
    etiquetaH3.style.backgroundColor = 'gray'
    cardButtonFeedback.style.display = 'none'
    cardButton.style.display = 'block'
})

blackColor.addEventListener('click', () => {
    cardButton.style.backgroundColor = 'black'
    cardImage.src = './assets/mercedez_black.webp'
    etiquetaH3.style.backgroundColor = 'black'
    cardButtonFeedback.style.display = 'none'
    cardButton.style.display = 'block'
})

// Todo: Creamos elementos Html
// Crear etiqueta h3, agregarle una clase, un texto y lo vamos a incrustar en el html desde JS

// appendChild
const etiquetaH3 = document.createElement('h3')
etiquetaH3.className = 'tag'
etiquetaH3.textContent = 'Car'

cardDescription.appendChild(etiquetaH3)

// insertBefore
const cardDescriptionH2 = document.querySelector('h2')
cardDescription.insertBefore(etiquetaH3, cardDescriptionH2)

// Cambiando el contenido del precio
cardPrice.innerHTML ='$200,000.00'

cardButton.addEventListener('click', function () {
    cardButton.style.display = 'none'
    cardButtonFeedback.style.display = 'block'
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.8 }
      });
})

cardButtonFeedback.addEventListener('click', function () {
    cardButton.style.display = 'block'
    cardButtonFeedback.style.display = 'none'
})
