/*#######################################
#       Trabalho pratico AEDS III       #
#         Higor Henrique Alves          #
#######################################*/

#include "Headers/arvorebinaria.h"
#include "Headers/busca.h"
#include "Headers/quicksort.h"
#include <sys/time.h>

/*
Verficamos se foi passado um arquivo por argumentos, montamos a função de tempo para medi-lo,
criamos um menu usando switch, colocamos dentro de um while com uma flag de saida, e dentro de cada opção
colocamos o tipo de busca que o usuario pode escolher para fazer.
*/

int main(int argc, char *argv[]){
    
    int opcao; 
    struct no *raiz;
    char chave[2];
    struct timeval inicio,fim;
    int tmili;
    
    if(argc < 2){
        printf("Falha na execução.\nTente passar o arquivo de texto por argumento!");
        return 0;
    }

    do{
        printf("1- Busca Binaria\n");
        printf("2- Busca em Arvore\n");
        printf("3- Busca sequencial\n");
        printf("4- Sair do programa\n");
        scanf("%d",&opcao);

        setbuf(stdin,NULL);

        if((opcao > 0) && (opcao < 4)){
            printf("Qual chave deseja procurar? \n");
            scanf("%c%c",&chave[0],&chave[1]);
        }
        
        switch(opcao){
            case 1:
                OrdArquivo(argv[1]);
                gettimeofday(&inicio,NULL);
                Bbinaria(chave);
                gettimeofday(&fim,NULL);

                tmili = (int) (1000 * (fim.tv_sec - inicio.tv_sec) + (fim.tv_usec - inicio.tv_usec));
                printf("Tempo que demorou para executar %d\n",tmili);
            break;

            case 2:
                raiz = CriarArvore();
                IniciarArvore(argv[1],raiz);
                gettimeofday(&inicio,NULL);
                Barvore(raiz, chave);
                gettimeofday(&fim,NULL);

                tmili = (int) (1000 * (fim.tv_sec - inicio.tv_sec) + (fim.tv_usec - inicio.tv_usec));
                printf("Tempo que demorou para executar: %d\n",tmili);
            break;

            case 3:
                gettimeofday(&inicio,NULL);
                Bsequencial(argv[1],chave);
                gettimeofday(&fim,NULL);

                tmili = (float) (1000 * (fim.tv_sec - inicio.tv_sec) + (fim.tv_usec - inicio.tv_usec));
                printf("Tempo que demorou para executar: %d\n",tmili);
            break;

            case 4:
                printf("Saindo do programa!\n");
            break;
            
            default:
                printf("Esta opcao nao existe\n");
            break;
        }
    }while(opcao != 4);
    
    return 0;
}
