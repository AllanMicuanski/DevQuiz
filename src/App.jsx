import React from 'react';
import Radio from './Form/Radio';

const perguntas = [
  {
    pergunta:
      'Qual é a linguagem de programação amplamente utilizada para desenvolvimento web?',
    options: ['HTML', 'CSS', 'JavaScript'],
    resposta: 'JavaScript',
    id: 'p1',
  },
  {
    pergunta:
      'Qual é a estrutura de dados que organiza elementos em uma lista ordenada?',
    options: ['Array', 'Objeto', 'String'],
    resposta: 'Array',
    id: 'p2',
  },
  {
    pergunta: 'Qual é o principal objetivo da linguagem de marcação HTML?',
    options: [
      'Estilizar páginas web',
      'Definir a estrutura e o conteúdo de páginas web',
      'Adicionar interatividade às páginas web',
    ],
    resposta: 'Definir a estrutura e o conteúdo de páginas web',
    id: 'p3',
  },
  {
    pergunta: 'Qual é o componente básico de um banco de dados relacional?',
    options: ['Tabela', 'Documento', 'Conjunto'],
    resposta: 'Tabela',
    id: 'p4',
  },
  {
    pergunta:
      'Qual é o método HTTP comumente usado para enviar dados para um servidor?',
    options: ['GET', 'POST', 'DELETE'],
    resposta: 'POST',
    id: 'p5',
  },
  {
    pergunta:
      'Qual é o principal objetivo do CSS (Cascading Style Sheets) em desenvolvimento web?',
    options: [
      'Adicionar interatividade às páginas web',
      'Definir a estrutura e o conteúdo de páginas web',
      'Estilizar páginas web',
    ],
    resposta: 'Estilizar páginas web',
    id: 'p6',
  },
  {
    pergunta:
      'Qual é a linguagem de programação usada para desenvolver aplicativos móveis nativos no sistema iOS?',
    options: ['Java', 'Swift', 'Kotlin'],
    resposta: 'Swift',
    id: 'p7',
  },
  {
    pergunta: 'Qual é o principal objetivo da programação orientada a objetos?',
    options: [
      'Facilitar a reutilização de código e modelar objetos do mundo real',
      'Criar layouts atraentes e responsivos para páginas web',
      'Realizar cálculos matemáticos complexos',
    ],
    resposta:
      'Facilitar a reutilização de código e modelar objetos do mundo real',
    id: 'p8',
  },
  {
    pergunta:
      'Qual é o software usado para controlar as versões do código fonte em um projeto de desenvolvimento de software?',
    options: ['Git', 'Node.js', 'Docker'],
    resposta: 'Git',
    id: 'p9',
  },
  {
    pergunta:
      'Qual é a linguagem de programação amplamente utilizada para desenvolvimento de aplicativos Android?',
    options: ['Java', 'Swift', 'JavaScript'],
    resposta: 'Java',
    id: 'p10',
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: '',
    p10: '',
  });

  const [slide, setSlide] = React.useState(0);
  const [resultado, setResutado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    console.log('final');
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );

    let mensagem;
    if (corretas.length >= 8) {
      mensagem = `Você é Senior, Acertou: ${corretas.length} de ${perguntas.length}`;
    } else if (corretas.length >= 6) {
      mensagem = `Você é Pleno, Acertou: ${corretas.length} de ${perguntas.length}`;
    } else if (corretas.length >= 3) {
      mensagem = `Você é Junior, Acertou: ${corretas.length} de ${perguntas.length}`;
    } else {
      mensagem = `Você não atingiu a pontuação mínima para classificação.`;
    }

    setResutado(mensagem);
    console.log(corretas);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }
  function previousClick() {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <div>
          <p>{resultado}</p>
          <button onClick={() => window.location.reload()}>Repetir</button>
        </div>
      ) : (
        <div>
          <button onClick={previousClick}>Anterior</button>
          <button onClick={handleClick}>Próxima</button>
        </div>
      )}
    </form>
  );
};
export default App;
