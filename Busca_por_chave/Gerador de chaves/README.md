# Gerador de Frases

Pedaço de código criado para facilitar na criação de frases com chaves aleatórias.

Primeiro criamos uma struct para armazenar os valores de algumas frases ja feitas dentro do arquivo [frases.txt](https://github.com/HigorAlves/Busca_por_chave/blob/master/Gerador%20de%20chaves/frases)
```c
struct base{
  char frase [100]
}typedef Base;
```
Objetiva inicializar o gerador de números aleatórios com o valor da função time(NULL). Este por sua vez, é calculado como sendo o total  de segundos passados desde 1 de janeiro de 1970 até a data atual. Desta forma, a cada execução o valor da "semente" será diferente.
```c
srand(time(NULL));
```

Agora verificamos se conseguimos abrir o arquivo caso ele seja aberto com sucesso, iremos preencher toda nossa struct.
```c
if(arq == NULL)
			printf("Erro, nao foi possivel abrir o arquivo\n");
	else		
		while((fgets(frases[i].frase,100,arq))!= NULL)
			i++;
```

Após isso iremos inserir 200 registros no nosso arquivo [base_final](https://github.com/HigorAlves/Busca_por_chave/blob/master/Gerador%20de%20chaves/base_final) e ao mesmo tento ja inserir uma letra aleatória junto com uma das frases tambem escolhida aleatóriamente.
```c
for (cont = 0; cont < 201; cont++){
		i = 1 + rand() % 178;
		fprintf(arq1, "%c%d %s",65 + rand() % 25, 1 + rand() % 9, frases[i].frase);
	}
```
