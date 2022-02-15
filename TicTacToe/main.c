#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define Lado 3
//Variaveis Globais
int vez,vitoria,jogadas,continuar,opcao,x,y;
char matriza[3][3];
char tabuleiro[3][3];

//Funções Definidas
void init_matriz();
void imprime_matriz();
int  jogador_joga(int a, int b);
void clear(void);
void zeraTabuleiro(int tabuleiro[][Lado]);
void exibeTabuleiro(int tabuleiro[][Lado]);
void jogar(int tabuleiro[][Lado]);
int checaLocal(int tabuleiro[][Lado], int linha, int coluna);
int checaLinha(int tabuleiro[][Lado]);
int checaColuna(int tabuleiro[][Lado]);
int checaDiagonal(int tabuleiro[][Lado]);
int checaEmpate(int tabuleiro[][Lado]);
int checaTermino(int tabuleiro[][Lado], int vez);
void jogada(int tabuleiro[][Lado]);
int pc_joga();
void gera_rand();

//Inicio do Codigo em Si
void gera_rand(){
  int stime;
  int ltime;

  ltime=time(NULL);
  stime=(unsigned) ltime/2;
  srand(stime);

}

int pc_joga(){
	int x,y,mx,my;
	int k,j,i;
	int erro=0;
	x=(rand()%3);
	y=(rand()%3);
	if(tabuleiro[x][y]!=' '){
		pc_joga();
		return(1);
	}else{ //Computador vai gerar 2 numeros aleatorios X e Y e vai verificar se as coordenadas do ponto estao livres, se estiver entao ele cria uma matriz B e começa a jogar os valores nela
		for(i=0;i<3;i++)
			for(j=0;j<3;j++)
				matriza[i][j]=tabuleiro[i][j];
		for(i=0;i<3;i++)
			for(j=0;j<3;j++){
				if (tabuleiro[i][j]==' '){//Nesse trecho o Computador ja criou a matriz B, ele agora marca O em algum ponto e depois verifica se ele consegue ganhar
					tabuleiro[i][j]='O';
     				if((checar()!=0)){
						mx=i;
						my=j;
						erro=2;
					}else{//Se o computador nao possa marcar zero no ponto que ele escolher entao era vai ver se o jogador pode ganhar o jogo, caso ele tenha chances o computador tenta retiralas.Mas caso o computador possa ganhar naquela hora ele nao ira marcar onde ele perde mais impede o outro jogador ele sempre da preferencia a ganhar
          				tabuleiro[i][j]='X';
        				if((checar()!=0)&&(erro!=2)){
							mx=i;
							my=j;
							erro=1;
						}

					}
					tabuleiro[i][j]=' ';
				}
			}
      	//Restaura Matriz
		for(i=0;i<3;i++)
			for(j=0;j<3;j++)
     			tabuleiro[i][j]=matriza[i][j];
		if (erro==0)
			tabuleiro[x][y]='O';
		if (erro!=0)
			tabuleiro[mx][my]='O';
	}
}

int checar(){
	int erro=0;
	int i;
	//Caso a diagonal esteja vencida
	if ((tabuleiro[0][0]==tabuleiro[1][1])&&(tabuleiro[1][1]==tabuleiro[2][2])&&(tabuleiro[0][0]!=' ')){
		erro=1;
		vitoria=tabuleiro[0][0];
	}
	//Verifica Linhas e Colunas
	for(i=0;i<Lado;i++){
		if ((tabuleiro[i][0]==tabuleiro[i][1])&&(tabuleiro[i][1]==tabuleiro[i][2])&&(tabuleiro[i][0]!=' ')){
			erro=1;
			vitoria=tabuleiro[i][0];
		}
		if ((tabuleiro[0][i]==tabuleiro[1][i])&&(tabuleiro[1][i]==tabuleiro[2][i])&&(tabuleiro[0][i]!=' ')){
			erro=1;
			vitoria=tabuleiro[0][i];
		}
	}
	//Verifica Diagonal Inversa
	if ((tabuleiro[2][0]==tabuleiro[1][1])&&(tabuleiro[1][1]==tabuleiro[0][2])&&(tabuleiro[2][0]!=' ')){
		erro=1;
		vitoria=tabuleiro[2][0];
	}
	return(erro);
}

