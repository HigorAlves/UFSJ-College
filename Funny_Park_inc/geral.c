/*-------------------------------------------*/
/*             TRABALHO FEITO POR:           */
/*            HIGOR HENRIQUE ALVES           */
/*          LIDIMAR DOS SANTOS JUNIOR        */
/*-------------------------------------------*/

#include "geral.h"

posCar salva_carro[18]; //Salva o carro, eixo de inserção, cood x,y.
int quantidade = 0;
int menor_sequencia = 541;

void flag(int argc, char **argv, char parg[100], char earg[100], int *h, int *b, int *v){
    int verbose;
    opterr = 0;

    while((verbose = getopt(argc,argv,"v:m:HBV")) != -1){
        switch(verbose){
        case 'v':
            strcpy(parg,optarg);
            break;
        case 'm':
            strcpy(earg,optarg);
            break;
        case 'H':
            *h = 1;
            break;
        case 'B':
            *b = 1;
            break;
        case 'V':
            *v = 1;
            break;
        case '?':
            if (optopt == 'v'){
                printf("Opcao \"%c\" falta de argumentos!\n", optopt);
            }
            else if( optopt == 'm' ){
                printf("Opcao \"%c\" falta de argumentos!\n", optopt);
            }else{
                printf("Opcao \"%c\" opção desconhecida!\n",optopt);
            }
            return;
        }
    }
    
}

/*-----VERIFICADORES-------*/
int verifica_carro(char nome){
    /*Verificamos se o carro existe*/
    int i;

    for(i = 0; i < quantidade; i++){
        if(nome == salva_carro[i].nome){
            return i;
        }
    }
    return -1;
}

void adiciona_carro(char nome, int tipo, char eixo, int x, int y){
    /*Adicionamos um carro na lista*/
    salva_carro[quantidade].tipo = tipo;
    salva_carro[quantidade].nome = nome;
    salva_carro[quantidade].x = x;
    salva_carro[quantidade].y = y;
    salva_carro[quantidade].eixo = eixo;
    quantidade++;
}

void inserir_veiculo(char matriz[6][6],char nome, int tipo, char eixo, int x, int y){
    /*Coloca o carro na matriz estacionamento*/
    x --;
    y = 6 - y;
    int A,B;

    if(verifica_carro(nome) != -1){
        printf("O carro existe! (%c %d %c X%dY%d)\n",nome,tipo,eixo,x+1,6-y);
        return;
    }

    /*Se for inserir no eixo X*/
    if(eixo == 'X' || eixo == 'x'){
        eixo = 'X';
        A = matriz[y][x] == padrao && matriz[y][x+1] == padrao;
        B = matriz[y][x+2] == padrao;

        if(((tipo == 2) && (x>=0) && (x<5) && (y>=0) && (y<=5)) || ((tipo == 3) && (x>=0) && (x<4) && (y>=0) && (y<=5))){  //Se não extrapolar os limites do estacionamento:
            if((A && B) || (!(tipo == 3) && A)){  //Se não houver nenuma colisão insira.
                matriz[y][x] = nome;
                matriz[y][x+1] = nome;
                if(tipo == 3)matriz[y][x+2] = nome;
            }else{
                printf("Carro sobreposto: %c %d %c X%dY%d\n",nome,tipo,eixo,x+1,6-y);
                return;
            }
        }else{
            printf("Limite do estacionamento: %c %d %c X%dY%d\n",nome,tipo,eixo,x+1,6-y);
            return;
        }
    }else if(eixo=='Y' || eixo=='y'){
        eixo = 'Y';
        A = matriz[y][x] == padrao && matriz[y-1][x] == padrao;
        B = matriz[y-2][x] == padrao;
        
        /*Caso estrapole os limites do estacionamento*/
        if(((tipo == 2) && (x>=0) && (x<=5) && (y>0) && (y<=5)) || ((tipo == 3) && (x>=0) && (x<=5) && (y>1) && (y<=5))){
            /*Caso não haja colisões*/
            if((A && B) || (!(tipo == 3) && A)){
                matriz[y][x] = nome;
                matriz[y-1][x] = nome;
                if(tipo == 3)matriz[y-2][x] = nome;
            }else{
                printf("Carro sobreposto: %c %d %c X%dY%d\n",nome,tipo,eixo,x+1,6-y);
                return;
            }
        }else{
            printf("Limite do estacionamento: %c %d %c X%dY%d\n",nome,tipo,eixo,x+1,6-y);
            return;
        }
    }else{
        printf("Nao existe o eixo %c!(%c %d %c X%dY%d)\n",eixo,nome,tipo,eixo,x+1,6-y);
        return;
    }

    adiciona_carro(nome, tipo, eixo, x, y);
}

