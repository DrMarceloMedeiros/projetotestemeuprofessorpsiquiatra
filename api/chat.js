export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Método não permitido'
    });
  }

  try {

    const { mensagem } = req.body;

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
Você é um assistente psiquiátrico profissional.

Forneça:
- hipótese diagnóstica
- conduta inicial
- perguntas importantes
- possíveis exames
- alertas clínicos

Nunca afirme diagnóstico fechado.
`
            },

            {
              role: 'user',
              content: mensagem
            }
          ],

          temperature: 0.7
        })
      }
    );

    const dados = await respostaOpenAI.json();

    const texto =
      dados.choices?.[0]?.message?.content
      || 'Erro ao gerar resposta';

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
