/* =====================================================================
   CONTEÚDO DO TRABALHO  —  é aqui que ficam TODOS os textos.
   Para mudar um texto, mude só o que está entre aspas.
   *palavra* entre asteriscos aparece em rosa.
   k (tipo do cartão):  nar = fato da narrativa | info = informação
                        int = interpretação do grupo | prov = conteúdo a completar
   i = bloco opcional "Interpretação" no fim do cartão.
   [colchetes] = algo a conferir ou completar.
   ===================================================================== */
window.CONTENT = {
  meta: {
    title: ["Entre", "linhas"],
    kicker: "um livro de leituras em oito partes",
    by: "Conceição Evaristo · Luís Fernando Veríssimo",
    sub: "Conto, crônica e o método P.E.N.T.E.",
    band: "ENTRE·LINHAS  ✶  UM LIVRO DE LEITURAS EM OITO PARTES  ✶  LITERATURA  ✶  "
  },

  /* Os 7 ambientes 3D (cores das paredes e pisos: tons suaves de azul; o index.html usa estas mesmas cores). */
  bays: [
    { wall: "#8fa8c3", floor: "#e1e8ed", ink: "#49647d" },  // 0 divisão 1
    { wall: "#97afc8", floor: "#e5e5e0", ink: "#4d6b82" },  // 1 divisão 2
    { wall: "#869fbd", floor: "#dce5eb", ink: "#465f78" },  // 2 divisão 3
    { wall: "#9db5cc", floor: "#e5e8eb", ink: "#536b80" },  // 3 divisão 4
    { wall: "#8ba7c0", floor: "#d9e3e8", ink: "#46677a" },  // 4 divisão 5
    { wall: "#93abc5", floor: "#e0e7eb", ink: "#4e687f" },  // 5 divisão 6
    { wall: "#89a3be", floor: "#e4e9ed", ink: "#49647d" }   // 6 divisão 7
  ],

  /* As 8 seções. bay = em qual ambiente 3D ela aparece (0 a 5; 6 volta ao ambiente 0). */
  sections: [
    { num: 1, bay: 0, short: "Abertura", title: "Abertura",
      sub: "Um livro que se abre em oito partes",
      cards: [
        { t: "Objetivo do trabalho", k: "info", b: "Este trabalho lê dois textos pelo método P.E.N.T.E. e depois faz duas perguntas: o que cada um mostra sobre a sociedade? E o que isso ainda diz sobre a nossa?" },
        { t: "As duas obras", k: "info", b: "*Conto:* “Maria”, do livro *Olhos d’água*, de Conceição Evaristo.\n*Crônica:* [TÍTULO DA CRÔNICA — a escolher], do livro *Comédias para se ler na escola*, de Luís Fernando Veríssimo." },
        { t: "Os dois autores", k: "info", b: "*Conceição Evaristo* é escritora brasileira, nascida em Belo Horizonte, conhecida pela literatura afro-brasileira.\n*Luís Fernando Veríssimo* é escritor e cronista, nascido em Porto Alegre, conhecido pelo humor crítico.\nCada um tem uma seção própria mais adiante." },
        { t: "O método P.E.N.T.E.", k: "info", b: "Cinco elementos da narrativa, como os dentes de um pente que passa pelo texto:\n*P*ersonagem · *E*spaço · *N*arrador · *T*empo · *E*nredo.\nEles ajudam a entender como a história é construída antes de interpretá-la." },
        { t: "Como navegar", k: "info", b: "Role, arraste ou use as setas para virar as páginas. Os números I a VIII levam a cada seção. Clique nos objetos e nas placas para abrir cartões com explicações." }
      ] },

    { num: 2, bay: 1, short: "Evaristo e Olhos d’água", title: "Conhecendo as obras: Conceição Evaristo e Olhos d’água",
      sub: "A autora, o livro e o conto",
      cards: [
        { t: "Quem é Conceição Evaristo", k: "info", b: "Escritora brasileira nascida em Belo Horizonte, em 1946, em uma família pobre. Na juventude trabalhou como empregada doméstica. Mudou-se para o Rio de Janeiro, estudou Letras e fez mestrado e doutorado. [conferir datas e formação em fonte confiável]" },
        { t: "Trajetória literária", k: "info", b: "Começou a publicar nos anos 1990, nos *Cadernos Negros*. Escreveu romances, contos e poemas, como *Ponciá Vicêncio* e *Becos da Memória*. É associada ao conceito de *escrevivência*: escrever a partir da experiência de vida, sobretudo de mulheres negras. [conferir datas das publicações]" },
        { t: "O livro Olhos d’água", k: "info", b: "Coletânea de contos publicada em 2014. Reúne histórias de pessoas negras e pobres no Brasil. [conferir editora, número de contos e prêmios]" },
        { t: "Contexto e temas", k: "int", b: "Os contos falam de pobreza, racismo, violência, memória e afeto. Interpretação do grupo: o título sugere que a água, como o olhar, guarda lembranças e dor. [conferir com a explicação do título dada pela própria autora, se houver]" },
        { t: "Apresentando “Maria”", k: "nar", b: "“Maria” é um dos contos do livro. Acompanha uma empregada doméstica na volta para casa, de ônibus, depois do trabalho. A análise completa está na seção 3." }
      ] },

    { num: 3, bay: 2, short: "Conto “Maria”: P.E.N.T.E.", title: "Conto “Maria”: análise P.E.N.T.E.",
      sub: "Personagem, espaço, narrador, tempo e enredo",
      cards: [
        { t: "Visão geral", k: "nar", b: "O conto acompanha o fim do dia de Maria, empregada doméstica. Ela volta para casa de ônibus, levando o que a patroa lhe deu, e encontra o pai de seu filho. Ocorre um assalto no ônibus e Maria é acusada injustamente pelos passageiros. [conferir todos os detalhes no texto antes de apresentar]" },
        { t: "Personagem", k: "nar", b: "*Maria* é a protagonista: mulher negra, trabalhadora doméstica, mãe.\n*Secundários:* o ex-companheiro, pai de seu filho; a patroa; o filho; os passageiros do ônibus, que agem como um grupo; os assaltantes. [conferir papéis e nomes no texto]",
          i: "Maria é uma pessoa comum, e isso faz o leitor se identificar com ela e sentir a injustiça do que acontece." },
        { t: "Espaço", k: "nar", b: "Três ambientes principais: a casa da patroa, onde Maria trabalha; o ponto de ônibus; e o interior do ônibus, onde acontece o clímax. [conferir se há outros espaços]",
          i: "O ônibus é público e fechado: todos se veem e se julgam. Isso torna possível o julgamento coletivo." },
        { t: "Narrador", k: "nar", b: "Narrador em terceira pessoa, que não participa da ação e conta a história de Maria, mostrando também o que ela sente e pensa. [conferir o quanto ele sabe dos pensamentos dela]",
          i: "Ao contar de fora, mas perto de Maria, o narrador nos põe ao lado dela: o leitor sabe de sua inocência, os passageiros não." },
        { t: "Tempo", k: "nar", b: "Tempo cronológico e curto: o fim de um dia, da saída do trabalho até a viagem de ônibus, com lembranças da vida dela no caminho. [conferir as lembranças no texto]",
          i: "O tempo curto e rápido aumenta o choque: uma rotina comum vira tragédia em poucos momentos." },
        { t: "Enredo", k: "nar", b: "Sequência dos fatos [conferir no texto]:\n1) Maria sai do trabalho com o que a patroa lhe deu.\n2) Espera e pega o ônibus.\n3) Encontra o ex-companheiro.\n4) Acontece um assalto.\n5) Os passageiros acusam Maria.\n6) O desfecho é violento.",
          i: "O enredo vai do cotidiano ao conflito e termina sem consolo: a história não ‘conserta’ a injustiça, e isso força o leitor a refletir." }
      ] },

    { num: 4, bay: 3, short: "Veríssimo e Comédias", title: "Conhecendo as obras: Luís Fernando Veríssimo e Comédias para se ler na escola",
      sub: "O autor, o livro e a crônica escolhida",
      cards: [
        { t: "Quem é Luís Fernando Veríssimo", k: "info", b: "Escritor e cronista brasileiro, nascido em Porto Alegre, em 1936, filho do escritor Erico Verissimo. Também é cartunista e músico. [conferir dados em fonte confiável]" },
        { t: "Trajetória literária", k: "info", b: "Publica crônicas em jornais há muitas décadas e é conhecido pelo humor com crítica social. [completar com obras e personagens conhecidos, após conferir]" },
        { t: "Comédias para se ler na escola", k: "info", b: "Livro com textos do autor escolhidos para o público escolar. [conferir ano, editora e quem organizou a seleção]" },
        { t: "A crônica escolhida", k: "prov", b: "Conteúdo a completar após a escolha da crônica.\n[TÍTULO DA CRÔNICA]\n[Breve apresentação: do que ela trata, sem reproduzir o texto]" }
      ] },

    { num: 5, bay: 3, short: "Crônica: P.E.N.T.E.", title: "Crônica escolhida: análise P.E.N.T.E.",
      sub: "Seção preparada, aguardando a escolha da crônica",
      cards: [
        { t: "Visão geral", k: "prov", b: "Conteúdo a completar após a escolha da crônica.\n[Resumo da crônica em poucas linhas]" },
        { t: "Personagem", k: "prov", b: "Conteúdo a completar após a escolha da crônica.\n[Quem são as personagens? Quais suas características e papéis?]" },
        { t: "Espaço", k: "prov", b: "Conteúdo a completar após a escolha da crônica.\n[Onde a cena acontece? Que importância tem o lugar?]" },
        { t: "Narrador", k: "prov", b: "Conteúdo a completar após a escolha da crônica.\n[Quem conta? Em 1ª ou 3ª pessoa? Como apresenta os fatos?]" },
        { t: "Tempo", k: "prov", b: "Conteúdo a completar após a escolha da crônica.\n[Quando acontece? Quanto tempo dura? Como o tempo avança?]" },
        { t: "Enredo", k: "prov", b: "Conteúdo a completar após a escolha da crônica.\n[Quais os acontecimentos principais, em ordem?]" }
      ] },

    { num: 6, bay: 4, short: "Crítica social: Maria", title: "Crítica social do conto “Maria”",
      sub: "O que o conto denuncia e como",
      cards: [
        { t: "Visão geral", k: "int", b: "Interpretação do grupo: “Maria” mostra como uma mulher negra, pobre e trabalhadora pode ser vista com suspeita e tratada como descartável, em um país marcado por desigualdade e racismo." },
        { t: "Problema social abordado", k: "int", b: "Racismo, desigualdade de classe e violência coletiva se misturam. Maria é julgada por quem ela parece ser aos olhos dos outros, e não pelo que fez." },
        { t: "Como aparece na narrativa", k: "int", b: "Aparece no trabalho doméstico, no uso do ônibus à noite, no que Maria leva do trabalho, na acusação sem provas e na reação do grupo de passageiros. [relacionar cada ponto a trechos do texto, sem copiar longos trechos]" },
        { t: "O que a sociedade questiona", k: "int", b: "Quem tem direito de ser ouvido? Quem decide quem é culpado? O conto questiona o preconceito, a ‘justiça’ feita pelas próprias mãos e a pouca valorização de quem faz o trabalho doméstico." },
        { t: "Escolhas narrativas", k: "int", b: "O narrador próximo de Maria, o cotidiano simples, a multidão sem nome e o fim brusco ajudam a criar a crítica: o leitor vê a injustiça e não encontra alívio." }
      ] },

    { num: 7, bay: 5, short: "Crítica social: crônica", title: "Crítica social da crônica",
      sub: "Seção preparada, aguardando a escolha da crônica",
      cards: [
        { t: "Problema social abordado", k: "prov", b: "Conteúdo a completar após a escolha da crônica.\n[Qual problema social aparece no texto?]" },
        { t: "Crítica do autor", k: "prov", b: "Conteúdo a completar após a escolha da crônica.\n[O que Veríssimo critica? De que modo, com humor, ironia?]" },
        { t: "Elementos da narrativa", k: "prov", b: "Conteúdo a completar após a escolha da crônica.\n[Quais personagens, espaço, narrador, tempo e enredo sustentam essa leitura?]" },
        { t: "Reflexão sobre a mensagem", k: "prov", b: "Conteúdo a completar após a escolha da crônica.\n[Qual é a mensagem final e o que ela nos faz pensar?]" }
      ] },

    { num: 8, bay: 6, short: "Nos dias atuais", title: "Nos dias atuais",
      sub: "O que essas leituras dizem sobre hoje",
      cards: [
        { t: "Comparar os temas", k: "prov", b: "[Seção a finalizar depois da escolha da crônica.]\nDo conto: racismo, desigualdade e violência coletiva.\nDa crônica: [temas a completar].\nPergunta guia: onde as duas obras se encontram e onde se afastam?" },
        { t: "Problemas que continuam", k: "int", b: "Interpretação do grupo: o preconceito, as desigualdades no mundo do trabalho e os julgamentos precipitados ainda existem hoje. [exemplos atuais, com fontes confiáveis]\nDa crônica: [a completar]." },
        { t: "A crítica e a realidade atual", k: "prov", b: "[Relacionar cada crítica literária a situações de hoje, citando fontes. A completar após a escolha da crônica.]" },
        { t: "A literatura e a sociedade", k: "int", b: "Rascunho: a literatura dá rosto e voz a pessoas que as estatísticas e as notícias muitas vezes apagam. Ler com atenção nos ajuda a perceber injustiças e a perguntar o que podemos fazer. [revisar com a crônica escolhida]" }
      ] }
  ],

  /* Créditos e referências (janela "Colofão") */
  colophon: [
    "Este livro é um trabalho escolar de literatura. Ele lê o conto *“Maria”*, de Conceição Evaristo, e uma crônica de Luís Fernando Veríssimo pelo método P.E.N.T.E.",
    "Grupo: [nomes do grupo] · Turma: [turma e escola] · Professor(a): [nome]",
    "EVARISTO, Conceição. *Olhos d’água*. Rio de Janeiro: Pallas, 2014. [conferir a edição usada]",
    "VERÍSSIMO, Luís Fernando. *Comédias para se ler na escola*. Rio de Janeiro: Objetiva, 2001. [conferir a edição e o título da crônica]",
    "Os textos são resumos e interpretações do grupo e não reproduzem as obras. O que está entre [colchetes] falta conferir ou completar.",
    "Visual adaptado do template *Foldworld* (livro pop-up em three.js). Fontes: Pixelify Sans e Gaegu."
  ]
};