void zerar_matriz(char mat[6][6]){
    /* Zeramos a matriz inserindo valores padrões */
    int i,j;
    for(i=0; i<6; i++){
        for(j=0; j<6; j++){
            mat[i][j] = padrao;
        }
    }
}

void remove_veiculo_estac(char mat[6][6],int tipo){
    /*Remover um carro do estacinamento*/
    int x = salva_carro[tipo].x;
    int y = salva_carro[tipo].y;

    if(salva_carro[tipo].eixo == 'X'){
        mat[y][x] = padrao;
        mat[y][x+1]=padrao;
        if(salva_carro[tipo].tipo == 3)mat[y][x+2]=padrao;
    }else{
        mat[y][x] = padrao;
        mat[y-1][x]=padrao;
        if(salva_carro[tipo].tipo == 3){
            mat[y-2][x]=padrao;
        }
    }
}

void move_carro_estac(char mat[6][6],int tipo, char axis, int mvt){
    /*Remover o carro da matriz */
    remove_veiculo_estac(mat,tipo);
    salva_carro[tipo].x += (axis == 'X'? mvt:0);
    salva_carro[tipo].y -= (axis == 'Y'? mvt:0);

    int x = salva_carro[tipo].x;
    int y = salva_carro[tipo].y;
    char nome = salva_carro[tipo].nome;

    if(salva_carro[tipo].eixo == 'X'){
        mat[y][x] = nome;
        mat[y][x+1]=nome;
        if(salva_carro[tipo].tipo == 3){
            mat[y][x+2]=nome;
        }
    }else{
        mat[y][x] = nome;
        mat[y-1][x]=nome;
        if(salva_carro[tipo].tipo == 3){
            mat[y-2][x]=nome;
        }
    }
}

int colisao(char mat[6][6],int tipo, char axis, int moviment){
    /*Verifica se tem colisão com a parede*/
    int i;
    int a,b,c;
    int x = salva_carro[tipo].x;
    int y = salva_carro[tipo].y;

    if(axis == 'X' || axis == 'x'){
        if(((salva_carro[tipo].eixo == 'Y') && (x + moviment<0 || x + moviment>5)) || (salva_carro[tipo].eixo == 'X' && (x + moviment<0 || ((salva_carro[tipo].tipo == 2 && x + moviment>4) || (salva_carro[tipo].tipo == 3 && x + moviment>3))))){
            return 1;
        }

        for(i=moviment; i>0 || i<0; (moviment>0? i-- : i++)){
            a = (mat[y][x+i] != padrao && mat[y][x+i] != salva_carro[tipo].nome);
            b = (mat[y][x+i+1] != padrao && mat[y][x+i+1] != salva_carro[tipo].nome);
            c = (salva_carro[tipo].tipo == 3 && mat[y][x+i+2] != padrao && mat[y][x+i+2] != salva_carro[tipo].nome);

            if(salva_carro[tipo].eixo == 'Y' && (mat[y][x+i]!=padrao || mat[y-1][x+i]!=padrao || (salva_carro[tipo].tipo == 3 && mat[y-2][x+i]!=padrao))){
                return 1;
            }else if(salva_carro[tipo].eixo == 'X' && (a || b || c)){
                return 1;
            }
        }
    }else if(axis == 'Y' || axis == 'y'){
        if((salva_carro[tipo].eixo == 'X' && (y - moviment<0 || y - moviment>5)) || (salva_carro[tipo].eixo == 'Y' && (y - moviment>5 || ((salva_carro[tipo].tipo == 2 && y - moviment<1) || (salva_carro[tipo].tipo == 3 && y - moviment<2))))){
            return 1;
        }

        for(i=moviment; i>0 || i<0; (moviment>0? i-- : i++)){
            a = (mat[y-i][x] != padrao && mat[y-i][x] != salva_carro[tipo].nome);
            b = (mat[y-1-i][x] != padrao && mat[y-1-i][x] != salva_carro[tipo].nome);
            c = (salva_carro[tipo].tipo == 3 && mat[y-2-i][x] != padrao && mat[y-2-i][x] != salva_carro[tipo].nome);

            if(salva_carro[tipo].eixo == 'X' && (mat[y-i][x]!=padrao || mat[y-i][x+1]!=padrao || (salva_carro[tipo].tipo == 3 && mat[y-i][x+2] !=padrao))){
                return 1;
            }else if(salva_carro[tipo].eixo == 'Y' && (a || b || c)){
                return 1;
            }
        }
    }
    return 0;
}

