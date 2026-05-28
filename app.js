/* =========================
   TROCA DE TELAS
========================= */

function mudarTela(id, botao){

  // REMOVE TELAS
  document.querySelectorAll('.screen')
    .forEach(screen => {
      screen.classList.remove('active-screen');
    });

  // ABRE TELA
  const tela = document.getElementById(id);

  if(tela){
    tela.classList.add('active-screen');
  }

  // REMOVE MENU ATIVO
  document.querySelectorAll('.menu-item')
    .forEach(item => {
      item.classList.remove('active');
    });

  // ATIVA MENU
  if(botao){
    botao.classList.add('active');
  }

}

/* =========================
   MODAL IA
========================= */

function abrirModalIA(){

  const modal =
    document.getElementById('iaModal');

  modal.classList.add('show');

}

function fecharModalIA(){

  const modal =
    document.getElementById('iaModal');

  modal.classList.remove('show');

}

/* =========================
   ANALISAR CASO
========================= */

function analisarCaso(){

  const texto =
    document.getElementById('anamneseIA').value;

  if(!texto || texto.length < 15){

    alert('Digite uma anamnese mais detalhada.');

    return;
  }

  // ABRE MODAL
  abrirModalIA();

  // LOADING
  document.getElementById('iaLoading')
    .style.display = 'block';

  // RESULTADO
  document.getElementById('iaResultado')
    .style.display = 'none';

  // SIMULA IA
  setTimeout(() => {

    document.getElementById('iaLoading')
      .style.display = 'none';

    const resultado =
      document.getElementById('iaResultado');

    resultado.style.display = 'block';

    resultado.innerHTML = `

      <div class="result-box blue-box">

        <h3>🧠 Hipótese Diagnóstica</h3>

        <p>
          Transtorno de Ansiedade Generalizada (TAG)
          associado a sintomas depressivos leves.
        </p>

      </div>

      <div class="result-box orange-box">

        <h3>⚠️ Diagnósticos Diferenciais</h3>

        <ul>
          <li>Transtorno Bipolar</li>
          <li>TDAH adulto</li>
          <li>Burnout</li>
        </ul>

      </div>

      <div class="result-box green-box">

        <h3>💊 Conduta Inicial</h3>

        <ul>
          <li>Escitalopram 10mg/dia</li>
          <li>Psicoterapia TCC</li>
          <li>Higiene do sono</li>
        </ul>

      </div>

      <div class="result-box">

        <h3>🚨 Pontos de Atenção</h3>

        <ul>
          <li>Investigar risco suicida</li>
          <li>Avaliar uso de substâncias</li>
          <li>Pesquisar histórico familiar bipolar</li>
        </ul>

      </div>

      <div class="result-box">

        <h3>📋 Exames Interessantes</h3>

        <ul>
          <li>TSH</li>
          <li>T4 Livre</li>
          <li>Vitamina B12</li>
          <li>Vitamina D</li>
        </ul>

      </div>

    `;

  }, 2500);

}

/* =========================
   LIMPAR IA
========================= */

function limparIA(){

  document.getElementById('anamneseIA').value = '';

}

/* =========================
   CONSULTA
========================= */

function salvarConsulta(){

  const nome =
    document.getElementById('nomePaciente').value;

  if(!nome){

    alert('Digite o nome do paciente.');

    return;
  }

  alert('Consulta salva com sucesso!');

}

/* =========================
   BUSCAR PACIENTE
========================= */

function buscarPaciente(){

  const termo =
    document.getElementById('buscarPaciente')
      .value
      .toLowerCase();

  document.querySelectorAll('.patient-card')
    .forEach(card => {

      const texto =
        card.innerText.toLowerCase();

      if(texto.includes(termo)){

        card.style.display = 'block';

      }else{

        card.style.display = 'none';

      }

    });

}

/* =========================
   RECEITA
========================= */

function gerarReceita(){

  const texto =
    document.getElementById('prescricaoTexto').value;

  if(!texto){

    alert('Digite uma prescrição.');

    return;
  }

  alert('Receita gerada com sucesso!');

}

/* =========================
   TEMA
========================= */

function alternarTema(){

  document.body.classList.toggle('dark-mode');

}

/* =========================
   ANIMAÇÃO
========================= */

window.onload = () => {

  const cards =
    document.querySelectorAll('.stats-card');

  cards.forEach((card, index) => {

    card.style.opacity = '0';

    card.style.transform = 'translateY(20px)';

    setTimeout(() => {

      card.style.transition = '0.5s';

      card.style.opacity = '1';

      card.style.transform = 'translateY(0)';

    }, index * 150);

  });

};
