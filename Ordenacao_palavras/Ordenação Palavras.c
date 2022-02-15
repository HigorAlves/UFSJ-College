//------------------------------------------------//
//          Trabalho feito por Higor H. Alves     //
//              Data  22/06/2016                  //
//------------------------------------------------//
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define DELIMITER "!? .,-\n"
#define TAM 256

//STRUCK PARA GERAÇÃO DA HASH TABLE
typedef struct{
  int key;
  char word [30];
  int repeticao;
}hashTable;

//FUNÇÃO DE GERAÇÃO DA HASH, ELA RECEBE A STRING E O TAMANHO DELA PARA EFETUAR OS CALCULOS
//E NO FINAL QUANDO É GERADO O VALOR ELE DA RETORNO DELE COM MOD DE 256 PARA ASSIM O VALOR
//NUNCA PASSAR DE 256
unsigned int hashFunction(const char* str, unsigned int len){
  const unsigned int resp = 2;
  unsigned int hash = 0;
  unsigned int i = 0;
  for (i = 0; i < len; i++){
    hash *= resp;
    hash ^= (*str);
  }
  return hash%TAM;
}

int main(int argc, char **argv){
  //DECLARAÇÃO DAS VARIAVEIS A SEREM USADAS
  char *word;
  int i = 0, flag,max,hash = 0, aux = 0,j;
  hashTable ht [TAM],htaux[TAM];

  //ABERTURA DO ARQUIVO TXT
  FILE *IN;
  IN = fopen (argv[1],"r");
  //CASO O ARQUIVO NÃO SEJA ABERTO RETORNA O ERRO
  if(IN == NULL){
    printf("Arquivo não foi aberto!\n");
    exit (1);
  }

  //VAMOS ZERAR ESSAS VARIAVEIS DA STRUCT PARA ASSIM TERMOS CERTEZA DE QUE NÃO HAVERA
  //NADA NELAS
  for (i = 0; i < TAM; i++){
    ht[i].repeticao = 0;
    ht[i].key = 0;
  }

  //POR CUIDADOS VAMOS ZERAR O BUFFER TAMBEM
  fflush(stdout);

  //LENDO O ARQUIVO VAMOS USAR O DELIMITER (UM DEFINE CRIADO COM OS CARACTERES QUE EU NÃO QUERO),
  //COM ELE É POSSIVEL PEGAR UMA PALAVRA POR VEZ EFETUAR AS OPERAÇÕES SEPARADAMENTE EM CADA UMA,
  //MAIS ABAIXO TERA A EXPLICAÇÃO DE CADA FUNÇÃO
  while ((fscanf (IN, "%m[^"DELIMITER"]%*["DELIMITER"]", &word)) != EOF){
    //VAMOS IGNORAR PALAVRAS COM SOMENTE UMA LETRA
    if(strlen(word) > 1){
      //PASSANDO TUDO PARA LOWER CASE
      for(i = 0; word[i]; i++) word[i] = tolower(word[i]);
      //CHAMANDO A FUNÇÃO PARA GERAR A HASH, MANDANDO OS ARGUMENTOS NECESSARIOS E RECEBENDO
      //O RETORNO NA VARIAVEL HASH
      hash = hashFunction(word, strlen(word));
      //AUX: VARIAVEL AUXILIAR PARA NOS AJUDAR MAIS TARDE NO PROGRAMA
      aux = hash;
      //SE NO LUGAR ONDE A PALAVRA DEVE SER INSERIDA NÃO TIVER NENHUM INDICE DE REPETIÇÃO
      //ENTÃO PODEMOS COLOCALA NO MESMO
      if (ht[hash].repeticao == 0){
        strcpy(ht[hash].word, word);
        ht[hash].repeticao ++;
      //CASO O JA ESTEJA > 0 ENTÃO VAMOS VERIFICAR SE A PALAVRA QUE ESTA LA E A NOVA PALAVRA
      //SÃO IGUAIS SE FOREM VAMOS SIMPLESMENTE SOMAR MAIS UM NA REPETIÇÃO
      }else if(strcmp(ht[hash].word,word) == 0){
        ht[hash].repeticao ++;
      //CASO NENHUM DOS CASOS ACIMA SEJAM SATISFEITOS DEVEMOS ENTÃO VERIFICAR SE A KEY
      //(VARIAVEL ESCOLHIDA PARA AVISAR SE JA TEM COLIÇÕES), SE ELA FOR IGUAL A 0 ENTÃO
      //VAMOS PROCURAR O PROXIMO LUGAR VAZIO EM NOSSA HASH TABLE
      }else if (ht[hash].key == 0){
        while (ht[hash].repeticao != 0){
          hash ++;
        }
      //QUANDO É ACHADO UM LOCA FAZIO VAMOS INSERIR A PALAVRA NELE
        strcpy(ht[hash].word, word);
      //VAMOS SOMAR MAIS UM NA REPETIÇÃO
        ht[hash].repeticao ++;
      //E USAR O AUX (QUE CONTEM O VAOR DA HASH ANTIGA), PARA SOMAR MAIS UM NAS COLISÃO (VARIAVEL KEY)
      //ASSIM SABEMOS QUE SE CASO HAJA OUTRA PALAVRA COM A MESMA HASH DEVMOS PROCURAR EM TODO O VETOR
        ht[aux].key ++;
      //SE JA TIVER COLISÃO VAMOS:
      }else if(ht[hash].key != 0){
      //PROCURAR EM TODO O VETOR SE JA EXISTE A PALAVRA NELE
        for (i = 0;i < TAM; i++){
          //FUNÇÃO PARA COMPARAÇÃO DE PALAVRAS, CASO SEJA IGUAL A 0 ENTÃO SÃO IGUAIS
          if (strcmp(ht[i].word,word) == 0){
            //SE FOR IGUAL SOMA-SE MAIS UM NA REPETIÇÃO
            ht[i].repeticao ++;
            //PARAR O FOR
            break;
          }
        }
      //CASO TENHA A MESMA HASH E A HASH ESTEJA COM COLISÃO MAS A PALAVRA SEJA DIFERENTE
      //ENTÃO VAMOS PROCURAR UM LUGAR ONDE NÃO TENHA COLISÃO
      }else{
        //SOMA-SE MAIS UM NA HASH ATE ACHAR UM LUGAR ONDE NÃO TENHA NENHUMA COLISÃO
        while (ht[hash].key != 0){
          hash ++;
        }
        //ASSIM QUE ACHAR O LOCAL ONDE NÃO HAJA COLISÃO VAMOS:
        //COPIAR A PALAVRA PARA DENTRO DA HASH TABLE
        strcpy(ht[hash].word, word);
        //SOMAR MAIS UM NO INDICE DE COLISÃO
        ht[hash].key ++;
      }
    }
  }
  //METODO DE ORDENAÇÃO
  //Usando o método SELECTIONSORT, e partindo do principio que a HASH indica a posição de armazenamento do contador
  //e de cada	palavra, é necessário que ambos sejam ordenados "juntos", para isso é usada uma variavel auxliar auxC e um vetor aux
  //do tipo HASH

  for (i = 0; i < 255; i++){
		max = i;
		for (j = (i+1); j < TAM; j++){
			if(ht[j].repeticao > ht[max].repeticao)
				max = j;
		}
		if (i != max){
			strcpy(htaux[i].word, ht[i].word);
			flag = ht[i].repeticao;
			strcpy(ht[i].word, ht[max].word);
			ht[i].repeticao = ht[max].repeticao;
			strcpy(ht[max].word,htaux[i].word);
			ht[max].repeticao = flag;
		}
	}
  //ESTA ORDENAÇÃO É PARA QUE DEPOIS QUE ESTEJA ORDENADO POR ORDEM DECRESCENTE AS REPETIÇÕES
  //VAMOS ORDENAR POR ORDEM ALFABETICA, USANDO OS MESMOS PRINCIPIOS QUE O METODO ANTERIOR DE ORDENAÇÃO
  //obs: FOI OPTADO COLOCAR ESTE METODO SEPARADAMENTE POR VIAS DE UM MELHOR ENTENDIMENTO
  for (i = 0; i < TAM; i++){
    for (j = 0; j < TAM; j++){
      //SOMENTE VAI ORDENAR PALAVRAS QUE TIVERÃO A QUANTIDADE DE REPETIÇÕE IGUAIS
      if (ht[i].repeticao == ht[j].repeticao){
        //STRCOLL É UMA FUNÇÃO DO C NA QUAL ELE FAZ A COMPARAÇÃO DE CADA LETR DA PALAVRA
        //E CASO A PRIMEIRA INSERIDA SEJA "MENOR" QUE A "SEGUNDA" ENTÃO DEVEMOS TROCAR ELAS DE
        //ORDEM
        if(strcoll(ht[i].word,ht[j].word) < 0){
          strcpy(htaux[j].word, ht[j].word);
    			strcpy(ht[j].word, ht[i].word);
    			strcpy(ht[i].word,htaux[j].word);

        }
      }
    }
  }
  //FOR SIMPLESMENTE PARA FAZER A IMPRESSÃO DOS DADOS
	for (i = 0; i < TAM; i++){
			if (ht[i].repeticao >= 2){
        printf ("%d ", ht[i].repeticao);
				printf ("%s\n", ht[i].word);
			}
		}
  //LIMPA A VARIAVEL WORD
  free(word);
  //FECHA O ARQUIVO
  fclose (IN);
  return EXIT_SUCCESS;
}
