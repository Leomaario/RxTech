import { useState } from 'react'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <div className='apresentacao'>
        <h1>RXTECH</h1>
        <p>Manutenção de hardware</p>
        <button className='btn-contact'>Contato</button>
      </div>

     <section className="secao-servicos">
        <div className="container-cards">
          {/* Card 1 - Exemplo */}
          <div className="card">
            {/* Use as imagens que gerei para você ou outras que preferir */}
            <img src="../public/imgs/ilustreimpress.png" alt="Manutenção de Computador" />
            <div className="card-conteudo">
              <h3>Manutenção de Impressora</h3> {/* Título do card da imagem de referência */}
              <p>Recarga de toner, Limpeza de cabeçote, Alinhamento de cartuchos, Calibração de cores, 
                Entre Outros</p>
              <a href="#" className="botao-card">Saiba mais</a> {/* Adapte o link e texto */}
            </div>
          </div>

          {/* Card 2 - Exemplo */}
          <div className="card">
            <img src="../public/imgs/ilustrinot.png" alt="Manutenção de Notebook" />
            <div className="card-conteudo">
              <h3>Manutenção de Notebook</h3> {/* Título do card da imagem de referência */}
              <p>Formatação, Limpeza preventiva, Troca de peças, Atualização de drivers, Remoção de vírus, Otimização de sistema</p> {/* Texto do card da imagem de referência */}
              <a href="#" className="botao-card">Saiba mais</a>
            </div>
          </div>

          {/* Card 3 - Exemplo */}
          <div className="card">
            <img src="../public/imgs/ilustripc.png" alt="Manutenção de PC" />
            <div className="card-conteudo">
              {/* Adaptei este título, pois a imagem de referência mostra "PC Monitor Maintenance" */}
              <h3>Manutenção de PC</h3>
              <p>Formatação, Limpeza preventiva, Troca de peças, Atualização de drivers, Remoção de vírus, Otimização de sistema</p>
              <a href="#" className="botao-card">Saiba mais</a>
            </div>
          </div>

          {/* Adicione mais cards conforme necessário */}
        </div>
      </section>































    </div>

  )
}

export default App
