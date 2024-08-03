import { Play } from "lucide-react";
import { FormContainer, HomeContainer, TimerContainer } from "./styles";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
    task: string
    minutesAmount: number
}

interface Cycle {
    id: string
    task: string
    minutesAmount: number

}

export default function Home() {
    const [ cycles, setCycles ] = useState<Cycle[]>([]);
    const [ activeCycleId, setActiveCycleId ] = useState<string | null>(null)
    const [ secondsPassed, setSecondsPassed] = useState(0)

    const { register, handleSubmit, watch, reset } = useForm<FormData>();
    const task = watch('task');

    function handleNewCycle(data: FormData) {
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount
        }

        setCycles((state) => [...state, newCycle])
        setActiveCycleId(id)

        reset()
    }

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
    const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0

    const minutesAmount = Math.floor(currentSeconds/60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, "0")
    const seconds = String(secondsAmount).padStart(2, "0")

    return(
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleNewCycle)}>
                <FormContainer>
                    <input 
                        type="text" 
                        id="task" 
                        list="task-suggestions" 
                        placeholder="Escolha a tarefa "
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="null" />
                    </datalist>

                    <span>em</span>

                    <input 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00" 
                        step={5} 
                        min={5} 
                        max={60} 
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />
                    <label htmlFor="minutesAmount">minutos</label>
                </FormContainer>

                <TimerContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <span>:</span>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </TimerContainer>

               <Button disabled={!task} type="submit" > 
                    <Play size={24} />
                    <span>Iniciar</span>
                </Button>
            </form>
        </HomeContainer>
    )
};