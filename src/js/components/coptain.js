const servicesList = document.querySelector('.coptain-list')

if (servicesList)
  servicesList.addEventListener('click', (event) => {
    const targetButton = event.target.closest('.coptain-list__item')
    if (!targetButton) return

    const targetSelector = targetButton.getAttribute('data-target')
    const correspondingItem = document.querySelector(targetSelector)

    handleServiceClick(targetButton, correspondingItem)
  })

function handleServiceClick(serviceButton, serviceItem) {
  document.querySelectorAll('.coptain-list__item').forEach((button) => {
    button.classList.remove('active')
  })
  serviceButton.classList.add('active')

  document.querySelectorAll('.coptain-wrapper__item').forEach((item) => {
    item.classList.remove('active')
  })
  serviceItem.classList.add('active')
}
