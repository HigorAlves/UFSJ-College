//Linguagem Imperativa
#include "stdio.h"
 
void main(){
  int a, b, auxiliar, i, n;
 
  a = 0;
  b = 1;
 
  printf("Digite um número: ");
  scanf("%d", &n);
  printf("Série de Fibonacci:\n");
  printf("%d\n", b);
 
  for(i = 0; i < n; i++)
  {
    auxiliar = a + b;
    a = b;
    b = auxiliar;
 
    printf("%d\n", auxiliar);
  }
}