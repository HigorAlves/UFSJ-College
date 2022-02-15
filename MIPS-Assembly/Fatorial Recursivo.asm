.data
	promptMessage: .asciiz "Entre com um numero:"
	resultMessage: .asciiz "\nResultado foi: "
	thenumber:	.word 0
	theanswer:	.word 0

.text
	.globl main
	main:
		#Ler o valor do usuario
		li $v0, 4
		la $a0, promptMessage
		syscall
		
		li $v0, 5
		syscall
		
		sw $v0, thenumber
		
		# chamar a função do fatorial
		lw $a0, thenumber
		jal findFactorial
		sw $v0, theanswer
		
		# Mostrar resultado
		li $v0, 4
		la $a0, resultMessage
		syscall
		
		li $v0, 1
		lw $a0, theanswer
		syscall
		
		# Finalizar o programa
		li $v0, 10
		syscall
		
#-----------------------------------------------------------------
.globl findFactorial
findFactorial:
	subu $sp, $sp, 8
	sw $ra, ($sp)
	sw $s0, 4($sp)
	
	# Caso basico
	li $v0, 1
	beq $a0, 0, factorialDone
	
	# Achar o fatorial do numero do numero (fatorial(fatorial - 1))
	move $s0, $a0
	sub $a0, $a0, 1
	jal findFactorial
	
	mul $v0, $s0, $v0
	
	factorialDone:
		lw $ra, ($sp)
		lw $s0, 4($sp)
		addu $sp, $sp, 8
		
		jr $ra	