import { createContext, useEffect, useReducer, useState } from "react"
import { FormData } from "../pages/Home"
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer"
import { addNewCycleActions, concludeCycleActions, pauseCycleActions, removeCycleActions, resumeCycleActions, stopCycleActions } from "../reducers/cycles/actions"
import { differenceInSeconds } from "date-fns"
interface CycleContextData {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    secondsPassed: number
    isPaused: boolean
    inputValues: FormData,
    cycleCompleted: boolean,
    createNewCycle: (data: FormData) => void
    pauseCurrentCycle: () => void
    stopCurrentCycle: () => void
    setSecondsPassed: (seconds: number) => void,
    concludeCycle: () => void,
    removeCycleHistory: (id: string) => void
}

export const CycleContext = createContext({} as CycleContextData)

export function CycleContextProvider({ children }: { children: React.ReactNode }) {
    const [ isPaused, setIsPaused ] = useState(false)
    const [ cycleCompleted, setCycleCompleted ] = useState(false)
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

    function concludeCycle() {
        dispatch(concludeCycleActions(activeCycleId))
        setInputValues({
            task: '',
            minutesAmount: 0
        })
        setCycleCompleted(true)
    }

    const removeCycleHistory = (id: string) => {
        localStorage.removeItem(id);
        dispatch(removeCycleActions(id));
    };
    
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
            inputValues,
            cycleCompleted,
            concludeCycle,
            removeCycleHistory
        }}>
            { children }
        </CycleContext.Provider>
    )
}