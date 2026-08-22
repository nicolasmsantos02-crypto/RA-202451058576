# PERÍCIA EM FORMULÁRIOS

*Como a web coleta dados — e o que o navegador faz (e não faz) para protegê-los*

**Programação Web — Aula 3 de 20 · Formulários, Tabelas e Validação**

## 🎯 MISSÃO

Você vai testar formulários reais como um usuário desastrado e depois como alguém mal-intencionado. O objetivo é descobrir onde o HTML ajuda, onde ele atrapalha e até onde a proteção do navegador realmente vai.

- Use o arquivo formulario-hostil.html (ambiente virtual) e um formulário de cadastro real de um site à sua escolha.
- Trabalhe com o DevTools aberto (F12): abas Elements e Console.
- Nas rodadas 3 e 5, use o modo dispositivo (Ctrl+Shift+M) — ou o próprio celular.
- Preencha à mão. A Rodada 5 é a mais importante: não pule.

**⏱️ Tempo:** 40 minutos     **👥 Formato:** individual, conferindo cada rodada com o colega ao lado

> **Nome:** ________Nicolas Martins Santos____________   **Turma:** ___Programação web_________________   **Data:** __21_ / __08_ / __2026____

## RODADA 01 — Anatomia de um campo

> `Formulário real → clicar com o botão direito num campo → Inspecionar`

Cada campo de formulário é uma tag input com atributos que decidem tudo. Catalogue três campos do formulário que você escolheu:

```text
campo   type=____text  name=____nome_______
  1     id=_____c1_________  required? ( )sim ( x)nao

campo   type=_______text_____  name=___telefone_________
  2     id=____c3__________  required? ( )sim (x )nao

campo   type=___texto_________  name=__idade__________
  3     id=___c4___________  required? ( )sim ( x)nao
```

**Sua análise:**

1. Os atributos name e id têm o mesmo valor nos campos que você viu? Eles servem para a mesma coisa?
  não, name identifica o campo no envio e o que foi preenchido , já o id é indentificador unico


2. Algum campo usa placeholder em vez de um rótulo visível? Qual o problema disso?
 não há nenhum identificador placeholder, o problema e que ele desaparece , assim que o usuario começa a digitar , prejudicando a acessibilidade 

3. Que tipo de dado cada campo espera receber, só pelo type?

Ambos os campos são tipo texto

## RODADA 02 — O teste do label

> `Clicar no TEXTO do rótulo (não no campo) em formulario-hostil.html e depois no formulário real`

Um label corretamente associado faz o clique no texto focar o campo. É um teste de 1 segundo que revela se a marcação está certa:

```text
formulario-hostil.html   clicar no rotulo focou o campo? ( )sim ( x)nao
formulario real          clicar no rotulo focou o campo? (x)sim ( )nao

codigo do que FUNCIONA:
  <label for="___custumerDocument>">Nome</label>
  <input id="_from-control___">
```

**Sua análise:**

1. Qual atributo do label precisa bater com qual atributo do input?

o atributo for do label deve ser igual o do ID do input

2. Além do clique, quem mais depende dessa associação para saber o nome do campo?
leitores de tela  e outras tecnologias dependem dessa associação

3. No formulário hostil, o que exatamente estava faltando?

os rotulos foram  com span em vez de label  , por isso o texto não foca no campo

## RODADA 03 — O teclado que o celular abre

> `DevTools → Ctrl+Shift+M (modo dispositivo) ou abra a página no seu celular`

O atributo type muda o teclado que aparece no celular. Teste cada um e descreva o que apareceu:

```text
type="text"      teclado:  comum com letras e numeros
type="email"     teclado: teclado para email com @
type="tel"       teclado: teclado numérico para telefone
type="number"    teclado: teclado númerico
type="date"      controle: caléndario/ seletor  da data 
```

**Sua análise:**

1. Qual type você usaria para CEP? E para um valor em reais? Justifique.
numeric , pois o cep pode começar com 0



2. Um campo de telefone com type="text" funciona. Então por que usar type="tel"?

 type = tel 
