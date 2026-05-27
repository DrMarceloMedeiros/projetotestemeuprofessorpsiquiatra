```javascript
function mudarTela(id) {

  // ESCONDE TODAS AS TELAS
  document.querySelectorAll('.screen')
    .forEach(screen => {
      screen.classList.remove('active-screen');
    });

  // MOSTRA A TELA SELECIONADA
  document.getElementById(id)
    .classList.add('active-screen');

  // REMOVE MENU ATIVO
  document.querySelectorAll('.menu-item')
    .forEach(btn => {
      btn.classList.remove('active');
    });

  // PEGA BOTÃO CLICADO
  const botoes = document.querySelectorAll('.menu-item');

  botoes.forEach(botao => {

    const onclick = botao.getAttribute('onclick');

    if (onclick && onclick.includes(id)) {
      botao.classList.add('active');
    }

  });

}

/* =========================
   DASHBOARD DINÂMICO
========================= */

const stats = {
  pacientes: 128,
  consultas: 54,
  tdm: 23,
  prescricoes: 76
};

function atualizarDashboard() {

  const numeros = document.querySelectorAll('.stats-card h3');

  if(numeros.length >= 4){

    numeros[0].innerText = stats.pacientes;
    numeros[1].innerText = stats.consultas;
    numeros[2].innerText = stats.tdm;
    numeros[3].innerText = stats.prescricoes;

  }

}

/* =========================
   ASSISTENTE IA SIMULADO
========================= */

function analisarCaso(){

  const textarea = document.querySelector('#dashboard .medical-textarea');

  const texto = textarea.value.trim();

  if(texto.length < 15){

    alert('Digite uma anamnese mais completa.');
    return;

  }

  const resposta = `
HIPÓTESE DIAGNÓSTICA:
• Transtorno Depressivo Maior

CONDUTA:
• Considerar ISRS
• Solicitar exames laboratoriais
• Avaliar risco suicida
• Retorno em 30 dias

OBSERVAÇÕES:
• Investigar bipolaridade oculta
• Avaliar abuso de substâncias
`;

  alert(resposta);

}

/* =========================
   LIMPAR ANAMNESE
========================= */

function limparAnamnese(){

  const textarea = document.querySelector('#dashboard .medical-textarea');

  textarea.value = '';

}

/* =========================
   SALVAR CONSULTA
========================= */

function salvarConsulta(){

  const inputs = document.querySelectorAll('#consulta input');

  let vazio = false;

  inputs.forEach(input => {

    if(input.value.trim() === ''){
      vazio = true;
    }

  });

  if(vazio){

    alert('Preencha todos os campos.');
    return;

  }

  alert('Consulta salva com sucesso.');

}

/* =========================
   GERAR RECEITA
========================= */

function gerarReceita(){

  const texto = document.querySelector('#prescricao .medical-textarea');

  if(texto.value.trim() === ''){

    alert('Digite uma prescrição.');
    return;

  }

  alert('Receita gerada com sucesso.');

}

/* =========================
   BUSCA PACIENTE
========================= */

function ativarBuscaPaciente(){

  const busca = document.querySelector('.search-input');

  busca.addEventListener('keyup', function(){

    const termo = busca.value.toLowerCase();

    const pacientes = document.querySelectorAll('.patient-card');

    pacientes.forEach(card => {

      const nome = card.innerText.toLowerCase();

      if(nome.includes(termo)){

        card.style.display = 'block';

      } else {

        card.style.display = 'none';

      }

    });

  });

}

/* =========================
   TEMA ESCURO
========================= */

let darkMode = false;

function alternarTema(){

  darkMode = !darkMode;

  if(darkMode){

    document.body.style.background = '#020617';
    document.body.style.color = 'white';

  } else {

    document.body.style.background = '#f4f7fb';
    document.body.style.color = '#1e293b';

  }

}

/* =========================
   EXPORTAR BACKUP SIMPLES
========================= */

function exportarBackup(){

  const dados = {
    data: new Date(),
    sistema: 'Meu Professor Psiquiatria'
  };

  const blob = new Blob(
    [JSON.stringify(dados, null, 2)],
    { type:'application/json' }
  );

  const a = document.createElement('a');

  a.href = URL.createObjectURL(blob);

  a.download = 'backup-meu-professor.json';

  a.click();

}

/* =========================
   EVENTOS DOS BOTÕES
========================= */

document.addEventListener('DOMContentLoaded', () => {

  atualizarDashboard();

  ativarBuscaPaciente();

  // BOTÃO ANALISAR
  const analisarBtn = document.querySelectorAll('.primary-btn')[0];

  if(analisarBtn){
    analisarBtn.addEventListener('click', analisarCaso);
  }

  // BOTÃO LIMPAR
  const limparBtn = document.querySelectorAll('.secondary-btn')[0];

  if(limparBtn){
    limparBtn.addEventListener('click', limparAnamnese);
  }

  // SALVAR CONSULTA
  const salvarConsultaBtn = document.querySelector('#consulta .primary-btn');

  if(salvarConsultaBtn){
    salvarConsultaBtn.addEventListener('click', salvarConsulta);
  }

  // GERAR RECEITA
  const receitaBtn = document.querySelector('#prescricao .primary-btn');

  if(receitaBtn){
    receitaBtn.addEventListener('click', gerarReceita);
  }

  // EXPORTAR BACKUP
  const backupBtn = document.querySelectorAll('#config .secondary-btn')[0];

  if(backupBtn){
    backupBtn.addEventListener('click', exportarBackup);
  }

  // TEMA
  const temaBtn = document.querySelectorAll('#config .secondary-btn')[1];

  if(temaBtn){
    temaBtn.addEventListener('click', alternarTema);
  }

});
```
