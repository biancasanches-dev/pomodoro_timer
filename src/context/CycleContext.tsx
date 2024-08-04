import { differenceInSeconds } from "date-fns"
import { createContext, useState } from "react"
import { FormData } from "../pages/Home"

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    pauseDate?: Date
    stopDate?: Date
}

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
    const [ cycles, setCycles ] = useState<Cycle[]>([]);
    const [ activeCycleId, setActiveCycleId ] = useState<string | null>(null)
    const [ secondsPassed, setSecondsPassed] = useState(0)
    const [ isPaused, setIsPaused ] = useState(false)
    const [ inputValues, setInputValues ] = useState<FormData>({
        task: '',
        minutesAmount: 0
    })
    
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    function createNewCycle(data: FormData) {
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        setCycles((state) => [...state, newCycle])
        setActiveCycleId(id)
        setSecondsPassed(0)
        setIsPaused(false)
        setInputValues(data)
    }

    function pauseCurrentCycle() {
        if (isPaused) {
            setIsPaused(false)
            setCycles((state) => state.map((cycle) => {
                if (cycle.id === activeCycleId) {
                    return {
                        ...cycle,
                        startDate: new Date(new Date().getTime() - (cycle.pauseDate ? differenceInSeconds(cycle.pauseDate, cycle.startDate) * 1000 : 0))
                    }
                }
                return cycle;
            }));
        } else {
            setIsPaused(true);
            setCycles((state) => state.map((cycle) => {
                if (cycle.id === activeCycleId) {
                    return {
                        ...cycle,
                        pauseDate: new Date()
                    }
                }
                return cycle;
            }));
        }
    }

    function stopCurrentCycle() {
        setActiveCycleId(null)
        setIsPaused(false)
        setInputValues({
            task: '',
            minutesAmount: 0
        })

        setCycles((state) => state.map((cycle) => {
            if (cycle.id === activeCycleId) {
                return {
                    ...cycle,
                    stopDate: new Date()
                }
            }

            return cycle
        }))
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