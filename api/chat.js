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

          Authorization:
            `Bearer ${process.env.OPENAI_API_KEY}`

        },

        body: JSON.stringify({

          model: 'gpt-4o-mini',

          messages: [

            {
              role: 'system',

              content: `
Você é um assistente psiquiátrico especializado.

Responda de forma organizada.

Inclua:

🧠 Hipótese Diagnóstica
💊 Conduta Inicial
⚠️ Alertas Importantes
📋 Exames Úteis
❓ Perguntas Clínicas Importantes

Nunca feche diagnóstico definitivo.
`
            },

            {
              role: 'user',
              content: mensagem
            }

          ],

          temperature: 0.7,
          max_tokens: 700

        })

      }
    );

    // VERIFICA ERRO OPENAI

    if (!respostaOpenAI.ok) {

      const erroTexto =
        await respostaOpenAI.text();

      return res.status(500).json({

        erro: 'Erro OpenAI',

        detalhe: erroTexto

      });

    }

    const dados =
      await respostaOpenAI.json();

    const texto =
      dados.choices?.[0]?.message?.content
      || 'Sem resposta da IA';

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
