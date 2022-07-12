import Timer from './timer.js'
import Controls from './controls.js'
import Sounds from './sounds.js'
import Events from './events.js'
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

Events({ controls, timer, sounds })
