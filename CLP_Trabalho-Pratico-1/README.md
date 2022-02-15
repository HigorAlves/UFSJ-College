## Sobre o Trabalho Prático

A sequência de Fibonacci é uma sequência numérica proposta no século XIII por Leonardo de Pisa, também conhecido como Fibonacci. Nela, os dois números iniciais já são conhecidos, 0 e 1. O terceiro termo, bem como todos os demais, é calculado somando-se os dois elementos anteriores. Como exemplo, 0 e 1 são somados, obtendo-se o valor 1, que é adicionado a sequência. Em seguida, é feita a soma 1 + 1, adicionando 2 como quarto elemento. Esse mecanismo se repete para toda a sequência infinita. Logo, a fórmula geral para cálculo do n-ésimo termo é dada por F(n-1) + F(n-2).

Série de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

É fácil pensar em um algoritmo recursivo que retorne o n-ésimo termo. Para obtê-lo, é preciso conhecer os dois termos anteriores que só serão conhecidos se os anteriores a eles também forem, e assim por diante. É necessário, portanto, conhecer todos os n-1 elementos anteriores ao elemento que se quer descobrir. Isso pode ser feito de forma recursiva, como a própria fórmula geral sugere, ou de forma iterativa, calculando, a cada passo, um novo elemento a partir dos elementos já disponíveis.

O objetivo deste trabalho é desenvolver soluções para o cálculo do n-énesimo termo desta série utilizando 3 linguagens de paradigmas de programação diferentes. Os resultados deverão ser apresentados na forma de um relatório.

O relatório de apresentação do trabalho deverá conter as seguintes seções: 1) Introdução (contexto e descrição do trabalho), 2) Materiais e Métodos (Linguageus, Estratégias de Solução), 3) Resultados e Discussão (Implementação, análise, pontos positivos e negativos de cada implemetnação), 4) Conclusão. 
