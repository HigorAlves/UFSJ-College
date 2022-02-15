#Descrição do Problema

Uma empresa de software tem como principal produto uma ferramenta de análise de textos na Web.

Para isso, ela precisa de um relatório estatı́stico sobre os textos de entrada. Para criar esse relatório estatı́stico, você
foi contratado.

O relatório deve informar a quantidade de ocorrências das palavras mais frequentes, ordenadas pela frequência em que apareceram.

O trabalho consiste em fazer um programa que conte quantas vezes a mesma palavra aparece num texto de
entrada, determinando assim a sua frequência. Uma palavra é definida como uma sequência consecutiva de letras
do alfabeto, maiúsculas e/ou minúsculas. 

As palavras com uma única letra devem ser ignoradas, bem como espaços em brancos, sinais de pontuação, caracteres especiais, etc. Você pode assumir que as palavras não terão acentuação. Além disso, o programa deve ser case insensitive. Por exemplo, são consideradas iguais as palavras ”insensitive”, ”InSensitive”ou ”INSENSITIVE”.

Para a estrutura de pesquisa e inserção das palavras deverá ser usada uma hash table. A função hash deve
receber a palavra a ser inserida (código ASCII) e calcular o valor de seu hash. A função hash deve ser rápida e
gerar o mı́nimo de colisões possı́vel (crie diversas funções e use a melhor).
Idealmente, a ocupação da tabela deve ser uniforme. As colisões devem ser tratadas por endereçamento aberto.

####Entrada

O programa será testado da seguinte maneira: ./prog < input.txt - onde input.txt é arquivo que contém o
texto. O arquivo de entrada contém no máximo 256 palavras diferentes e cada palavra não terá mais de 20 letras.
A entrada termina com EOF (end-of-file).

####Saída

Para cada arquivo de entrada seu programa deve produzir um conjunto de linhas na saı́da. Cada linha deve
conter um número indicando a frequência, um espaço em branco e a palavra (todas as letras devem ser minúsculas).
Seu programa deve imprimir, na saı́da padrão, apenas as palavras com frequência maior ou igual a 2. A saı́da
deve ser ordenada de forma decrescente de frequência e, em caso de mesma frequência, o desempate deve ser em
ordem lexicográfica (aqui é só usar algum dos algoritmos de ordenação do TP anterior).

####Exemplo

> Entrada (input.txt)

| Modelo de Texto |
| -------------------------- |
|Pedra, papel, tesoura, lagarto, Spock.
|Eh muito simples! Olhe - tesoura corta papel, papel cobre pedra, pedra esmaga lagarto,|
| lagarto envenena Spock, Spock esmaga tesoura, tesoura decapita lagarto, lagarto come papel,|
|papel refuta Spock, Spock vaporiza pedra e como sempre, pedra quebra tesoura...|
|Sheldon Cooper|

####Sáida

| Exemplo de sáida |
| ------- |
|5 largato|
|5 papel|
|5 pedra|
|5 spock|
|5 tesoura|
|2 esmaga|


#DOCUMENTAÇÃO

####Introdução 

A criação da Hash Table foi criada por meio de muitas dúvidas e bules de café. Há crenças de que possa ter sido inventada por H. P. Luhn, quando trabalhou na IBM, ou de que poderia ter sido criada por autos de compiladores nos anos 60, como uma estratégia de guardar as listas de variáveis de usuário e seus valores.  
Um dos vários exemplos de seu uso na Ciência da Computação é o interpretador de linguagem BASIC, que não passa de uma calculadora com uma Hash Table, em que são armazenados suas variáveis e valores. Quando se trata de uma Hash Table, significa referir-se a uma estrutura em que os registros armazenados em uma tabela são diretamente endereçados a partir de uma transformação aritmética sobre uma chave de pesquisa.

####Objetivo do Trabalho 

O objetivo do trabalho é implementar um código em linguagem C que crie uma Hash Table, e a ordene em ordem decrescente de acordo com o número de repetições de cada palavra do texto base, caso mais de uma palavra tenha a mesma quantidade de repetições ordenar por ordem lexicográfica, podem existir até 256 palavras com no máximo 20 caracteres. Esse problema exige o uso dos conhecimentos adquiridos nas aulas de AEDS I e AEDS II. 
Foi necessário o uso de funções de hash para gerar uma chave para cada palavra recebida de um certo texto as quais deviam ter mais de um caractere, e a escolha de um método de ordenação, o qual foi SelectionSort. Dessa forma, o trabalho teve como fim a implementação e compreensão da estrutura citada anteriormente.

####Ambiente

- Linguagem de programação usada: Linguagem C
- Editor de texto ATOM
- Testes foram realizados em um Desktop com processador CORE i7 6º geração, 16GB RAM, usando sistema operacional UBUNTU LTS 16.04 64BITS 

####Analise de Complexidade

#####Hash

O código apresenta dois casos relevantes, o primeiro deles é o primeiro laço WHILE que apresenta O(n) e em seu pior caso O(n²). E o segundo caso, _e o método de ordenação utilizado, o SelectionSort que apresenta O(n²) e será melhor Analisado logo abaixo. Portanto conclui-se que O(n2) é sua complexidade, sem apresentar melhor ou pior caso.

#####Selection Sort 

