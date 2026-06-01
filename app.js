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

async function analisarCaso() {

  const texto =
    document.getElementById('anamneseIA').value;

  const resultado =
    document.getElementById('resultadoIA');

  if (!texto || texto.length < 10) {

    resultado.innerHTML = `
      <div class="alert-box">
        ⚠️ Digite uma anamnese mais detalhada.
      </div>
    `;

    return;
  }

  resultado.innerHTML = `
    <div class="ia-loading">
      <div class="loader"></div>
      <p>Analisando caso clínico...</p>
    </div>
  `;

  try {

    const resposta = await fetch('/api/chat', {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        mensagem: texto
      })

    });

    const dados = await resposta.json();

    resultado.innerHTML = `
      <div class="ia-box">
        ${dados.resposta.replace(/\n/g, '<br>')}
      </div>
    `;

  } catch (erro) {

    resultado.innerHTML = `
      <div class="alert-box">
        ❌ Erro ao conectar IA.
      </div>
    `;

  }

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

  const idade =
    document.getElementById('idadePaciente').value;

  const cidade =
    document.getElementById('cidadePaciente').value;

  const cid =
    document.getElementById('cidPaciente').value;

  const evolucao =
    document.getElementById('evolucaoPaciente').value;

  if(!nome){

    alert('Digite o nome do paciente.');

    return;

  }

  console.log({
    nome,
    idade,
    cidade,
    cid,
    evolucao
  });

  alert('Consulta capturada com sucesso!');

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