void clear(void){
	int count=0;
    while(count != 100){
		putchar('\n');
		count++;
	}
}

void zeraTabuleiro(int tabuleiro[][Lado]){
	int linha, coluna;
	for(linha = 0 ; linha < Lado ; linha++)
		for(coluna = 0 ; coluna < Lado ; coluna++)
			tabuleiro[linha][coluna] = 0;
}

void exibeTabuleiro(int tabuleiro[][Lado]){
	int linha, coluna;
	putchar('\n');
	for(linha = 0 ; linha < Lado ; linha++){
		for(coluna = 0 ; coluna < Lado ; coluna++){
			if(tabuleiro[linha][coluna] == 0)
				printf("    ");
			else if(tabuleiro[linha][coluna] == 1)
				printf("  X ");
			else
				printf("  O ");
            if(coluna != (Lado-1))
				printf("|");
        }
		putchar('\n');
    }
	putchar('\n');
}

void jogar(int tabuleiro[][Lado]){
	int continua;
	zeraTabuleiro(tabuleiro);
    do{
		clear();
		exibeTabuleiro(tabuleiro);
		jogada(tabuleiro);
	}while(checaTermino(tabuleiro, vez) != 1);
}

int checaLocal(int tabuleiro[][Lado], int linha, int coluna){
	if(linha < 0 || linha > (Lado-1) || coluna < 0 || coluna > (Lado-1) || tabuleiro[linha][coluna] != 0)
		return 0;
	else
		return 1;
}

int checaLinha(int tabuleiro[][Lado]){
	int linha, coluna,
		soma;
	for(linha = 0 ; linha < Lado ; linha++){
		soma=0;
        for(coluna = 0 ; coluna < Lado ; coluna++)
        	soma += tabuleiro[linha][coluna];
        if(soma==Lado || soma == (-1)*Lado)
            return 1;
    }
    return 0;
}

int checaColuna(int tabuleiro[][Lado]){
	int linha, coluna,
    	soma;
    for(coluna = 0 ; coluna < Lado ; coluna++){
    	soma=0;
        for(linha = 0 ; linha < Lado ; linha++)
        	soma += tabuleiro[linha][coluna];
        if(soma==Lado || soma == (-1)*Lado)
        	return 1;
	}
    return 0;
}

int checaDiagonal(int tabuleiro[][Lado]){
	int linha,diagonal_principal=0,diagonal_secundaria=0;
    for(linha = 0 ; linha < Lado ; linha++){
    	diagonal_principal += tabuleiro[linha][linha];
    	diagonal_secundaria += tabuleiro[linha][Lado-linha-1];
    }
    if(diagonal_principal==Lado || diagonal_principal==(-1)*Lado || diagonal_secundaria==Lado || diagonal_secundaria==(-1)*Lado)
		return 1;
	return 0;
}

int checaEmpate(int tabuleiro[][Lado]){
	int linha, coluna;
	for(linha = 0 ; linha < Lado ; linha++)
    	for(coluna = 0 ; coluna < Lado ; coluna++)
        	if(tabuleiro[linha][coluna] == 0)
            	return 0;
    return 1;
}

