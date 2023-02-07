import { HistoryContainer, HistoryList } from './styles'

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
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
              <td>Ouvir audiobook</td>
              <td>30 minutos</td>
              <td>Há cerca de 5 meses</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Ouvir audiobook</td>
              <td>30 minutos</td>
              <td>Há cerca de 5 meses</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Ouvir audiobook</td>
              <td>30 minutos</td>
              <td>Há cerca de 5 meses</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Ouvir audiobook</td>
              <td>30 minutos</td>
              <td>Há cerca de 5 meses</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Ouvir audiobook</td>
              <td>30 minutos</td>
              <td>Há cerca de 5 meses</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Ouvir audiobook</td>
              <td>30 minutos</td>
              <td>Há cerca de 5 meses</td>
              <td>Em andamento</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
