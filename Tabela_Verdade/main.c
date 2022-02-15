#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <string.h>
/***

    i, j e a: Variaveis para o for;
    nl: Numero de Linhas da  tabela verdade;
    nc: Numero de Colunas da  tabela verdade;
    escala: Auxiliador de alternância das Linhas;
    cont: Verificador de alternância das Linhas;
    tamexp: Verificador de tamanho para a leitura de premissas e operadores
    premissas: contagem de premissas distintas
    esq,dir: verificar de qual lado do operador binario o NOT está

    expressao[]: Armazena a expressão lógica
    npremis[]: Auxiliador de retirada de premissas repetidas
    vetor_pr[]: Lista orientadora de premissas

    tabela_verdade[][]: Tabela verdade que será exibida

*/
int main(){
    ///vetores
    char expressao[100]={'\0'};
    char vetor_pr[50]={'\0'};
    int npremis[26]={0};

    ///auxiliares
    int i=0, j=0,a=0, nl,nc,cont=0,ope=0;
    int esq=0,dir=0,escala=0,prem1,prem2;
    int tamexp=0,todasprem=0,premissas=0;
    int aux;
    char prema,premb;

    ///Leitura da Expressão
    printf("Digite a expressao logica(limite de 10 premissas!!):\n#>");
    gets(expressao);
    tamexp = strlen(expressao);

    ///Contando a quantidade de cada letra na expressão
    for(i=0;i<tamexp;i++){
        if ((expressao[i]>=97)&&(expressao[i]<=122)){
            npremis[expressao[i]-97]++;
        }
    }

    ///Contando a quantidade de premissas, retirando as repetidas
    j=0;
    for(i=0;i<26;i++){
        if (npremis[i]!=0){
            premissas++;
            vetor_pr[j]=i+97;
            j++;
        }
    }

    ///Criaçao do tamanho e largura da tabela
    nl = pow(2,premissas);
    escala = nl;
    nc=j+1;
    int tabela_verdade[nl][nc];//Criação da tabela que será exibida

    ///Preencher a tabela verdade das premissas de forma alternada
    for(i=0;i<premissas;i++){
        escala = escala/2;
        for(j=0; j<nl;j++){
            //correção do bug cont nunca retorna e valores posteriores ficam zerados
            if (cont>=escala*2){
                cont=0;
            }
            //comparação para a alternância de valores da tabela
            if (cont<escala) {
                tabela_verdade[j][i]=1;
            }else{
                tabela_verdade[j][i]=0;
            }
            cont++;
        }
        cont=0;
    }
    cont=0;

    ///1.0)Calcular a primeira parte da expressão lógica: Separando premissas e operadores
    for(i=0;a<2;i++){
        if(expressao[i]>='a'&&expressao[i]<='z'){
            if(a<1){
                prema=expressao[i];
            }else if(a>=1){
                premb=expressao[i];
            }
            a++;
        }
        if(cont==0&&expressao[i]=='N'){
            esq=1;
            cont++;
            i+=2;
        }else if(cont>=1&&cont<3&&expressao[i]=='N'){
            dir=1;
            cont++;
            i+=2;
        }else if(expressao[i]=='A'){
            i+=2;
            cont++;
            ope=1;
        }else if(expressao[i]=='O'){
            i++;
            cont++;
            ope=2;
        }
    }
    aux=i;
    ///1.1)Calcular a primeira parte da expressão lógica: Verificando a posição das premissas na tabela verdade
    for(i=0;i<nc-1;i++){
        if(prema==vetor_pr[i]){
            prem1=i;
        }
        if(premb==vetor_pr[i]){
            prem2=i;
        }
    }
    ///1.2)Calcular a primeira parte da expressão lógica: Realizando as operações logicas e salvando na ultima coluna da tabela
    for(i=0;i<nl;i++){
        if(esq==1&&dir==1){//Caso o NOT estiver dos dois lados
            if(ope==1){
                tabela_verdade[i][nc-1]=tabela_verdade[nl-i-1][prem1]&&tabela_verdade[nl-i-1][prem2];
            }else if(ope==2){
                tabela_verdade[i][nc-1]=tabela_verdade[nl-i-1][prem1]||tabela_verdade[nl-i-1][prem2];
            }
        }else if(esq==1&&dir==0){//Caso o NOT estiver do lado esquerdo
            if(ope==1){
                tabela_verdade[i][nc-1]=tabela_verdade[nl-i-1][prem1]&&tabela_verdade[i][prem2];
            }else if(ope==2){
                tabela_verdade[i][nc-1]=tabela_verdade[nl-i-1][prem1]||tabela_verdade[i][prem2];
            }
        }else if(esq==0&&dir==1){//Caso o NOT estiver do lado direito
            if(ope==1){
                tabela_verdade[i][nc-1]=tabela_verdade[i][prem1]&&tabela_verdade[nl-i-1][prem2];
            }else if(ope==2){
                tabela_verdade[i][nc-1]=tabela_verdade[i][prem1]||tabela_verdade[nl-i-1][prem2];
            }
        }else{//Caso o NOT estiver em nenhum dos lados
            if(ope==1){
                tabela_verdade[i][nc-1]=tabela_verdade[i][prem1]&&tabela_verdade[i][prem2];
            }else if(ope==2){
                tabela_verdade[i][nc-1]=tabela_verdade[i][prem1]||tabela_verdade[i][prem2];
            }
        }
    }

    ///Calcular o resto da tabela verdade dentro do laço de loop até o final da expressão
    dir=0;
    a=0;
    ope=0;
    for(i=aux++;expressao[i]!='\0';i++){
        if (expressao[i]=='A'){//Verificar os operadores: AND
            ope=1;
            i+=2;
            printf("Entrei no expressao[i]=='A'\n");
        }else if (expressao[i]=='O'){//Verificar os operadores: OR
            ope=2;
            i++;
            printf("Entrei no expressao[i]=='O'\n");
        }
        if(expressao[i]=='N'){//Verificar os operadores: NOT
            dir=1;
            i+=2;
            printf("Entrei no expressao[i]=='N'\n");
        }
        printf("\n_.:%c:._\n",expressao[i]);
        if(expressao[i]>='a'&&expressao[i]<='z'){//Verificar as premissas
            premb=expressao[i];
            for(j=0;j<nc-1;j++){
                if(premb==vetor_pr[j]){
                    prem2=j;
                }
            }
            for(j=0;j<nl;j++){
                if(dir==1){//Caso o Nprintf("2)Entrei no ¬NOT e op=And: %d\n",tabela_verdade[j][nc-1]);OT estiver do lado direito
                    if(ope==1){
                        tabela_verdade[j][nc-1]=tabela_verdade[j][nc-1]&&tabela_verdade[nl-j-1][prem2];
                    }else if(ope==2){
                        tabela_verdade[j][nc-1]=tabela_verdade[j][nc-1]||tabela_verdade[nl-j-1][prem2];
                    }
                }else{//Caso o NOT estiver em nenhum dos lados
                    if(ope==1){
                        tabela_verdade[j][nc-1]=tabela_verdade[j][nc-1]&&tabela_verdade[j][prem2];
                    }else if(ope==2){
                        tabela_verdade[j][nc-1]=tabela_verdade[j][nc-1]||tabela_verdade[j][prem2];
                    }
                }
            }
            dir=0;
            a=0;
            ope=0;
        }
    }

    printf("%d  %d\n%c  %c  %d\n%d  %d\n",esq,dir,prema,premb,ope,prem1,prem2);

    ///Mostrar a tabela
    for (i=0;i<premissas;i++){
        printf("%c  ", vetor_pr[i]);
    }
    printf("E\n");
    for(i=0;i<nl;i++){
        for(j=0;j<nc;j++){
            printf("%d  ",tabela_verdade[i][j]);
        }
        printf("\n");
    }
    /*for(i=0;i<nl;i++){
        for(j=0;j<nc;j++){
            if (tabela_verdade[i][j]==1){
                printf("v  ");
            }else{
                printf("f  ");
            }
        }
        printf("\n");
    }*/

return 0;
}
