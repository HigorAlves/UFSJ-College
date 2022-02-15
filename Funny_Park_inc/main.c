#include "geral.h"

int main(int argc, char **argv){
    int v = 0, b = 0, h = 0, i,quantidade = 0;

    char *veiculo = (char*)calloc(sizeof(char),100);
    char *movimnt = (char*)calloc(sizeof(char),100);

    posCar *aux = (posCar*)calloc(sizeof(posCar),1);

    flag(argc,argv,veiculo,movimnt,&h,&b,&v);

    if(v == 1){
        quantidade = 0;
        verificador(veiculo,movimnt);
    }
    if(b == 1){
        quantidade = 0;
        backtrack(veiculo);
    }
    if(h == 1){
        quantidade = 0;
        heuristica(veiculo);
    }

return 0;
}
