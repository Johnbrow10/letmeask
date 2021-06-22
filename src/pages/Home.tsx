import IlustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss'
import '../styles/button.scss'
import { Button } from '../components/Button';

export function Home() {
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
          <Button className="create-rom">
            <img src={googleIconImg} alt="logo do google" />
            Crie sua sala com o google
          </Button>
          <div className="separator">ou entre em uma sala</div>
          <form action="">
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button className="button" type='submit'>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}