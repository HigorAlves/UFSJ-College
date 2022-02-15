#include <stdio.h>
#include <stdlib.h>
#include <time.h>

struct base{
	char frase [100];	
}typedef Base;

int main(){
	FILE *arq;
	FILE *arq1;
	arq = fopen("frases","r");
	arq1 = fopen("base_final","w");

	Base frases[200];
	int i = 1;
	int cont;
	
	srand(time(NULL));
	
	if(arq == NULL)
			printf("Erro, nao foi possivel abrir o arquivo\n");
	 else		
		while((fgets(frases[i].frase,100,arq))!= NULL)
			i++;

	i=0;	

	for (cont = 0; cont < 201; cont++){
		i = 1 + rand() % 178;
		fprintf(arq1, "%c%d %s",65 + rand() % 25, 1 + rand() % 9, frases[i].frase);
	}
	return 0;
}
