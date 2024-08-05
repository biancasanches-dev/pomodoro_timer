import { createContext, useEffect, useReducer, useState } from "react"
import { FormData } from "../pages/Home"
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer"
import { addNewCycleActions, pauseCycleActions, resumeCycleActions, stopCycleActions } from "../reducers/cycles/actions"
import { differenceInSeconds } from "date-fns"
interface CycleContextData {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    secondsPassed: number
    isPaused: boolean
    inputValues: FormData,
    createNewCycle: (data: FormData) => void
    pauseCurrentCycle: () => void
    stopCurrentCycle: () => void
    setSecondsPassed: (seconds: number) => void
}

export const CycleContext = createContext({} as CycleContextData)

export function CycleContextProvider({ children }: { children: React.ReactNode }) {
    const [ isPaused, setIsPaused ] = useState(false)
    const [ inputValues, setInputValues ] = useState<FormData>({
        task: '',
        minutesAmount: 0
    })

    const [ cyclesState, dispatch ] = useReducer(cyclesReducer, {
        cycles: [],
        activeCycleId: null
    },(initialState) => {
        const stateJsonStored = localStorage.getItem('@pomodoro:cyclesState-1.0.0')

        if (stateJsonStored) {
            return JSON.parse(stateJsonStored)
        } else {
            return initialState
        }

    });

    const { cycles, activeCycleId } = cyclesState
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    const [ secondsPassed, setSecondsPassed] = useState(() => {
        if(activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }

        return 0
    })

    useEffect(() => {
        const stateJson = JSON.stringify(cyclesState)

        localStorage.setItem('@pomodoro:cyclesState-1.0.0', stateJson)
    }, [cyclesState])

    function createNewCycle(data: FormData) {
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        dispatch(addNewCycleActions(newCycle))

        setSecondsPassed(0)
        setIsPaused(false)
        setInputValues(data)
    }

    function pauseCurrentCycle() {
        if (isPaused) {
            setIsPaused(false)
            dispatch(resumeCycleActions())
        } else {
            setIsPaused(true);
            dispatch(pauseCycleActions())
        }
    }

    function stopCurrentCycle() {
        setIsPaused(false)
        setInputValues({
            task: '',
            minutesAmount: 0
        })
        dispatch(stopCycleActions(activeCycleId))
    }
    
    return (
        <CycleContext.Provider value={{
            cycles,
            activeCycle,
            activeCycleId,
            secondsPassed,
            setSecondsPassed,
            createNewCycle,
            pauseCurrentCycle,
            stopCurrentCycle,
            isPaused,
            inputValues
        }}>
            { children }
        </CycleContext.Provider>
    )
}