const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonSet = document.querySelector('.set')
const buttonStop = document.querySelector('.stop')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes

function countdown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 0) {
      buttonPlay.classList.remove('hide')
      buttonStop.classList.add('hide')
      buttonSet.classList.remove('hide')
      buttonPause.classList.add('hide')
      secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

      return
    }

    if (seconds <= 0) {
      seconds = 2
      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0') //sempre que os segundos zerarem, diminuirá um no display de minutos
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  countdown()
})

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})

buttonSet.addEventListener('click', () => {
  minutes = prompt('Digite quantos minutos irá estudar: ')
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
})
