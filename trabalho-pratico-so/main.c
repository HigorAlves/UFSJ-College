#include <stdio.h>
#include "main.h"

int main() {
	char input;
	printf("Programa iniciado\n");
	do {
		printf("Entre com um comando: ");
		scanf("%c", &input);
		switch (input) {
			case 'Q':
				printf("Executar processo\n");
				break;
			case 'U':
				printf("Desbloquear processo\n");
				break;
			case 'P':
				printf("Imprimi o estado atual\n");
				break;
			case 'T':
				printf("Reportar o tempo e finaliza o app\n");
				break;
		}
	} while (input != 'T');

	printf("Finalizando o programa...");
}