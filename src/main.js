import './assets/styles/main.scss'
import './scripts/select'
import './scripts/range'

const btns = document.querySelectorAll('.main-btn')

btns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.classList.toggle('active')
  })
  btn.addEventListener('mouseleave', () => {
    btn.classList.toggle('active')
  })
})
