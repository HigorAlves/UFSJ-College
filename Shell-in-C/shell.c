#include <sys/wait.h>
#include <sys/types.h>
#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define BUFSIZE 64
#define TOKENDELIMITER " \t\r\n\a"

int lauch(char **args){
  pid_t pid;
  int status;

  pid = fork();
  if (pid == 0) {
    if (execvp(args[0], args) == -1) {
      perror("lsh");
    }
    exit(EXIT_FAILURE);
  } else if (pid < 0) {
    perror("lsh");
  } else {
    do {
      waitpid(pid, &status, WUNTRACED);
    } while (!WIFEXITED(status) && !WIFSIGNALED(status));
  }

  return 1;
}

int execute(int argc, char **args){
  int i;

  if (args[0] == NULL) {
    return 1;
  }
	 for(i = 0; i < argc;i++){
		if(strcmp(args[0], "fim") == 0){
			return 0;
		}
			printf("\nITEM: %s\n", args[i]);
		if(strcmp(args[i], "=>") == 0){
			printf("Entrou com a sentinha =>");
		}

		if(strcmp(args[i], "|") == 0){
			printf("Entrou com |");
		}

		if(strcmp(args[i], "<=") == 0){
			printf("Entrou com a setinha <=");
		}
	 }

  return lauch(args);
}

//Pegamos a linha inserida no terminal e a tratamos para que possamos saber se o tamanho dela vai exeder
//o maximo que podemos guardar, caso ela nao ultrapasse tudo bem, mas se a posicao for maior que o que ja tem 
//no buffer devemos dar uma realocacao para tudo.
char *readLine(void){
  int c;
  int bufsize = 1024;
  int position = 0;
  char *buffer = malloc(sizeof(char) * bufsize);

  if (!buffer) {
    fprintf(stderr, "ERROR: Não foi possivel fazer a alocação do buffer\n");
    exit(EXIT_FAILURE);
  }

  while (1) {
    c = getchar();

		switch(c){
			case (EOF):
				exit(EXIT_SUCCESS);
			break;
			case '\n':
				buffer[position] = '\0';
      	return buffer;
			break;
			default:
				buffer[position] = c;
		}

   
    position++;

    if (position >= bufsize) {
      bufsize += 1024;
      buffer = realloc(buffer, bufsize);

      if (!buffer) {
        fprintf(stderr, "ERROR: Nçao foi possivel alocar\n");
        exit(EXIT_FAILURE);
      }
    }
  }
}

// Pegamos a linha que é recebidda como argumento e a quebramos em varios tokens ou seja
// fazemos elas virarem palavras separadas dentro de um array para podermos entao trabalhar
// com as suas funções dentro da proxima funcao chamada pelo loop
char **splitLine(int *argc, char *line){
  int bufsize = BUFSIZE, position = 0;
  char **tokens = malloc(bufsize * sizeof(char*));
  char *token, **tokens_backup;
	
	//Verificamos se conseguimos alocar o tamanho do token para usar
	// Se nao conseguir ja retorna um erro com a mensagem
  if (!tokens) {
    fprintf(stderr, "ERROR: Erro na alocação\n");
    exit(EXIT_FAILURE);
  }

	//Separamos todos os dados que vem da linha de comando dentro do token
	//Isso vai formar um array de palavras o que para nos faz muito sentido.
  token = strtok(line, TOKENDELIMITER);

  while (token != NULL) {
    tokens[position] = token;
    position++;
		*argc = *argc+1;

    if (position >= bufsize) {
      bufsize += BUFSIZE;
      tokens_backup = tokens;
      tokens = realloc(tokens, bufsize * sizeof(char*));

			//Fazemos as verificaçoões do token para ver se tudo ocorreu bem
			//e tambem damos um free para parar de dar problema de alocação
      if (!tokens) {
				free(tokens_backup);
        fprintf(stderr, "ERROR: Erro na alocação\n");
        exit(EXIT_FAILURE);
      }
    }

    token = strtok(NULL, TOKENDELIMITER);
  }
  tokens[position] = NULL;
  return tokens;
}