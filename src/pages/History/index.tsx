import { useContext } from "react";
import { HistoryContainer, Status } from "./styles";
import { CycleContext } from "../../context/CycleContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function History() {
    const { cycles } = useContext(CycleContext);

    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map(cycle => {
                            return (
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.minutesAmount} minutos</td>
                                    <td>
                                        {formatDistanceToNow(cycle.startDate, {
                                            addSuffix: true,
                                            locale: ptBR
                                        })}
                                    </td>
                                    <td>
                                        { cycle.stopDate && <Status color="red"> Interrompido </Status> }
                                        { cycle.pauseDate && !cycle.stopDate && <Status color="yellow"> Pausado </Status> }
                                        { !cycle.stopDate && !cycle.pauseDate && <Status color="green"> Aberto </Status> }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </HistoryContainer>
    )
};