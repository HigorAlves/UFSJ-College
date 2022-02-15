.text
.global main

main:
	lw $t0, firstnum 	# $t0 = Primeiro numero
	lw $t1, secondnum	# $t1 = Segundo numero
	li $t2, 2		# $t2 = numero do passo, come�a com 2
	la $t3, mem		# $t3 = endere�o para escrever oque sobra do fibo
	
loop:
	add $t0, $t0, $t1 	# add $t1 a $t0, ent�o $t0 para $t1 para pegar o proximo 2
	add $t1, $t1, $t0	# numero fibo em sequencia
	
	sw $t0, 0($t3)		# guarda o proximo 2 no proximo lugar do array
	sw $t1, 4($t3)	
	
	addiu $t3, $t3, 8	# move 8 bits pra frente para achar o proximo espa�o em branco
	addiu $t2, $t2, 2	# incrementa os passos para mostrar que fez mais dois passos
	beq 
	j loop			# loop termina generando mais numeros eventualmente vai dar error por usar memoria de mais
	jr $ra			# maneira padr�o de voltar do processo, mas nunca � usada
	
.data				# como se inicia a sess�o data
firstnum:	.word 1		# primeiro numero para a sequencia
secondnum:	.word 1		# segundo numero para a sequencia
mem:		.space 4096	# reserva um espa�o de 4 bytes = 1 word 
