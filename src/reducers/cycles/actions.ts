import { Cycle } from "./reducer";

export enum ActionTypes {
    ADD_CYCLE = 'ADD_CYCLE',
    PAUSE_CYCLE = 'PAUSE_CYCLE',
    RESUME_CYCLE = 'RESUME_CYCLE',
    STOP_CYCLE = 'STOP_CYCLE',
    CONCLUDE_CYCLE = 'CONCLUDE_CYCLE',
    REMOVE_CYCLE = 'REMOVE_CYCLE'
}

export function addNewCycleActions(newCycle: Cycle) {
    return { 
        type: ActionTypes.ADD_CYCLE, 
        payload: {
            newCycle
        }
    }
}

export function resumeCycleActions() {
    return { 
        type: ActionTypes.RESUME_CYCLE
    }
}

export function pauseCycleActions() {
    return { 
        type: ActionTypes.PAUSE_CYCLE
    }

}

export function stopCycleActions(activeCycleId: string) {
    return {
        type: ActionTypes.STOP_CYCLE,
        payload: {
            activeCycleId
        }
    }
}

export function concludeCycleActions(activeCycleId: string) {
    return {
        type: ActionTypes.CONCLUDE_CYCLE,
        payload: {
            activeCycleId
        }
    }
}

export function removeCycleActions(id: string) {
    return {
        type: ActionTypes.REMOVE_CYCLE,
        payload: {
            id
        }
    }
}