tel , pois abre o teclado numerico do telefone 
3. O type="date" mostrou um calendário? Quem desenhou esse calendário: você ou o navegador?

sim , o calendario é fornecido pelo navegador
 
## RODADA 04 — A validação que vem de graça

> `Formulário real → deixar tudo em branco → clicar em enviar`

Antes de qualquer JavaScript, o navegador já barra o envio. Anote a mensagem EXATA que apareceu e descubra quem a causou:

```text
mensagem exibida pelo navegador:
  " Preencha esse campo "

campo que ele apontou primeiro: __campo obrigátorio vazio __
atributo no HTML que causou isso: ___required___

agora digite "batata" num campo type="email" e envie:
  o que aconteceu? não possui modelo valido para email_
```

**Sua análise:**

1. Você escreveu alguma linha de JavaScript para isso funcionar?
 não essa validação e feita pelo propio navegador
2. A mensagem apareceu em português. Quem escolheu esse idioma?

 o navegador escolheu  o idioma da mensagem  de acordo com as configurações  do idioma do navegador 
3. Qual atributo você usaria para exigir no mínimo 3 caracteres num campo de nome?
eu usuaria minlenght=3

## RODADA 05 — Burlando a validação (a rodada que importa)

> `DevTools → Elements → achar um input com required → duplo clique no atributo → apagar → Enter → submeter vazio`

Você acabou de remover a proteção do formulário sem instalar nada, em 3 segundos, só com o navegador. Registre o resultado:

```text
antes de apagar o required, o envio vazio era: ( )bloqueado ( )permitido
depois de apagar o required, o envio vazio foi: ( )bloqueado ( )permitido

tempo que você levou para fazer isso: ______ segundos
ferramenta extra que voce precisou instalar: _______________
```

**Sua análise:**

1. Se qualquer pessoa faz isso em 3 segundos, a validação do HTML serve para proteger o SISTEMA ou para ajudar o USUÁRIO?
 
 A validação  serve para ajudar o usuario e evitar erros 
2. Onde, então, a validação precisa acontecer de novo obrigatoriamente?

precisa acontecer no servidor 
3. Escreva em uma frase o que você diria a um colega que afirma "meu formulário está seguro, tem required em tudo".

não torna um formulario seguro , pois o usuário pode ou remover a alteração
## RODADA 06 — A tabela é de dados ou de layout?

> `Procurar uma tabela real (extrato bancário, tabela de preços, classificação de campeonato) → Inspecionar`

Tabela serve para dados tabulares, com cabeçalhos que dizem o que cada coluna significa. Verifique se a que você achou está marcada corretamente:

```text
usa <caption> (titulo da tabela)?     ( )sim ( x)nao
usa <thead> e <tbody>?                (x )sim ( )nao
os cabecalhos sao <th> ou <td>?       ( )th  ( x)td
os <th> tem scope="col" ou "row"?     (x )sim ( )nao

site investigado: _________________________________
```

**Sua análise:**

1. Se os cabeçalhos são td, como um leitor de tela sabe que "R$ 250,00" pertence à coluna Valor?

 se os cabeçalhos forem td , um leitor de tela terá mais dificuldade para atneder as relação entre os valores suas respctivas coluna s
2. Para que serve o atributo scope?

o atributo informa se o cabeçalho corresponde uma linha  ou a uma coluna 
3. Você encontrou alguma tabela usada para posicionar elementos na tela em vez de mostrar dados? Por que isso é um problema?


tabelas usada para posicionar são um problema por que tabelas devem apresentar dados tabulares 
## DESAFIO

Terminou antes do tempo? Escolha um destes:

- No Console, digite document.querySelector('form').checkValidity() e depois .reportValidity(). O que cada um retorna e faz?
- Descubra o atributo pattern de algum campo real e traduza a expressão regular dele em português.
- Compare um formulário que usa method="GET" com um que usa method="POST": submeta os dois e observe a barra de endereços. Onde os dados aparecem?
