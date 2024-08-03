import { HistoryContainer, Status } from "./styles";

export default function History() {
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
                        <tr>
                            <td>Trabalho</td>
                            <td>25 minutos</td>
                            <td>10:00</td>
                            <td>
                                <Status color="green">
                                    Concluído
                                </Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </HistoryContainer>
    )
};