#Principais
	name = tp2
	compl = gcc
	main = main.c	

	#Saida
	namet_e = tentErr.out

	#Biblioteca
	bibG = geral.h

	#Referência
	refG = geral.c

	#Dependencias
	depG = geral.o

all: $(name)

$(name): $(depG) $(depV) $(main)
	$(compl) $(depG) $(depV) $(main) -o $(name)
	rm -rf *.o *.gch
	clear
	
$(depV):
	$(compl) -c

$(depG):$(bibG) $(refG)
	$(compl) -c $(bibG) $(refG)

clear: 
	rm -rf *.o *.gch *.out $(name)
