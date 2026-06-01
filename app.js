const SUPABASE_URL =
'https://cftnubhaynoiacgjixwy.supabase.co';

const SUPABASE_KEY =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmdG51YmhheW5vaWFjZ2ppeHd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyNzk3NjgsImV4cCI6MjA5NTg1NTc2OH0.SeUbjmkshCUi8XqMcoCqAOaoKzXDcYRaTtZjzTw1_yM';
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

async function salvarConsulta(){

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

  try{

    const resposta = await fetch(
      `${SUPABASE_URL}/rest/v1/pacientes`,
      {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          nome,
          idade,
          cidade,
          cid,
          evolucao
        })
      }
    );

    if(!resposta.ok){

      throw new Error('Erro ao salvar');

    }

    alert('Paciente salvo com sucesso!');

  }catch(erro){

    console.error(erro);

    alert('Erro ao salvar paciente.');

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