Para movimentar o menor elemento de um vetor não ordenado, a complexidade de O(n), é preciso percorrer todo o vetor para verificar se esse elemento é de fato o menor, este método irá realizar a operação n vezes, sendo assim sua complexidade é O(n²).

####Hash Table - Implementação

A criação de uma Hash significa atribuir valores a partir de uma transformação aritmética a uma chave qualquer, podem ser nomes de pessoas, ou no caso, palavras de um texto base qualquer.  A implementação consistia em algumas regras básicas, como a leitura de um texto base de um arquivo, apenas palavras com mais de um caractere seriam contadas e sem distinção de letras (case insensitiva) maiúsculas e minúsculas, bem como a exclusão de qualquer caractere especial.
Cada palavra é pega do arquivo e é verificado onde estão as exclusões a serem feitas. Então, para essas palavras, no mesmo momento em que são lidas do arquivo é atribuído seu valor de Hash pelas duas funções anteriormente explicadas.  Em seguida, com o valor da hash gerado pela palavra é verificado se existe algum registro de armazenamento, se não houver, a palavra é alocada nesse espaço e o contador de repetições da mesma é acrescido uma unidade. Se já houver registro nessa posição é verificado se a palavra atual é igual a palavra que já existe, se for, seu contador será acrescido de mais uma unidade, caso contrário, a palavra atual sendo diferente isso irá gerar uma colisão.  Para tratar uma colisão, a variável auxiliar que guarda cada hash gerada em cada repetição feita pelo laço do WHILE, entra em vigor, para não perder o valor original da Hash e a partir dele seja procurado uma posição vazia, por meio de verificações dentro de um outro WHILE, quando se encontra um espaço, a palavra é alocada, seu contador de repetições é acrescido de uma unidade bem como o contador de colisões da Hash, isso é feito para que já se saiba que uma colisão existiu e que assim, caso essa palavra repita, seu contador possa ser acrescido da mesma forma, contando assim todas as suas repetições na nova Hash, já que palavras com colisões vão para um endereçamento aberto.  Ao final desse laço de repetição que não se encerra até que todo o arquivo seja lido por completo, termos uma Hash Table preenchida e pronta para ser ordenada pelo método de ordenação escolhido, e logo após também ser ordenada por ordem lexicográfica. 

####Colisões e transformação aritmética

A transformação para hash, foi feita de maneira simples, na sua função é passado o valor ASCII e o tamanho da palavra, sendo assim, dentro de um laço de repetição de i até o tamanho da palavra será feita a multiplicação da hash * hash * resp (resp é um valor criado por mim) e logo em seguida feito um OU EXCLUSIVO com o valor do ponteiro da string. Esse valor adquirido com a função é que vai dizer em qual posição do meu vetor de struct aquele registro será armazenado, o qual possui dois inteiros, um para contar as repetições de cada registro, o outro inteiro irá armazenar as colisões, outro tipo char, para armazenar as palavras lidas do arquivo e colocadas na posição de sua hash, assim temos uma hash table. Porem como podem haver colisões que é um problema rotineiro a ser encontrando nesse tipo de estrutura.  Uma colisão significa que duas palavras diferentes tem o mesmo valor de Hash, oque diz que elas tecnicamente deveriam estar no mesmo local na table. Para lidar com isso é necessário passar por todo vetor e procurar o próximo espaço vazio e então armazenar esse registro nessa posição, e atribuir a ele esse novo valor de hash, para que em casos futuros o seu contador seja atribuído corretamente de acordo ao seu número de repetições.

####Ordenação

A ordenação foi feita de forma decrescente dos números de repetições de cada registro. E no caso de registros um mesmo numero de repetições, a ordenação será feita lexicográfica.  O Select Sort é baseado em olhar todos os itens do vetor comparando-os para encontrar o menor deles, e então colocá-lo na primeira posição, para assim ordenar item por item. Na implementação há um FOR que passa por todo o vetor enquanto um WHILE faz a comparação dos itens, para selecionar qual o menor deles, e assim colocá-lo na primeira posição. Após o Select ordenar todo meu vetor pelo índice de repetições, o código irá passar para um outro FOR o qual ira ordenar em ordem lexicográfica somente se houver repetições iguais, caso não haja repetições iguais ele não irá reordenar nada.

####Funções

Função que atribuiu valor á Hash:
```c
unsigned int hashFunction(const char* str, unsigned int len)
```

####Conclusão

Foi aprendido o Conceito da aplicação de uma Hash Table, e uma forma de por em pratica ate então um instrumento do qual particularmente não entendia muito e passei a ver o valor da mesma. Auxiliou também na melhor fixação do conceito de struct e arquivos e como trabalhar e modelar ambos.  A Maior dificuldade encontrada foi no tratamento de colisões pois o vetor de struct sempre gerava erro de segmentação por ter declarado uma variável sem tamanho no caso a variável char word [20], este erro que foi descoberto com ajuda de um debuger.  Ordenação foi um tanto quanto simples de se fazer ate mesmo com ordem lexicográfica pois com 5 minutos no google é possível achar uma função própria do C que facilita em muitas linhas o código. 

######Referencias
- Rafael Sachetto. Slides Prof. Rafael Sachetto.
- http://www.partow.net/programming/hashfunctions/#top
