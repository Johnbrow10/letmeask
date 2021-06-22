import IlustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg'


import '../styles/auth.scss'
import '../styles/button.scss'
import { Button } from '../components/Button';

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={IlustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as suas duvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova Sala</h2>
          <form action="">
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button className="button" type='submit'>
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <a href="#">clique aqui</a>
          </p>
        </div>
      </main>
    </div>
  )
}