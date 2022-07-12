import Timer from './timer.js'
import Controls from './controls.js'
import Sounds from './sounds.js'

import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sounds = Sounds()

buttonPlay.addEventListener('click', () => {
  controls.play()
  timer.countdown()
  sounds.buttonPress()
})

buttonPause.addEventListener('click', () => {
  controls.pause()
  timer.pause()
  sounds.buttonPress()
})

buttonStop.addEventListener('click', () => {
  controls.reset()
  timer.pause()
  timer.reset()
  sounds.buttonPress()
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sounds.bgAudio.pause()
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  sounds.bgAudio.play()
})

buttonSet.addEventListener('click', () => {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutes, 0)
  updateMinutes(newMinutes)
})
