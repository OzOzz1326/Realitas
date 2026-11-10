import { Link } from 'react-router-dom'
import './Home.css'

const recentCampaigns = [
  { title: 'Ecos do Outro Lado', detail: 'Última sessão · há 2 dias', status: 'Em andamento', mark: '01' },
  { title: 'O Silêncio de Santo Berço', detail: 'Última sessão · há 1 semana', status: 'Em andamento', mark: '02' },
]

function Home() {
  return (
    <section id="pagina-inicial">
      <div className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot" /> CENTRAL DE OPERAÇÕES</span>
          <h1>O véu é fino.<br /><span>O que está além, não.</span></h1>
          <p>Reúna sua equipe, prepare seus agentes e descubra o que se esconde do outro lado da realidade.</p>
          <div className="hero-actions">
            <Link className="button-primary" to="/campanhas">Explorar campanhas <span aria-hidden="true">↗</span></Link>
            <Link className="button-quiet" to="/agentes">Ver meus agentes</Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-ring art-ring-outer" />
          <div className="art-ring art-ring-inner" />
          <div className="art-seal">R</div>
          <span className="art-coordinate">23°33'01.4&quot;S<br />46°38'02.7&quot;W</span>
          <span className="art-caption">REGISTRO Nº 014<br />ACESSO RESTRITO</span>
        </div>
      </div>

      <div className="home-content">
        <section className="home-stats" aria-label="Resumo">
          <div><strong>02</strong><span>agentes registrados</span></div>
          <div><strong>02</strong><span>campanhas ativas</span></div>
          <div><strong>12</strong><span>sessões concluídas</span></div>
          <div className="stat-note"><span className="status-dot" /> Sistema operacional</div>
        </section>

        <section className="campaign-preview">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SEU ARQUIVO</span>
              <h2>De volta ao campo</h2>
            </div>
            <Link className="text-link" to="/campanhas">Todas as campanhas <span aria-hidden="true">→</span></Link>
          </div>
          <div className="campaign-list">
            {recentCampaigns.map((campaign) => (
              <article className="campaign-row" key={campaign.title}>
                <span className="campaign-mark">{campaign.mark}</span>
                <div className="campaign-info">
                  <h3>{campaign.title}</h3>
                  <p>{campaign.detail}</p>
                </div>
                <span className="campaign-status"><span className="status-dot" />{campaign.status}</span>
                <span className="row-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Home
