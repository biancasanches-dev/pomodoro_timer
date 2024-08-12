import { differenceInSeconds } from 'date-fns'

import { ActionTypes } from './actions'

export interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    pauseDate?: Date
    stopDate?: Date
    concluded?: Date
}

interface CycleState {
    cycles: Cycle[]
    activeCycleId: string | null
}

export function cyclesReducer(state: CycleState, action: { type: ActionTypes, payload: any }) {
    switch (action.type) {
    case ActionTypes.ADD_CYCLE:
        return {
            ...state,
            cycles: [...state.cycles, action.payload.newCycle],
            activeCycleId: action.payload.newCycle.id
        }
    case ActionTypes.PAUSE_CYCLE:
        return {
            ...state,
            cycles: state.cycles.map((cycle) => {
                if (cycle.id === state.activeCycleId) {
                    return {
                        ...cycle,
                        pauseDate: new Date()
                    }
                }
                return cycle
            }),

        }
    case ActionTypes.RESUME_CYCLE:
        return {
            ...state,
            cycles: state.cycles.map((cycle) => {
                if (cycle.id === state.activeCycleId) {
                    return {
                        ...cycle,
                        startDate: new Date(new Date().getTime() - (cycle.pauseDate ? differenceInSeconds(cycle.pauseDate, cycle.startDate) * 1000 : 0))
                    }
                }
                return cycle
            })
        }
    case ActionTypes.STOP_CYCLE:
        return {
            ...state,
            cycles: state.cycles.map((cycle) => {
                if (cycle.id === state.activeCycleId) {
                    return {
                        ...cycle,
                        stopDate: new Date(),
                    }
                } else {
                        
                    return cycle
                }
            }),
            activeCycleId: null
        }
    case ActionTypes.CONCLUDE_CYCLE: 
        return {
            ...state,
            cycles: state.cycles.map((cycle) => {
                if (cycle.id === state.activeCycleId) {
                    return {
                        ...cycle,
                        concluded: new Date(),
                    }
                } else {
                    return cycle
                }
            }),
            activeCycleId: null
        }
    case ActionTypes.REMOVE_CYCLE:
        return {
            ...state,
            cycles: state.cycles.filter((cycle) => cycle.id !== action.payload.id)
        }
    default:
        return state
    }
}