int verificador(char *src_carros, char *src_movimento){
    char nome; //Nome do veículo
    int tipo;    //Identificador de veículo: carro ou caminhão
    char axis; //Inserir no eixo X ou Y
    int coodx; //Posição no eixo X
    int coody; //Posição no eixo Y
    FILE *entrada = fopen(src_carros,"r"); //Arquivo do conjunto de carros
    FILE *movimnt= fopen(src_movimento,"r");//Arquivo do conjunto de movimento
    char estac[6][6]; //Matriz que simboliza o estacionamento
    zerar_matriz(estac);

    if(entrada == NULL || movimnt == NULL){
        printf("Não foi possivel abrir os arquivos!\n");
        return 0;
    }

    while(!feof(entrada)){  ///Leitura dos veículos
        fscanf(entrada,"%c %d %c X%dY%d\n",&nome,&tipo,&axis,&coodx,&coody);
        inserir_veiculo(estac,nome,tipo,axis,coodx,coody); //Insere todos os carros que são lidos de forma genuína, sem colisão contra paredes ou veículos.
    }
    while(!feof(movimnt)){
        fscanf(movimnt,"%c %c %d\n",&nome,&axis,&tipo);
        if(colisao(estac,verifica_carro(nome),axis,tipo)){
            printf("Não pode realizar os conjuntos de manobras!\n");
            return 0;
        }
        else{
            move_carro_estac(estac,verifica_carro(nome),axis,tipo);
        }
    }
    tipo = verifica_carro('Z');
    if(salva_carro[tipo].eixo == 'X' && salva_carro[tipo].x == 4 && salva_carro[tipo].y == 2 && salva_carro[tipo].tipo == 2){
        printf("Manobras Validas!\n");
    }else{
        printf("Manobras validas!\n");
    }

    return 1;

    fclose(entrada);
    fclose(movimnt);
}

/*-----------HEURISTICA---------*/

int heuristica(char input[100]){
    int sentido = 1;
    int contagem = 0;
    /*Identidade do veiculo*/
	int tipo;
    /*Nome do Veiculo*/
    char nome;
    /*Qual eixo inserir*/
	char axis;
    /*Posição no eixo*/
	int coodx;
	int coody;

    /*Abertura do arquivo*/
	FILE *entrada = fopen(input,"r");
	FILE *saida = fopen("movimentos.txt","w");
	
    /*Matriz simbolica estacinamento*/
    char estac[6][6];

    if(entrada == NULL){
        printf("Não foi possivel abrir os arquivos!\n");
        return 0;
    }

	zerar_matriz(estac);

    /*Leitura do arquivo*/
	while(!feof(entrada)){
		fscanf(entrada,"%c %d %c X%dY%d\n",&nome,&tipo,&axis,&coodx,&coody);
        /*Insere os veiculos ja sabendo que eles nao colidem com a parede*/
		inserir_veiculo(estac,nome,tipo,axis,coodx,coody);
    }

    tipo = verifica_carro('Z');

    if(!(salva_carro[tipo].eixo == 'X') || !(salva_carro[tipo].tipo == 2)){
        fclose(saida);
        return 0;
    }

    coodx = 0;

    for(contagem = 0; contagem <100; contagem++){
        if(salva_carro[tipo].x == 4 && salva_carro[tipo].y == 2){
            fclose(saida);
            return 1;
        }

        if(salva_carro[tipo].y == 5 || salva_carro[tipo].y == 0){
            sentido = 1 - sentido;
        }

        if(!colisao(estac,tipo,'X',1) && coodx == 0){
            fprintf(saida,"Z X 1\n");
            move_carro_estac(estac,tipo,'X',1);
            continue;
        }
        coodx = 0;

        if(!colisao(estac,tipo,'Y',1) && (salva_carro[tipo].y >0) && sentido == 1){
            fprintf(saida,"Z Y 1\n");
            move_carro_estac(estac,tipo,'Y',1);
            continue;
        }

        if(!colisao(estac,tipo,'Y',-1) && (salva_carro[tipo].y <5) && sentido == 0){
            fprintf(saida,"Z Y -1\n");
            move_carro_estac(estac,tipo,'Y',-1);
            continue;
        }

        if(!colisao(estac,tipo,'X',-1)){
            coodx = 1;
            fprintf(saida,"Z X -1\n");
            move_carro_estac(estac,tipo,'X',-1);
        }
    }
    
    fclose(entrada);
    fclose(saida);
    
    printf("Não obteve resposta!\n");
    saida = fopen("movimentos.txt","w");
    
    /*Fechamento do arquivo*/
    fclose(saida);

return 0;
}

