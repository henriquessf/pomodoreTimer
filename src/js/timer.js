export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let minutes = Number(minutesDisplay.textContent)
  let timerTimedOut

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimedOut)
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes //definindo um valor padrão aos parametros, caso não receba nada
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countdown() {
    timerTimedOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let timedOut = minutes <= 0 && seconds <= 0 //variavel que valida se o tempo está zerado

      updateDisplay(minutes, 0)

      if (timedOut) {
        //validando através da variavel de timedOut, se o tempo acabou
        resetControls()
        updateDisplay() //não passamos nada, então ele seta o valor padrão do update
        Sounds().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes //sempre que os segundos zerarem, diminuirá um no display de minutos
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }
  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }
  function pause() {
    clearTimeout(timerTimedOut)
  }
  return {
    reset,
    countdown,
    updateDisplay,
    updateMinutes,
    pause
  }
}
