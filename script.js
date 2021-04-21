const emoji = document.querySelectorAll('.emoji')
const reviewContainer = document.querySelector('.review-container') 
const sendBtn = document.getElementById('send')
const container = document.getElementById('container')
let selectedRating = 'Satisfied'

reviewContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('emoji')) {
      removeActive()
      e.target.parentNode.classList.add('active')
      selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
  container.innerHTML = `
  <i class= 'bi bi-heart-fill'></i>
  <strong>Thank you!</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support!</p>
  `
})

function removeActive() {
  for(let i = 0; i < emoji.length; i++) {
    emoji[i].classList.remove('active')
  }
}