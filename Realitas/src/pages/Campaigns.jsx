import './Campaigns.css'

const campaigns = [
  { title: 'Ecos do Outro Lado', description: 'Um sinal impossível atravessa as frequências de uma estação abandonada.', status: 'EM ANDAMENTO', players: '04 agentes', master: 'Mestre: Rafael M.', accent: 'campaign-rust', symbol: '◉', sessions: 'SESSÃO 08' },
  { title: 'O Silêncio de Santo Berço', description: 'Na cidade onde ninguém sonha, uma presença começa a despertar.', status: 'EM ANDAMENTO', players: '05 agentes', master: 'Mestre: Luiza C.', accent: 'campaign-ash', symbol: '✳', sessions: 'SESSÃO 03' },
  { title: 'Arquivo Morto: Caso 17', description: 'Relatórios incompletos. Uma equipe desaparecida. Nenhuma explicação.', status: 'RECRUTANDO', players: '02 vagas', master: 'Mestre: Caio N.', accent: 'campaign-ochre', symbol: '⌁', sessions: 'PRÓXIMA: 14 NOV' },
]

function Campaigns() {
  return (
    <section id="pagina-campanhas">
      <div className="campaigns-heading page-heading">
        <div>
          <span className="eyebrow">OPERAÇÕES / REDE DE INVESTIGAÇÃO</span>
          <h1>Campanhas</h1>
          <p>Investigações abertas e operações em andamento.</p>
        </div>
        <button className="button-primary" type="button">＋ Criar campanha</button>
      </div>

      <div className="campaign-filters" aria-label="Filtros de campanha">
        <button className="filter-active" type="button">Todas <span>03</span></button>
        <button type="button">Em andamento</button>
        <button type="button">Recrutando</button>
        <span className="campaigns-count">3 OPERAÇÕES ENCONTRADAS</span>
      </div>

      <div className="campaign-cards">
        {campaigns.map((campaign) => (
          <article className={`operation-card ${campaign.accent}`} key={campaign.title}>
            <div className="operation-art" aria-hidden="true">
              <span className="operation-symbol">{campaign.symbol}</span>
              <span className="operation-index">{campaign.sessions}</span>
            </div>
            <div className="operation-content">
              <div className="operation-meta">
                <span className="operation-status"><i />{campaign.status}</span>
                <span>{campaign.players}</span>
              </div>
              <h2>{campaign.title}</h2>
              <p>{campaign.description}</p>
              <div className="operation-footer">
                <span>{campaign.master}</span>
                <button type="button" aria-label={`Ver campanha ${campaign.title}`}>Ver operação <b aria-hidden="true">↗</b></button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Campaigns
