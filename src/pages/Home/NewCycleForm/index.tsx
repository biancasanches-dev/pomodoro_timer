import { useContext } from "react";
import { FormContainer } from "./styles";
import { CycleContext } from "../../../context/CycleContext";
import { useFormContext } from "react-hook-form";

interface FormData {
    task: string
    minutesAmount: number
}

export default function NewCycleForm() {
    const { activeCycle } = useContext(CycleContext)

    const { register } = useFormContext<FormData>()

    return(
        <FormContainer>
            <div>
                <input 
                    type="text" 
                    list="task-suggestions" 
                    placeholder="Escolha a tarefa "
                    disabled={!!activeCycle}
                    {...register('task')}
                />

                <datalist id="task-suggestions">
                    <option value="null" />
                </datalist>
            </div>

            <span>em</span>

            <input 
                type="number" 
                id="minutesAmount" 
                placeholder="00" 
                step={5} 
                min={1} 
                max={60} 
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
            />
            <label htmlFor="minutesAmount">minutos</label>
        </FormContainer>
    )
};