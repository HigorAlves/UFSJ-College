#include "Headers/arvorebinaria.h"
#include <string.h>

No* CriarArvore(){
    No* raiz = malloc(sizeof(struct no));
    raiz->dir = NULL;
    raiz->esq = NULL;
    return raiz;
}


/*--------------------------------------------------
Vamos inicializar a arvore pegar os dados do arquivo e colocar na memoria,
insere os dados na arvore e verifica se ela foi montada.
--------------------------------------------------*/
int IniciarArvore(char *argv, No *raiz){
    FILE *arq;
    int i,x;
    char chave_arquivo[2];
    char valor_chave[100];

    arq = fopen(argv, "r");
    if(arq == NULL){
        printf("Falha ao abrir arquivo");
        return 0;
    }
    for(i = 0; i < 200; i++){
        fscanf(arq, "%c%c",&chave_arquivo[0],&chave_arquivo[1]);
        fgets(valor_chave,100,arq);
        if(!feof(arq)){
            x = InserteArvore(raiz, valor_chave,chave_arquivo);
            if(x == 0){
                printf("Falha ao montar arvore\n");
                return 0;
            }
        }
    }
}

    /*---------------------------------------------------------------------------------------------
    Irá cirar um no para ser inserido na arvore de dados, verifica se caso nao tenha no,
    inserir depois da raiz. Busca o local onde vai ser inserido e é feito atraves de comparações
    entre a chave do arquivo e a do no na arvore. Depois ele verifica a letra para saber se ela
    vai ser inserida na direita ou na esquerda, caso as letras sejam iguais ira verificar os numeros
    e realizar o mesmo.
    ----------------------------------------------------------------------------------------------*/

int InserteArvore(No *raiz, char *valor, char *chave){
    
    No *novo;
    novo = malloc(sizeof(struct no));
    novo->chave[0] = chave[0];
    novo->chave[1] = chave[1];
    strcpy(novo->valor,valor);
    novo->dir = NULL;
    novo->esq = NULL;

    if((raiz->dir == NULL) && raiz->esq == NULL){
        raiz->dir = novo;
    }else{
        No *atual = raiz;
        No *anterior = raiz;
        while(atual != NULL){
            anterior = atual;
            if(chave[0] == atual->chave[0]){
                if(chave[1] == atual->chave[1]){
                    atual = atual->dir;
                }else{
                    if(chave[1] > atual->chave[1]){
                        atual = atual->dir;
                    }else{
                        atual = atual->esq;
                    }
                }
            }else{
                if(chave[0] > atual->chave[0]){
                    atual = atual->dir;
                }else{
                    atual = atual->esq;
                }
            }
        }

        /*---------------------------------------------------------------------------------------------------
        Encontrando o local para ser inserido, vamos comparar as chaves e os nos de nossa arvore criada.
        Assim iremos comparar as chaves e colocar a direita ou a esquerda no folha
        ---------------------------------------------------------------------------------------------------*/

        if(chave[0] == anterior->chave[0]){
            if(chave[1] == anterior->chave[1]){
                anterior->dir = novo;
            }else{
                if(chave[1] > anterior->chave[1]){
                    anterior->dir = novo;
                }else{
                    anterior->esq = novo;
                }
            }
        }else{
            if(chave[0] > anterior->chave[0]){
                anterior->dir = novo;
            }else{
                anterior->esq = novo;
            }
        }
    }
    return 1;
}
