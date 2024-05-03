import { Button, Input, Modal } from './ui';

const TelaDeSaídaProdutos: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [produto, setProduto] = useState('');
    const [quantidade, setQuantidade] = useState(0);
  
    const handleConfirmarSaida = () => {
      setShowModal(false);
    };
  
    return (
      <div>
        {/* inserir componente de saida*/}
        <Input label="Produto" value={produto} onChange={(e) => setProduto(e.target.value)} />
        <Input label="Quantidade" type="number" value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} />
        
        {/* Botão para confirmação */}
        <Button onClick={() => setShowModal(true)}>Confirmar Saída</Button>
  
        {/* confirmação */}
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <div>
            <h2>Confirmar Saída de Produtos</h2>
            <p>Produto: {produto}</p>
            <p>Quantidade: {quantidade}</p>
            <Button onClick={handleConfirmarSaida}>Confirmar</Button>
            <Button onClick={() => setShowModal(false)}>Cancelar</Button>
          </div>
        </Modal>
      </div>
    );
  };
  