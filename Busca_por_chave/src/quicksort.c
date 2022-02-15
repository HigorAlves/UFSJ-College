#include "Headers/quicksort.h"

/*
Aqui verificamos se a chave é menor ou igual a de um pivo, seja ele letra ou numero, e caso a 
chave seja menor iremos jogar a esquerda e maior a direita, caso nao seja menor que o pivo
da esquerda nao avança e sai do loop.
Fazemos isso duas vezes para o pivo da esquerda e da direita.
*/

int separador(Dados *dado, int fim, int inicio){
    int esq = 0,dir = 0,chave_maior = 1;
    
    Dados aux;
    Dados pivo;
    esq = inicio;
    dir = fim;
    pivo = dado[inicio];

    while(esq < dir){
            do{
                chave_maior = 1;
                if(dado[esq].chave[0] == pivo.chave[0]){
                    if(dado[esq].chave[1] <= pivo.chave[1]){
                        chave_maior = 0;
                    }
                }else if(dado[esq].chave[0] <= pivo.chave[0]){
                    chave_maior = 0;
                }
                if(chave_maior == 0){
                    esq++;
                }else{
                    chave_maior = 1;
                }
            }while(chave_maior == 0);

            do{
                chave_maior = 1;
                if(dado[dir].chave[0] == pivo.chave[0]){
                    if(dado[dir].chave[1] > pivo.chave[1]){
                        chave_maior = 0;
                    }
                }else if(dado[dir].chave[0] > pivo.chave[0]){
                    chave_maior = 0;
                }
                if(chave_maior == 0){
                    dir--;
                }else{
                    chave_maior == 1;
                }
            }while(chave_maior == 0);
            if(esq < dir){
                aux = dado[esq];
                dado[esq] = dado[dir];
                dado[dir] = aux;
            }
    }

    dado[inicio] = dado[dir];
    dado[dir] = pivo;
    
    return dir;
}

/*----------------------------------------- Ordena Arquivo --------------------------------
Ordena o arquivo usando Quicksort, para isso ele pega os dados do arquivo e joga na memoria
verifica se chegou ao final do arquivo, salva em um vetor de dados ja ordenados dentro de
outro arquivo.
-----------------------------------------------------------------------------------------*/

void OrdArquivo(char *argv){
    FILE *arq,*arq1;
    Dados *dado;
    int i;
    dado = malloc(200 * sizeof(struct dado));

    arq1 = fopen("arquivo_ordenado","w");
    arq = fopen(argv, "r");

    for(i = 0; i < 200; i++){
        fscanf(arq,"%c%c",&dado[i].chave[0],&dado[i].chave[1]);
        fgets(dado[i].valor,100,arq);
        if(feof(arq)){
            break;
        }
    }
    Quicksort(dado,198,0);

    for(i = 0; i < 200; i++){
        fprintf(arq1,"%c%c%s",dado[i].chave[0],dado[i].chave[1],dado[i].valor);
    }

    fclose(arq1);
    fclose(arq);
    free(dado);
    
    return;
}

void Quicksort(Dados *dado, int fim, int inicio){
    int pivo;
    
    if(fim > inicio){
        pivo = separador(dado, fim, inicio);
        Quicksort(dado, pivo - 1, inicio);
        Quicksort(dado, fim, pivo+1);
    }
}
