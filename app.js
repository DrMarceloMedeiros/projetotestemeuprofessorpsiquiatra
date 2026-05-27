/* =========================
   TROCAR TELAS
========================= */

function mudarTela(id, elemento){

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
    .forEach(btn => {
      btn.classList.remove('active');
    });

  // ATIVA MENU CLICADO
  if(elemento){
    elemento.classList.add('active');
  }

}

/* =========================
   IA
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
        <p>Digite uma anamnese mais detalhada.</p>
      </div>
    `;

    return;
  }

  resultado.innerHTML = `
  
    <div class="result-box blue-box">

      <h3>🧠 Hipótese Diagnóstica</h3>

      <p>
        Transtorno de Ansiedade Generalizada
        com sintomas depressivos associados.
      </p>

    </div>

    <div class="result-box green-box">

      <h3>💊 Sugestão Inicial</h3>

      <ul>
        <li>Escitalopram 10mg/dia</li>
        <li>Psicoterapia</li>
        <li>Higiene do sono</li>
      </ul>

    </div>

    <div class="result-box orange-box">

      <h3>⚠️ Perguntas Importantes</h3>

      <ul>
        <li>Ideação suicida?</li>
        <li>Histórico bipolar?</li>
        <li>Uso de substâncias?</li>
      </ul>

    </div>

  `;

}

/* =========================
   LIMPAR
========================= */

function limparIA(){

  document.getElementById('anamneseIA').value = '';

  document.getElementById('resultadoIA').innerHTML = '';

}

/* =========================
   CONSULTA
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
   BUSCA
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

    alert('Digite uma prescrição');

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
