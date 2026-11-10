import { Link } from 'react-router-dom'
import './Agents.css'

const agents = [
  { name: 'Alex Silva', role: 'Especialista', origin: 'Sobrevivente', className: 'agent-red', initials: 'AS', level: 'NEX 35%' },
  { name: 'Maya Oliveira', role: 'Ocultista', origin: 'Acadêmica', className: 'agent-blue', initials: 'MO', level: 'NEX 20%' },
]

function Agents() {
  return (
    <section id="pagina-agentes">
      <div className="agents-heading page-heading">
        <div>
          <span className="eyebrow">ARQUIVO PESSOAL / 02 REGISTROS</span>
          <h1>Agentes</h1>
          <p>Operadores registrados na sua rede.</p>
        </div>
        <button className="button-primary" type="button">＋ Novo agente</button>
      </div>

      <div className="agent-grid">
        {agents.map((agent) => (
          <article className={`agent-card ${agent.className}`} key={agent.name}>
            <div className="agent-card-top">
              <span className="agent-level">{agent.level}</span>
              <span className="agent-symbol" aria-hidden="true">✳</span>
            </div>
            <div className="agent-portrait" aria-hidden="true"><span>{agent.initials}</span></div>
            <div className="agent-card-info">
              <span className="agent-role">{agent.role} <i /> {agent.origin}</span>
              <h2>{agent.name}</h2>
              <div className="agent-card-bottom">
                <span>FICHA DE AGENTE</span>
                <button type="button" aria-label={`Abrir ficha de ${agent.name}`}>↗</button>
              </div>
            </div>
          </article>
        ))}
        <Link className="new-agent-card" to="/campanhas">
          <span className="new-agent-icon">＋</span>
          <strong>Prepare um novo agente</strong>
          <span>Entre em uma campanha para começar uma nova história.</span>
          <span className="text-link">Ver campanhas <b aria-hidden="true">→</b></span>
        </Link>
      </div>
    </section>
  )
}

export default Agents
