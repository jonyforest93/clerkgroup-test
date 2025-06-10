const select = document.querySelector('.select')
const selectButton = select.querySelector('.select__button')
const selectButtonText = selectButton.querySelector('span')
const selectList = select.querySelector('.select__list')
const selectItems = select.querySelectorAll('.select__list-item')
const selectInput = select.querySelector('.select__input-hidden')

function closeSelect() {
  select.classList.remove('select--active')
  selectList.classList.remove('select__list--visible')
}

selectButton.addEventListener('click', function (e) {
  e.preventDefault()
  if (select.classList.contains('select--active')) {
    closeSelect()
  } else {
    select.classList.add('select--active')
    selectList.classList.add('select__list--visible')
  }
})

for (let item of selectItems) {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    selectButtonText.textContent = item.textContent
    selectInput.value = item.getAttribute('data-value')
    closeSelect()
  })
}

select.addEventListener('keydown', function (event) {
  if (event.code === 'Tab') {
    const focusedElement = document.activeElement
    if (focusedElement === selectItems[selectItems.length - 1]) {
      closeSelect()
    }
  }
})

document.addEventListener('click', function (event) {
  if (!select.contains(event.target)) {
    closeSelect()
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      select.classList.remove('select--active')
      selectList.classList.remove('select__list--visible')
    }
  })
})
