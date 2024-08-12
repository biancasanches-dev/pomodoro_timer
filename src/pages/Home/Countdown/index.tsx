import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'

import { CountdownContainer, TimerContainer } from './styles'
import { CycleContext } from '../../../context/CycleContext'
import ProgressCircle from '../ProgressCircle'
import { cycleCompletedAlert } from '../../../components/ui/alert'

export default function Countdown() {
    const { activeCycle, isPaused, secondsPassed, setSecondsPassed, concludeCycle } = useContext(CycleContext)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

    useEffect(() => {
        let interval: number

        if (activeCycle && !isPaused) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), activeCycle.startDate)

                if (secondsDifference >= totalSeconds) {
                    clearInterval(interval)
                    // music(false)
                    cycleCompletedAlert.fire().then(() => {
                        concludeCycle()
                    })
                } else {
                    setSecondsPassed(secondsDifference)
                }

            }, 1000)
        } 

        return () => {
            clearInterval(interval)
        }

    }, [activeCycle, isPaused, totalSeconds, setSecondsPassed, concludeCycle])

    const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0

    const minutesAmount = Math.floor(currentSeconds/60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}:${seconds}`
        } else {
            document.title = 'Pomodoro'
        }
    }, [minutes, seconds, activeCycle])

    return(
        <CountdownContainer>  
            <ProgressCircle value={currentSeconds} max={totalSeconds}>
                <TimerContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <span>:</span>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </TimerContainer>
            </ProgressCircle>
        </CountdownContainer>
    )
}