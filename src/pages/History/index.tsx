import { useContext, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChevronLeft, ChevronRight, Trash } from 'lucide-react'

import { CycleContext } from '../../context/CycleContext'
import { HistoryContainer, PaginationContainer, Status, TableContainer } from './styles'

const ITEMS_PER_PAGE = 10

export default function History() {
    const { cycles, removeCycleHistory } = useContext(CycleContext)
    const [currentPage, setCurrentPage] = useState(1)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentCycles = cycles.slice(startIndex, endIndex)

    const totalPages = Math.ceil(cycles.length / ITEMS_PER_PAGE)

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    } 

    const handleRemoveCycle = (id: string) => {
        removeCycleHistory(id)
    }

    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>

            <TableContainer>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Início</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCycles.map(cycle => {
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
                                    { cycle.pauseDate && !cycle.stopDate && !cycle.concluded && <Status color="yellow"> Pausado </Status> }
                                    { !cycle.stopDate && !cycle.pauseDate && !cycle.concluded && <Status color="green"> Aberto </Status> }
                                    { cycle.concluded && <Status color="blue"> Concluído </Status> }
                                </td>
                                <td>
                                    <button onClick={() => handleRemoveCycle(cycle.id)}>
                                        <Trash />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </TableContainer>
            
            {totalPages > 1 &&
                <PaginationContainer>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        <ChevronLeft color="#000"/>
                    </button>
                    <span>{currentPage} de {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <ChevronRight color="#000"/>
                    </button>
                </PaginationContainer>
            }

        </HistoryContainer>
    )
}