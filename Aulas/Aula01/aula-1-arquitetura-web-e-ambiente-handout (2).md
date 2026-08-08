# FICHA DE INVESTIGAÇÃO

*O que viaja pela rede entre o seu clique e a página na tela*

**Programação Web — Aula 1 de 20 · Arquitetura das Aplicações Web**

## 🎯 MISSÃO

Você vai abrir as ferramentas de desenvolvedor do navegador e descobrir, por conta própria, o que acontece entre apertar Enter numa URL e ver a página pronta. Ninguém vai explicar antes — as respostas estão na tela.

- Escolha um site à sua livre escolha e mantenha o MESMO site nas 5 rodadas.
- Abra o DevTools: F12 (ou Ctrl+Shift+I) e vá para a aba Network.
- Preencha a ficha à mão, com suas palavras. Não há resposta "de gabarito".
- Errar aqui é esperado e não vale nota: a ficha é material de investigação, não prova.

**⏱️ Tempo:** 40 minutos     **👥 Formato:** individual, conferindo cada rodada com o colega ao lado

> **Nome:** ____Nicolas Martins Santos________________   **Turma:** _____Programação Web_______________   **Data:** __07_ / __08_ / __2026____

## RODADA 01 — A primeira requisição

> `DevTools → aba Network → marcar "Disable cache" → recarregar a página (F5)`

A lista se enche de linhas. Olhe apenas a PRIMEIRA delas — é o documento que o navegador pediu quando você digitou o endereço.

```text
Name          Status   Type       Size      Time
------------  ------   --------   -------   ------
www.site.com   ___     document    ___ kB    ___ ms
```

**Sua análise:**

1. Qual é o método HTTP e o status code dessa primeira requisição?

GET

2. Qual o tamanho dela em kB? Ela é a maior da lista?
49 . KB

3. Some o total transferido pela página (barra inferior do DevTools). Quantas requisições foram, no total?

145 Requisições

## RODADA 02 — O que vem depois

> `Usar os filtros do topo da aba Network: All · Doc · CSS · JS · Img · Font`

O navegador pediu muito mais do que você digitou. Classifique o que veio depois e conte cada tipo.

```text
Doc  (HTML) .......... ____ requisicoes
CSS  (estilo) ........ ____ requisicoes
JS   (comportamento) . ____ requisicoes
Img  (imagens) ....... ____ requisicoes
Font (tipografia) .... ____ requisicoes
```

**Sua análise:**

1. Ninguém clicou nesses arquivos. Quem, então, pediu por eles?

Foi o proprio navegador , ao interpretar o HTML da pagina, ao carregar o documento encontra refêrencias a outros recursos , como arquivos CSS , JavaScript  , imagens  e fontes e automaticamente faz requisições HTTO para buscá-los e automaticamente faz requisições HTTP para buscálos. Portanto, ninguém precisou clicar neles.

2. Há requisições para endereços de OUTROS domínios? Anote um deles e arrisque um palpite sobre o que seja.

Sim  existe alguns dominios dentre deles como Google Analyttics , CDN e serviços de anuncios 

## RODADA 03 — Anatomia de um pedido e de uma resposta

> `Clicar em qualquer linha da lista → aba Headers → seções General e Response Headers`

Cada linha da lista esconde uma conversa em texto puro. É isso que trafega na rede:

```text
GET /index.html HTTP/1.1          <- o pedido do navegador
Host: www.site.com
User-Agent: Mozilla/5.0 ...

HTTP/1.1 200 OK                   <- a resposta do servidor
Content-Type: text/html; charset=utf-8
Content-Length: 48213
Server: nginx

<!DOCTYPE html> ...               <- o conteudo, finalmente
```

**Sua análise:**

1. Na requisição que você escolheu, qual o valor de Content-Type?

Text/html

2. Qual servidor respondeu (header Server)? E o status code?

AmzonS3
200 ok
3. Compare o Content-Type de um arquivo CSS com o de uma imagem. O que muda?
CSS: text / CSS indica que o arquivo contém uma folha de estilos.
Imagem: algo como image/png, image/ jpeg ou image/webp que indica o formato da imagem
## RODADA 04 — Quando alguma coisa dá errado

> `Na barra de endereços, acrescentar /pagina-que-nao-existe-123 ao domínio e dar Enter`

Com o DevTools aberto, observe a requisição da página inexistente. O servidor respondeu — só não respondeu o que você queria.

```text
HTTP/1.1 ___ ________            <- preencha status e mensagem

Compare com a rodada 01:
  rodada 01 -> status ______
  rodada 04 -> status ______
```

**Sua análise:**

1. O servidor está no ar ou fora do ar? Como você sabe?
 O fato  de ele responder 404 Not found mostra  que a requisição chegou ao servidor e ele consegiu enviar uma resposta.

2. O erro foi de quem pediu ou de quem respondeu? Justifique.


 Foi um erro do lado de quem pediu, no sentido de que a URL / recurso solicitado  não foi encontrado . O servidor respondeu corrtamente  informando isso com o status 404.
3. Se o status fosse 500 em vez do que você anotou, a conclusão seria a mesma? Por quê?

A conclusão será diferente  o 500 Internal Server ERROR indica um problema no servidor ao tentar processar  a requisição
portanto :

4004 - servidor funcionando , recurso solicitado não encontrado
500 servidor funcionando , mas ocorreu um erro interno  ao procesar  a requisição


## RODADA 05 — Quem faz o quê na página

> `DevTools → Ctrl+Shift+P → digitar "Disable CSS" → Enter. Depois recarregue para desfazer.`

Este é o experimento que separa as três tecnologias da web. Observe a página antes e depois:

```text
COM CSS                    SEM CSS
-----------------------    -----------------------
cores, colunas, fontes     ______________________
menu na horizontal         ______________________
textos e links             ______________________
```

**Sua análise:**

1. O texto e as imagens desapareceram junto com o CSS? O que isso diz sobre onde o CONTEÚDO mora?


 Não. E les continuam na página , apenas sem a formatação visual. Isso mostra que o conteúdo mora principalmente  no HTMLL, o CSS  apenas altera sua apresentação
2. Descreva em uma frase o papel do CSS, com base apenas no que você acabou de ver.

O CSS controla a aparência e o layout da página cores, fontes , espaçamentos colunas e posicionamento

3. Ainda restou algum comportamento (menu que abre, botão que responde)? De qual das três tecnologias ele vem?

Se algum algum menu ainda abre ou algum bitão continua respondendo, esse comportamento vem do JavaScript.