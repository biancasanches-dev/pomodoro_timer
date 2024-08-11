import { CircleX, Pause, Play } from "lucide-react";
import { HomeContainer, StopButton } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { useContext } from "react";
import { ButtonStyled } from "../../components/ui/button.styled";
import NewCycleForm from "./NewCycleForm";
import Countdown from "./Countdown";
import { CycleContext } from "../../context/CycleContext";
import Music from "./Music";
export interface FormData {
    task: string
    minutesAmount: number
}

export default function Home() {
    const { activeCycle, isPaused, stopCurrentCycle, createNewCycle, pauseCurrentCycle, inputValues } = useContext(CycleContext)

    const newCycleForm = useForm<FormData>({
        defaultValues:  inputValues
    })

    const { handleSubmit, watch, reset } = newCycleForm

    function handleCreateNewCycle(data: FormData) {
        createNewCycle(data)
        reset(data)
    }

    function handleStopCurrentCycle() {
        stopCurrentCycle()
        reset({
            task: '',
            minutesAmount: 0
        })
    }

    const task = watch('task')

    return(
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                
                <Countdown />

                <Music />
                
                { activeCycle ? (
                    <>
                        { isPaused ? (
                            <ButtonStyled type="button" $variant="primary" onClick={pauseCurrentCycle}>
                                <Play size={24} />
                                <span>Retomar</span>
                            </ButtonStyled>
                        ) : (
                            <ButtonStyled type="button" $variant="alert" onClick={pauseCurrentCycle}>
                                <Pause size={24} />
                                <span>Pausar</span>
                            </ButtonStyled>
                        )}
                        <StopButton onClick={handleStopCurrentCycle}>
                            <CircleX size={24} />
                            <span>Interromper</span>
                        </StopButton>
                    </>
                ) : (   
                    <ButtonStyled disabled={!task} type="submit" $variant="primary"> 
                        <Play size={24} />
                        <span>Iniciar</span>
                    </ButtonStyled>
                )}

                {/* <Music /> */}
            </form>
        </HomeContainer>
    )
};