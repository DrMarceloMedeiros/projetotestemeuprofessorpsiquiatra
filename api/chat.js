export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Método não permitido'
    });
  }

  try {

    const { mensagem } = req.body;

    if (!mensagem) {
      return res.status(400).json({
        error: 'Mensagem não informada'
      });
    }

    const respostaOpenAI = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },

        body: JSON.stringify({

          model: 'gpt-4o-mini',

          messages: [

            {
              role: 'system',
              content: `
Você é um psiquiatra professor universitário experiente.

Seu papel é discutir casos clínicos com outro médico.

Utilize linguagem técnica, didática e objetiva.

NUNCA forneça diagnóstico definitivo.

A resposta deve seguir exatamente esta estrutura:

🧠 HIPÓTESE DIAGNÓSTICA PRINCIPAL
- hipótese principal
- porcentagem estimada de probabilidade
- justificativa clínica

📚 DIAGNÓSTICOS DIFERENCIAIS
- listar diferenciais
- estimar probabilidade
- explicar raciocínio

📊 ESCALAS PSIQUIÁTRICAS
- identificar escalas aplicáveis
- estimar faixa provável
- justificar

⚠️ AVALIAÇÃO DE GRAVIDADE
- leve, moderado ou grave
- risco suicida
- risco psicótico
- necessidade de CAPS
- necessidade de internação

💊 CONDUTAS INICIAIS
- primeira linha
- segunda linha
- terceira linha
- doses iniciais usuais
- quando utilizar cada estratégia

📋 EXAMES COMPLEMENTARES
Separar em:
✅ Necessários
❓ Opcionais
🚫 Não prioritários

❓ PERGUNTAS CLÍNICAS IMPORTANTES
Gerar apenas perguntas úteis para esclarecer os diferenciais.

🚨 ALERTAS PSIQUIÁTRICOS
- armadilhas diagnósticas
- riscos clínicos
- sinais de urgência

🎓 DISCUSSÃO CLÍNICA DO PROFESSOR
Explicar o raciocínio clínico e ensinar pontos importantes para prática médica.
`
            },

            {
              role: 'user',
              content: mensagem
            }

          ],

          temperature: 0.7,
          max_tokens: 1800

        })
      }
    );

    if (!respostaOpenAI.ok) {

      const erroTexto = await respostaOpenAI.text();

      return res.status(500).json({
        erro: 'Erro OpenAI',
        detalhe: erroTexto
      });
    }

    const dados = await respostaOpenAI.json();

    const texto =
      dados.choices?.[0]?.message?.content ||
      'Sem resposta da IA';

    return res.status(200).json({
      resposta: texto
    });

  } catch (erro) {

    return res.status(500).json({
      erro: 'Erro interno',
      detalhe: erro.message
    });

  }

}
