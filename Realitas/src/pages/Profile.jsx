import { Link } from 'react-router-dom'
import './Profile.css'

function Profile() {
  return (
    <section id="pagina-perfil">
      <div className="profile-heading">
        <span className="eyebrow">CONTA / IDENTIFICAÇÃO</span>
        <h1>Meu perfil</h1>
      </div>

      <div className="profile-layout">
        <article className="profile-card">
          <div className="profile-cover">
            <span>REGISTRO DE OPERADOR</span>
            <span className="cover-mark" aria-hidden="true">R</span>
          </div>
          <div className="profile-identity">
            <div className="profile-picture" aria-hidden="true">A</div>
            <div className="profile-name">
              <span className="operator-tag"><i /> OPERADOR ATIVO</span>
              <h2>Alex Silva</h2>
              <p>Recruta desde outubro de 2026</p>
            </div>
            <button type="button">Editar perfil</button>
          </div>
          <div className="profile-details">
            <div><span>IDENTIFICAÇÃO</span><strong>alex.silva@email.com</strong></div>
            <div><span>AGENTES</span><strong>02 cadastrados</strong></div>
            <div><span>CAMPANHAS</span><strong>02 em andamento</strong></div>
          </div>
        </article>

        <aside className="profile-aside">
          <div className="access-card">
            <span className="eyebrow">ACESSO</span>
            <h2>Seu próximo passo</h2>
            <p>Continue sua investigação ou prepare um novo agente para a missão.</p>
            <Link to="/campanhas">Abrir campanhas <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="profile-shortcuts">
            <span className="eyebrow">ATALHOS</span>
            <Link to="/agentes"><span>Meus agentes</span><b aria-hidden="true">→</b></Link>
            <Link to="/campanhas"><span>Minhas campanhas</span><b aria-hidden="true">→</b></Link>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Profile
