/*-------------------------------------------*/
/*             TRABALHO FEITO POR:           */
/*            HIGOR HENRIQUE ALVES           */
/*          LIDIMAR DOS SANTOS JUNIOR        */
/*-------------------------------------------*/

/*Bibliotoecas*/
#include <sys/resource.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#include <unistd.h>
#include <string.h>
/*---------------------*/

/*Defines*/
#define padrao '+'
#define limite 100

/*Structs*/
#ifndef ESTRUTURAS
#define ESTRUTURAS

typedef struct s_posCar{
    char nome;
    char eixo;
    int tipo;
    int x;
    int y;
} posCar;

typedef struct s_passos{
    int tipo;
    /*Direção usando os pontos cardeais*/
    char direcao;
    char eixo;
    int mov;
    struct s_passos *proximo;
}passos;

typedef struct s_descritor{
    passos *topo;
    int tam;
}descritor;

#endif // ESTRUTURAS
/*--------------------------*/

/*FUNÇÕES*/
void flag(int argc, char **argv, char parg[100], char earg[100], int *h, int *b, int *v);

int heuristica(char input[100]);

void zera_vetor(int vet[], int tam, int valor);
int gera_passo(char estac[6][6]);
void backtrack(char entrada[100]);

int verifica_carro(char nome);
void adiciona_carro(char nome, int tipo, char eixo, int x, int y);
void inserir_veiculo(char matriz[6][6],char nome, int tipo, char eixo, int x, int y);
void zerar_matriz(char mat[6][6]);
void remove_veiculo_estac(char mat[6][6],int tipo);
void move_carro_estac(char mat[6][6],int tipo, char axis, int mvt);
int colisao(char mat[6][6],int tipo, char axis, int moviment);
int verificador(char *src_carros, char *src_movimento);
