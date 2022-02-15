all: busca.o arvorebinaria.o quicksort.o
	gcc busca.o arvorebinaria.o quicksort.o main.c -o tp1

busca.o: busca.c Headers/busca.h
	gcc -c busca.c -o busca.o

arvorebinaria.o: arvorebinaria.c Headers/arvorebinaria.h
	gcc -c arvorebinaria.c -o arvorebinaria.o

quicksort.o: quicksort.c Headers/quicksort.h
	gcc -c quicksort.c -o quicksort.o

clean:
	rm *.o