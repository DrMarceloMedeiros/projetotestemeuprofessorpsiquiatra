/* =========================
   TROCAR TELAS
========================= */

function mudarTela(id, elemento){

  // REMOVE TODAS
  document.querySelectorAll('.screen')
    .forEach(screen => {
      screen.classList.remove('active-screen');
    });

  // ABRE A TELA
  const tela = document.getElementById(id);

  if(tela){
    tela.classList.add('active-screen');
  }

  // REMOVE MENU ATIVO
  document.querySelectorAll('.menu-item')
    .forEach(btn => {
      btn.classList.remove('active');
    });

  // ATIVA MENU
  if(elemento){
    elemento.classList.add('active');
  }

}

/* =========================
   ASSISTENTE IA
========================= */

function analisarCaso(){

  const texto =
    document.getElementById('anamneseIA').value;

  const resultado =
    document.getElementById('resultadoIA');

  if(!texto || texto.length < 10){

    resultado.innerHTML = `

      <div class="result-box orange-box">

        <h3>⚠️ Atenção</h3>

        <p>
          Digite uma anamnese mais detalhada.
        </p>

      </div>

    `;

    return;
  }

  resultado.innerHTML = `

    <div class="result-box blue-box">

      <h3>🧠 Hipótese Diagnóstica</h3>

      <p>
        Transtorno de Ansiedade Generalizada
        associado a sintomas depressivos.
      </p>

    </div>

    <div class="result-box green-box">

      <h3>💊 Sugestão Inicial</h3>

      <ul>
        <li>Escitalopram 10mg/dia</li>
        <li>Psicoterapia TCC</li>
        <li>Higiene do sono</li>
      </ul>

    </div>

    <div class="result-box orange-box">

      <h3>⚠️ Perguntas Importantes</h3>

      <ul>
        <li>Ideação suicida?</li>
        <li>Uso de substâncias?</li>
        <li>Histórico bipolar?</li>
      </ul>

    </div>

    <div class="result-box blue-box">

      <h3>📋 Exames Interessantes</h3>

      <ul>
        <li>TSH</li>
        <li>T4 Livre</li>
        <li>Vitamina B12</li>
        <li>Vitamina D</li>
      </ul>

    </div>

  `;

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
   GERAR RECEITA
========================= */

function gerarReceita(){

  const texto =
    document.getElementById('prescricaoTexto')
      .value;

  if(!texto){

    alert('Digite uma prescrição');

    return;
  }

  alert('Receita gerada com sucesso!');

}

/* =========================
   TEMA ESCURO
========================= */

function alternarTema(){

  document.body.classList.toggle('dark-mode');

}

/* =========================
   INICIALIZAÇÃO
========================= */

window.onload = function(){

  console.log('Sistema iniciado com sucesso');

};
