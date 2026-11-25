/* secoes.js — carregado DEPOIS de conteudo.js. Redefine as 8 seções, os cartões e os livros.
   conteudo.js (meta, cores, créditos) NÃO é alterado.
   IMAGENS: coloque A01.jpg, A02.jpg… na mesma pasta do index.html (ou mude imgBase, ex.: 'imagens/').
   Extensões aceitas: jpg, png, jpeg, webp (minúsculas). Cada cartão tem seu próprio código (campo img). */
   (function(){
    var C=window.CONTENT;
  'imagens/'='';
    function K(chip,t,lines,k){return{k:k||'info',chip:chip,t:t,b:lines.map(function(l){return '• '+l}).join('\n')}}
    var S=[
    {num:1,title:'Conhecendo Conceição Evaristo',short:'Conceição Evaristo',sub:'A autora e a escrevivência',bay:0,cards:[
     K('A autora','Nascimento e origem',['Nascimento: 1946, Belo Horizonte (MG).','Origem humilde; trabalhou como empregada doméstica.']),
     K('A autora','Formação e estreia',['Formação em Letras, mestrado e doutorado.','Estreou na literatura em 1990.']),
     K('A autora','Escrevivência',['Criadora do conceito de *escrevivência*.']),
     K('A autora','Obras',['*Ponciá Vicêncio*','*Becos da Memória*','*Olhos d’Água*'])]},
    {num:2,title:'Olhos d’Água e o conto “Maria”',short:'Olhos d’Água e “Maria”',sub:'A coletânea e o conto',bay:1,cards:[
     K('2.1 Olhos d’Água','Olhos d’Água',['Publicado em 2014.','Coletânea de contos.']),
     K('2.1 Olhos d’Água','Experiências e temas',['Retrata experiências de pessoas negras e pobres.','Temas: racismo, desigualdade, violência, memória e afeto.']),
     K('2.2 Conto “Maria”','“Maria”: resumo',['Maria: mulher negra, empregada doméstica e mãe de três filhos.','Volta para casa de ônibus após um dia de trabalho.']),
     K('2.2 Conto “Maria”','Encontro, assalto e acusação',['Encontra o ex-companheiro durante a viagem.','Acontece um assalto.','É acusada injustamente pelos passageiros.']),
     K('2.2 Conto “Maria”','O que o conto denuncia',['O conto denuncia o racismo e a injustiça social.'])]},
    {num:3,title:'Análise do conto “Maria”',short:'Análise de “Maria”',sub:'Personagens, narrador e tempo',bay:2,cards:[
     K('3.1 Personagens','Maria e os filhos',['Maria: protagonista; mulher negra, trabalhadora e mãe.','Filhos: representam amor materno e responsabilidade.']),
     K('3.1 Personagens','O assalto',['Ex-companheiro: participa do assalto.','Comparsa: participa do assalto.']),
     K('3.1 Personagens','Passageiros e motorista',['Passageiros: acusam Maria injustamente.','Motorista: tenta defendê-la.']),
     K('3.2 Narrador e tempo','Narrador',['Narrador: terceira pessoa, onisciente.','Conhece os pensamentos e sentimentos de Maria.']),
     K('3.2 Narrador e tempo','Tempo',['Tempo: predominantemente cronológico.','A narrativa acontece em um período curto.','Utiliza flashbacks para apresentar lembranças do passado.'])]},
    {num:4,title:'Conhecendo Luís Fernando Verissimo',short:'Luís Fernando Verissimo',sub:'O autor',bay:3,cards:[
     K('O autor','Nascimento e família',['Nascimento: 1936, Porto Alegre (RS).','Filho do escritor Érico Verissimo.']),
     K('O autor','Profissões',['Trabalhou como jornalista, tradutor e roteirista.']),
     K('O autor','Obra e estilo',['Publicou mais de 80 livros.','Estilo: humor, ironia e crítica social.']),
     K('O autor','Falecimento',['Faleceu em 2025.']),
     {k:'prov',chip:'Sobre o livro',t:'Sobre o livro',b:''}]},
    {num:5,title:'Conhecendo “O Homem Trocado”',short:'“O Homem Trocado”',sub:'A crônica e sua análise',bay:3,cards:[
     K('5.1 A crônica','A crônica',['Crônica de Luís Fernando Verissimo.','Apresenta um homem cuja vida é marcada por erros e confusões.']),
     K('5.1 A crônica','Os enganos',['Os enganos começam na maternidade e continuam na vida adulta.','O final apresenta mais uma troca inesperada.']),
     K('5.1 A crônica','Humor e ironia',['Utiliza humor e ironia para criticar erros humanos.']),
     K('5.2 Análise: personagens','Protagonista e enfermeira',['Protagonista: homem marcado por constantes enganos.','Enfermeira: revela o engano final.']),
     K('5.2 Análise: personagens','Pais e esposa',['Pais biológicos e adotivos: envolvidos na troca de bebês.','Esposa: contribui para as confusões da vida do protagonista.'])]},
    {num:6,title:'Críticas sociais das duas obras',short:'Críticas sociais',sub:'“O Homem Trocado” e “Maria”',bay:4,cards:[
     K('6.1 Crítica de “O Homem Trocado”','Erros e falta de responsabilidade',['Erros médicos.','Falta de organização.','Burocracia.','Falta de responsabilidade.','Desrespeito ao indivíduo.'],'crt'),
     {k:'crt',chip:'6.1 Crítica de “O Homem Trocado”',t:'Tema central e realidade',b:'*Tema central:* consequências dos erros e da falta de responsabilidade.\n*Relação com a realidade:* falhas em hospitais, instituições e serviços que prejudicam pessoas.'},
     K('6.2 Crítica de “Maria”','Racismo e desigualdade',['Racismo e preconceito contra mulheres negras.','Desigualdade social.','Violência urbana.','Desigualdade de gênero.','Julgamento e injustiça sem direito à defesa.'],'crm'),
     {k:'crm',chip:'6.2 Crítica de “Maria”',t:'Tema central e realidade',b:'*Tema central:* racismo estrutural e desigualdade enfrentados por mulheres negras e pobres.\n*Relação com a realidade:* preconceito, violência e julgamentos baseados na aparência e condição social.'}]},
    {num:7,title:'Nos nossos dias',short:'Nos nossos dias',sub:'',bay:5,cards:[{k:'prov',chip:'Nos nossos dias',t:'Nos nossos dias',b:''}]},
    {num:8,title:'Conclusão / Retomada',short:'Conclusão',sub:'Retomada',bay:0,cards:[
     K('Conclusão','Conceição Evaristo',['Utiliza a literatura para denunciar racismo e desigualdade.']),
     K('Conclusão','Luís Fernando Verissimo',['Utiliza humor e ironia para criticar problemas sociais.']),
     K('Conclusão','Reflexão',['Ambos apresentam situações que levam à reflexão sobre a sociedade.'])]}
    ];
    var n=0;S.forEach(function(s){s.cards.forEach(function(c){n++;c.img='A'+(n<10?'0':'')+n})});
    C.sections=S;
    /* Livros abertos. As páginas abaixo usam apenas o resumo fornecido.
       Para o texto integral, cole mais objetos {h:'título opcional',t:'texto'} em pages (2 por folha). */
    C.books={
     maria:{kicker:'Olhos d’Água',title:'Maria',author:'Conceição Evaristo',cover:'#a8472f',pages:[
      {h:'Maria',t:'Mulher negra, empregada doméstica e mãe de três filhos.'},
      {t:'Volta para casa de ônibus após um dia de trabalho.'},
      {t:'Encontra o ex-companheiro durante a viagem.'},
      {t:'Acontece um assalto.'},
      {t:'É acusada injustamente pelos passageiros.'},
      {t:'O conto denuncia o racismo e a injustiça social.'}]},
     trocado:{kicker:'Crônica',title:'O Homem Trocado',author:'Luís Fernando Verissimo',cover:'#2f6f6a',pages:[
      {h:'O Homem Trocado',t:'Crônica de Luís Fernando Verissimo.'},
      {t:'Apresenta um homem cuja vida é marcada por erros e confusões.'},
      {t:'Os enganos começam na maternidade e continuam na vida adulta.'},
      {t:'O final apresenta mais uma troca inesperada.'},
      {t:'Utiliza humor e ironia para criticar erros humanos.'}]}
    };
    })();