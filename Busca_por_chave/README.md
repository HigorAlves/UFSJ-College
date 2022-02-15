# Busca por Cahve

Este trabalho tem por objetivo exercitar primitivas básicas da Linguagem C e iniciar a discussão
sobre problemas complexos e a sua solução.
Você foi contratado por uma empresa para avaliar diferentes algoritmos de busca e escolher o
melhor dentre eles. As buscas serão realizadas em um arquivo formado por um conjunto de registros
com um par *<chave,valor>* como exemplificado abaixo:

|Chave|Valor|
|:---:|:---:|
|k7|O dia está bonito|
|P1|Vai chover|
|J3|Amanhã tem jogo|
|D3|Eu adoro computação|
|M2|Vou estudar hoje|
|A5|Vou estudar amanhã|
|A1|Tenho que estudar|

As chaves são formadas por uma letra maiúscula entre A e Z seguida por um número entre 1 e 9.
O valor é uma frase aleatória formada por uma cadeia de caracteres. As chaves e os valores devem
ser gerados de forma aleatória. Por exemplo, os valores podem ser gerados a partir de combinações
de diversas palavras. Pode-se utilizar um espaço ou vírgula para separar a chave de seu valor. Cada
par <chave,valor> ocupa uma linha do arquivo. Os pares <chave,valor> devem ser gravados de
forma aleatória no arquivo, sem estarem ordenados. O arquivo deve ter pelo menos 500 registros.
Poderíamos estender esse nosso exemplo para uma aplicação real de busca de páginas web.
A chave seria algum termo e o valor seria uma lista de páginas web onde aquele termo aparece.
Essas páginas web poderiam estar organizadas de forma que as primeiras da lista seriam as mais
relevantes onde o critério de relevância poderia ser o número de páginas que referenciam (possuem
um link para) determinada página. Podemos pensar em várias outras aplicações relacionadas com
o exemplo que vamos trabalhar.
Neste trabalho, a sua 1a
tarefa é implementar um algoritmo de busca sequencial. Dados como
entrada uma chave e o arquivo, o algoritmo varre sequencialmente o arquivo procurando pela chave.
Caso seja encontrada, retorna a linha e o valor da chave, imprimindo essas informações na tela do
terminal. O programa deve ser implementado na linguagem C. As estruturas de dados e a lógica
implementada fazem parte da avaliação do trabalho.
Depois que a busca sequencial estiver implementada e funcionando, você deve medir o tempo
de execução do seu programa para 10 entradas diferentes e as seguintes perguntas devem ser respondidas?

1. Qual é a média dos tempos de execução?
2. Para um arquivo com n registros, quantas comparações em média o seu algoritmo executa?
3.  Para um arquivo com n registros, quantas comparações são realizadas no pior caso?
4. . Para um arquivo com n registros, quantas comparações são realizadas no melhor caso?

A sua 2a tarefa é construir uma árvore de busca binária para realizar as buscas no arquivo. As chaves devem ser ordenadas primeiro comparando-se a letra depois o número.
Um exemplo de sequência ordenada é dada a seguir:
A1, A5, B1, B1, B3, C2, C7, F5, F5, F5, F8, G2, ...

Você deve implementar a estrutura de dados da árvore binária e implementar os métodos para
inserção de chaves e busca de chaves. Depois que a árvore de busca binária estiver implementada
e funcionando, meça o tempo de execução do seu programa para 10 entradas diferentes e responda
às seguintes questões:

1. Qual é a média dos tempos de execução?
2. Para um arquivo com n registros, quantas comparações em média o seu algoritmo executa?
3. Para um arquivo com n registros, quantas comparações são realizadas no pior caso?
4. Para um arquivo com n registros, quantas comparações são realizadas no melhor caso?

Compare as duas estratégias de busca anteriores, qual você acha que é mais eficiente? Por quê?
Embase sua discussão em dados e no conhecimento existente. A maturidade técnica da discussão
será avaliada.

A sua 3a e última tarefa é implementar o algoritmo Quicksort para ordenar o arquivo. Depois
que o Quicksort estiver implementado e funcionando, implemente o algoritmo de busca binária.
Ordene o arquivo com o Quicksort e depois meça o tempo de execução da busca binária para 10
entradas diferentes. Depois, responda às seguintes questões:

1. Qual é a média dos tempos de execução?
2. Para um arquivo com n registros, quantas comparações em média o algoritmo de busca binária
executa?
3. Para um arquivo com n registros, quantas comparações são realizadas no pior caso?
4. Para um arquivo com n registros, quantas comparações são realizadas no melhor caso?

Com base em todos os resultados obtidos, responda às seguintes questões:

* Qual estratégia de busca foi a mais rápida e por quê?
* Discuta como algumas estratégias de busca podem se beneficiar de um arquivo ordenado.

Utilize exemplos e dados em seus argumentos.

## Documentação

Deve ser clara e objetiva, descrevendo as soluções adotadas e justificando bem as escolhas
realizadas. Em termos de análise de resultados, avalie o desempenho e funcionamento de seu
algoritmo para diversas configurações e avalie também o tempo de execução dos mesmos. Lembrese,
o importante é você apresentar maturidade técnica em suas discussões.

**Observações:**

* O código fonte do trabalho deve ser submetido para compilação e execução em ambiente
Linux, tendo como padrão os computadores dos laboratórios do DCOMP.
* Deve ser escrito na linguagem C (trabalhos implementados em outras linguagens como C++/Java/Python
e outras não serão aceitos);
* As estruturas de dados devem ser alocadas dinamicamente e o código deve ser modularizado
utilizando os arquivos .c .h.
* O utilitário Make deve ser utilizado para compilar o programa;
* O arquivo executável deve ser chamado de tp1.
* Faça seu código de forma legível
