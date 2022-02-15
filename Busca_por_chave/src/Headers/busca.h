#ifndef BUSCA_H
#define BUSCA_H

#include <stdlib.h>
#include <stdio.h>
#include "arvorebinaria.h"
#include "quicksort.h"

void Bbinaria(char *chave_busca);//Busca Binaria
void Bsequencial(char *argv, char *chave_busca);//Busca Sequencial
void Barvore(No *raiz, char *chave_busca);//Busca na arvore

#endif
