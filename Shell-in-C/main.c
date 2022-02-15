#include "./shell.c"

int main(int argc, char **argv){
	char *line;
  char **args;
	int auxArgc;
  int status;

  do {
    printf("Insira seu comando: ");
    line = readLine();
    args = splitLine(&auxArgc,line);
    status = execute(auxArgc, args);

    free(line);
    free(args);
  } while (status);
  return EXIT_SUCCESS;
}