int checaTermino(int tabuleiro[][Lado], int vez){
	if(checaLinha(tabuleiro)){
		printf("Jogo encerrado. Jogador %d venceu !\n\n", (vez%2)+1);
    	exibeTabuleiro(tabuleiro);
        return 1;
    }
    if(checaColuna(tabuleiro)){
        printf("Jogo encerrado. Jogador %d venceu !\n\n", (vez%2)+1);
        exibeTabuleiro(tabuleiro);
        return 1;
    }
    if(checaDiagonal(tabuleiro)){
        printf("Jogo encerrado. Jogador %d venceu !\n\n", (vez%2)+1);
        exibeTabuleiro(tabuleiro);
        return 1;
    }
    if(checaEmpate(tabuleiro)){
        printf("Jogo encerrado. Ocorreu um empate! !\n\n");
        exibeTabuleiro(tabuleiro);
        return 1;
    }
    return 0;
}

void jogada(int tabuleiro[][Lado]){
	int linha, coluna;
    vez++;
    printf("\n--> Jogador %d \n", (vez % 2) + 1);
    do{
    	printf("Linha: ");
        scanf("%d", &linha);
        linha--;
        printf("Coluna: ");
        scanf("%d", &coluna);
        coluna--;
        if(checaLocal(tabuleiro, linha, coluna) == 0)
        	printf("Posicao ocupada ou inexistente, escolha outra.\n");
    } while(checaLocal(tabuleiro, linha, coluna) == 0);
    if(vez%2)
    	tabuleiro[linha][coluna] = -1;
    else
        tabuleiro[linha][coluna] = 1;
}

void imprime_matriz(){
	int i;
	printf("\n\n");
	for(i=0;i<Lado;i++){
		printf(" %c | %c | %c\n",tabuleiro[i][0],tabuleiro[i][1],tabuleiro[i][2]);
		if(i<Lado-1)
		printf("------------\n");
	}
}

int jogador_joga(int a,int b){
	clear();
	if((a>Lado)||(b>Lado)||(a<1)||(b<1)){
		printf("Valores Inválidos %d,%d\n\n",a,b);
		imprime_matriz();
		pega_valores();
	}else if(tabuleiro[a-1][b-1]!=' '){
		printf("Casa já foi preenchida %d,%d \n\n",a,b);
		imprime_matriz();
		pega_valores();
	}else
		tabuleiro[a-1][b-1]='X';
}

void pega_valores(void){
	int x,y;
	printf("\n\nDigite as coordenadas do tipo: Linha, Coluna");
	printf("\nLinha: ");
	scanf("%d",&x);
	printf("Coluna: ");
	scanf("%d",&y);
	jogador_joga(x,y);
}

void init_matriz(){
	int k,j;
	for (k=0;k < Lado;k++)
		for(j=0;j < Lado;j++)
			tabuleiro[k][j]=' ';
}

int main(void){
	printf("\t\tJogo da Velha | TP AEDS I | Higor Alves e Paulo Rodrigues\n");
	printf("\n1.Jogar Contra Maquina\n");
	printf("2.Jogar Player VS Player\n");
	printf("0.Sair\n");
	printf("\nOpcao: ");
	scanf("%d", &opcao);
	switch(opcao){
		case 1:
			gera_rand();                       // Coloca semente randomica no sistema
  			init_matriz();						//Inicia outra matriz
  			jogadas = 0;                       //Zera o numero de jogadas.
 			 do{
				imprime_matriz();
				pega_valores();
      			jogadas++;
      			if((checar()==0)&&(jogadas<9)){ // Verifica se não houve vitórias ou se acabaram ou se acabaram o numero de jogadas.
    				pc_joga();                 // Caso contrário, o computador joga e numero de jogadas
     				jogadas++;                 // Aumenta um
   				}
    		}while((checar()==0)&&(jogadas<9)); //Repere a verificação
  			imprime_matriz();                   // Imprime matriz final na tela
		break;
		case 2:
        		continuar = 1;
			do{
				vez=1;
        		if(continuar == 1)
            	jogar(tabuleiro);
			}while(continuar== 1);	
		break;
		case 0:
		break;
		default:
			clear();
			printf("Opcao invalida. Tente de novo!\n");
		break;
	}
	return 0;
}
