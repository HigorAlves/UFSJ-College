#ifndef QUICKSORT_H
#define QUICKSORT_H

#include <stdio.h>
#include <stdlib.h>

typedef struct dado{
    char chave[2];
    char valor[100];
}Dados;

int separador(Dados *dado, int fim, int inicio);//Pega um pivo para o QuickSort
void Quicksort(Dados *dado, int fim, int inicio);//Ordena tudo usando QuickSort
void OrdArquivo(char *argv);//Ordena Arquivo

#endif