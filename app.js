```javascript
function mudarTela(id) {

  // REMOVE TELAS ATIVAS
  document.querySelectorAll('.screen')
    .forEach(screen => {
      screen.classList.remove('active-screen');
    });

  // ABRE TELA SELECIONADA
  const tela = document.getElementById(id);

  if(tela){
    tela.classList.add('active-screen');
  }

  // REMOVE MENU ATIVO
  document.querySelectorAll('.menu-item')
    .forEach(btn => {
      btn.classList.remove('active');
    });

  // PEGA BOTÃO CLICADO
  const botao = event.currentTarget;

  if(botao){
    botao.classList.add('active');
  }

}

/* =========================
   ASSISTENTE PSIQUIÁTRICO IA
========================= */

function analisarCaso(){

  const texto = document.getElementById('anamneseIA').value;

  const resultado = document.getElementById('resultadoIA');

  if(!texto || texto.length < 15){

    resultado.innerHTML = `
      <div class="alert-box">
        ⚠️ Digite uma anamnese mais detalhada.
      </div>
    `;

    return;
  }

  // IA SIMULADA TEMPORÁRIA

  let resposta = `
    <div class="ia-box">

      <h3>🧠 Hipótese Diagnóstica</h3>

      <p>
        Transtorno de Ansiedade Generalizada (TAG)
        associado a sintomas depressivos leves.
      </p>

      <h3>💊 Conduta Inicial</h3>

      <ul>
        <li>Escitalopram 10mg/dia</li>
        <li>Psicoterapia TCC</li>
        <li>Orientação higiene do sono</li>
      </ul>

      <h3>⚠️ Perguntas Importantes</h3>

      <ul>
        <li>Histórico de bipolaridade?</li>
        <li>Uso de álcool ou substâncias?</li>
        <li>Ideação suicida?</li>
      </ul>

      <h3>📋 Exames Interessantes</h3>

      <ul>
        <li>TSH</li>
        <li>T4 Livre</li>
        <li>Vitamina B12</li>
        <li>Vitamina D</li>
      </ul>

    </div>
  `;

  resultado.innerHTML = resposta;

}

/* =========================
   LIMPAR IA
========================= */

function limparIA(){

  document.getElementById('anamneseIA').value = '';

  document.getElementById('resultadoIA').innerHTML = '';

}

/* =========================
   SALVAR CONSULTA
========================= */

function salvarConsulta(){

  const nome =
    document.getElementById('nomePaciente').value;

  if(!nome){

    alert('Digite o nome do paciente');

    return;
  }

  alert('Consulta salva com sucesso!');

}

/* =========================
   BUSCA PACIENTE
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
   GERAR RECEITA
========================= */

function gerarReceita(){

  const texto =
    document.getElementById('prescricaoTexto').value;

  if(!texto){

    alert('Digite uma prescrição');

    return;
  }

  alert('Receita gerada!');

}

/* =========================
   TEMA ESCURO
========================= */

function alternarTema(){

  document.body.classList.toggle('dark-mode');

}

/* =========================
   DASHBOARD ANIMADO
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
```