/*------------Backtrack--------------*/
void zera_vetor(int vet[], int tam, int valor){
    int i;
    for(i = 0; i < tam; i++){
        vet[i] = valor;
    }
}

int gera_passo(char estac[6][6]){
    int i,j, contador = 0;
    /*Quantidade de moviemntos * quantidade de veiculos = chave de contagem*/
    int lim = 4*quantidade;
    int *gera = (int*)calloc(sizeof(int),limite*quantidade);
    posCar *savCar = (posCar*)calloc(sizeof(posCar),quantidade);
    int *limCar = (int*)calloc(sizeof(int),quantidade);
    char auxEstac[6][6];

    /*Faz backup*/
    for(j = 0; j < quantidade; j++){
        savCar[j] = salva_carro[j];
    }

    zera_vetor(gera,limite*quantidade,-1);

    while(contador < limite*quantidade ){
        if(salva_carro[verifica_carro('Z')].x == 4 && salva_carro[verifica_carro('Z')].y == 2){
            FILE *movimnt = fopen("movimentos.txt","w");

            for(i = 0; i < limite*quantidade && gera[i] != -1;i++){
                fprintf(movimnt,"%c ",salva_carro[(int)gera[i]/4].nome);
                if(gera[i]%4 == 0){fprintf(movimnt,"Y 1\n");}
                if(gera[i]%4 == 1){fprintf(movimnt,"X 1\n");}
                if(gera[i]%4 == 2){fprintf(movimnt,"Y -1\n");}
                if(gera[i]%4 == 3){fprintf(movimnt,"X -1\n");}
            }

            fclose(movimnt);
            return 1;
        }

        gera[0]++;
        contador = 0;
        
        for(i = 0; i < limite*quantidade && gera[i] != -1; i++){
            if(gera[i] >= lim){gera[i] =0; gera[i+1]++;}
            if(gera[i] == lim-1){contador++;}
        }
        zera_vetor(limCar,quantidade,0);

        /*Faz compia da matriz*/
        for(j = 0; j < 36; j++){
            auxEstac[(int)j/6][j%6] = estac[(int)j/6][j%6];
        } 

        for(j = 0; j < quantidade; j++){
            salva_carro[j] = savCar[j];
        }

        for(i = 0; (i < limite*quantidade) && gera[i] != -1; i++){
            limCar[(int)gera[i]/4]++;
            /*Se ultrapassar o limite de movimentos*/
            if(limCar[(int)gera[i]/4] <= limite){
                /*Pra cima*/
                if(gera[i]%4 == 0 && !colisao(auxEstac,gera[i]/4,'Y',1)){
                    move_carro_estac(auxEstac,(int)gera[i]/4,'Y',1);
                }
                /*Pra direita*/
                if(gera[i]%4 == 1 && !colisao(auxEstac,(int)gera[i]/4,'X',1)){
                    move_carro_estac(auxEstac,(int)gera[i]/4,'X',1);
                }
                /*Pra baixo*/
                if(gera[i]%4 == 2 && !colisao(auxEstac,(int)gera[i]/4,'Y',-1)){
                    move_carro_estac(auxEstac,(int)gera[i]/4,'Y',-1);
                }/*Pra esquerda*/
                if(gera[i]%4 == 3 && !colisao(auxEstac,(int)gera[i]/4,'X',-1)){
                    move_carro_estac(auxEstac,(int)gera[i]/4,'X',-1);
                }
            }
        }
    }

    return 0;
}

void backtrack(char input[100]){
    char nome;
	int tipo;
	char axis;
	int coodx;
	int coody;

    /*Abertura dos arquivos*/
	FILE *entrada = fopen(input,"r");
	char estac[6][6];

	if(entrada == NULL){
        printf("Não foi possivel abrir os arquivos!\n");
        return;
    }

	zerar_matriz(estac);

    /*Leitura de veiculos*/
	while(!feof(entrada)){
		fscanf(entrada,"%c %d %c X%dY%d\n",&nome,&tipo,&axis,&coodx,&coody);
        /*Ja insere sem nenhum carro batendo na parede*/
		inserir_veiculo(estac,nome,tipo,axis,coodx,coody);
    }

    if(!gera_passo(estac)){
        printf("Não teve solução!\n");
    }
    fclose(entrada);
}

