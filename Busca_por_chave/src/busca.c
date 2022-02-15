#include "Headers/busca.h"

/*------------------------------------------    BUSCA BINARIA   -----------------------------------
Armazemanos os dados do arquivo na memoria, dividimos o vetor ate que a chave seja encontrada
ou que nao seja mais possivel dividir e fazemos comparações entre a chave buscada e os dados.
Logo apos as comparações feitas de acordo com a metade do vetor, se a chave estiver maior ou menor
que a metade do vetor iremos procurar a chave em seu respectivo lado.
--------------------------------------------------------------------------------------------------*/
void Bbinaria(char *chave_busca){
    FILE *arq;
    Dados *dado;
    int i,inicio,meio,fim;

    arq = fopen("arquivo_ordenado","r");

    dado = malloc(200 * sizeof(struct dado));

    for(i = 0; i < 200; i++){
        fscanf(arq,"%c%c",&dado[i].chave[0],&dado[i].chave[1]);
        fgets(dado[i].valor,100,arq);
        if(feof(arq)){
            break;
        }
    }

    inicio = 0;
    fim = i - 1;

    while(inicio <= fim){
        meio = (inicio + fim)/2;

        if(chave_busca[0] < dado[meio].chave[0]){
            fim = meio - 1;
        }else if(chave_busca[0] > dado[meio].chave[0]){
            inicio = meio + 1;
        }else if(chave_busca[0] == dado[meio].chave[0]){
            if(chave_busca[1] < dado[meio].chave[1]){
                fim = meio - 1;
            }else if(chave_busca[1] > dado[meio].chave[1]){
                inicio = meio + 1;
            }else if(chave_busca[1] == dado[meio].chave[1]){
                printf("Chave encontrada\n");
                printf("Valor da chave: %s\n",dado[meio].valor);
                return;
            }
        }
    }
    free(dado);
    printf("Esta chave nao foi encotrada no arquivo!\n");
    return;
}

/*------------------------------------------    BUSCA SEQUENCIAL    --------------------------------------
Verifica se o arquivo foi aberto, depois percorre o arquivo sequencialmente e verifica se a chave procurada
foi achada, apos isso vai verificar se se chegou no final do arquivo, re-olha se a chave buscada é igual a
chave de busca..
--------------------------------------------------------------------------------------------------------*/
void Bsequencial(char *argv,char *chave_busca){
    FILE *arq;
    char chave_arquivo[2];
    char valor_chave[100];
    int i;

    arq = fopen(argv, "r");
    if(arq == NULL){
        printf("Não foi possivel abrir o arquivo!\n");
        return;
    }
    for(i = 0; i < 200; i++){
        fscanf(arq, "%c%c",&chave_arquivo[0],&chave_arquivo[1]);
        fgets(valor_chave,100,arq);
        if(!feof(arq)){
            if((chave_busca[0] == chave_arquivo[0]) && (chave_busca[1] == chave_arquivo[1])){
                printf("Chave encontrada!\n");
                printf("Chave na linha: %d",i+1);
                printf("Valor da Chave: %s\n",valor_chave);
                return;
            }
        }else{
            break;
        }
    }
    printf("Esta chave nao existe no arquivo!\n");
    return;
}


/*------------------------------------------    BUSCA NA ARVORE     -----------------------------------------------------------
Verificamos se a arvore foi criada, logo apos percorremos a arvore ate o final, realizando comparações entre a chave de busca
e o no atual, vemos se as letras e numeros são iguais, caso o numero ou a letra nao seja igual verificamos para saber se devemos
procurar no no da direita ou no nó da esquerda.
-------------------------------------------------------------------------------------------------------------------------------*/

void Barvore(No *raiz, char *chave_busca){
    if((raiz->dir == NULL) && raiz->esq == NULL){
        printf("A arvore nao foi criada, sera impossivel realizar a busca.\n");
        return;
    }else{
        No *atual = raiz;
        No *anterior = raiz;
        while(atual != NULL){
            anterior = atual;
            if(chave_busca[0] == atual->chave[0]){
                if(chave_busca[1] == atual->chave[1]){
                    printf("Chave foi encontrada\n");
                    printf("Valor da Chave encontrada: %s\n",atual->valor);
                    return;
                }else{
                    if(chave_busca[1] > atual->chave[1]){
                        atual = atual->dir;
                    }else{
                        atual = atual->esq;
                    }
                }
            }else{
                if(chave_busca[0] > atual->chave[0]){
                    atual = atual->dir;
                }else{
                    atual = atual->esq;
                }
            }
        }
    }
}
