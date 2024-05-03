import { Table, TableBody, TableCell, TableHead, TableRow } from './ui';
import { PaginationDemo } from './Pagination';

const TelaDeSaídaProdutos: React.FC = () => {
  const historicoSaidas = [
    { id: 1, produto: 'Produto A', quantidade: 5, data: '01/05/2024' },
    { id: 2, produto: 'Produto B', quantidade: 10, data: '02/05/2024' },
 
  ];

  return (
    <div>
      

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Produto</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {historicoSaidas.map((saida) => (
            <TableRow key={saida.id}>
              <TableCell>{saida.id}</TableCell>
              <TableCell>{saida.produto}</TableCell>
              <TableCell>{saida.quantidade}</TableCell>
              <TableCell>{saida.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const TelaDeSaídaProdutos: React.FC = () => {
    // logica de paginação
  
    return (
      <div>
        {/* interface existente (nao sei)*/}
        
        {/* histoico de sida */}
        <Table>
          {/* contuedo de tabela*/}
        </Table>
  
        {/* Paginação */}
        <PaginationDemo />
      </div>
    );