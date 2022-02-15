#ifndef ARVOREBINARIA_H
#define ARVOREBINARIA_H

#include <stdio.h>
#include <stdlib.h>

typedef struct no{
    char chave[2];
    char valor[100];
    struct no* esq;
    struct no* dir;
}No;

No* CriarArvore();
int InserteArvore(No *raiz, char *valor, char *chave);
int IniciarArvore(char *argv, No *raiz);

#endif
