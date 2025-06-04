
import '../styles/header.css';

function header() {
  return (
    <header>
      <nav>
        <img src="../public/imgs/rxlogo.png" alt="logo" id='rxlogo' />
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
            
        </ul>
      </nav>
      
    </header>
  )
}
export default header;