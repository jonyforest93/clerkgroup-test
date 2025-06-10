const range = document.querySelector('input[type="range"]')
const rangeProgress = document.querySelector('.range-value')

range.addEventListener('input', () => {
  rangeProgress.textContent = `${range.value} %`
})
