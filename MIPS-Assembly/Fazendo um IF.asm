.data
	mensagem: .asciiz "Os numeros são iguais.\n"
	mensagem2: .asciiz "Os números são diferentes.\n"
.text
	main:
		addi $t0, $zero, 5
		addi $t1, $zero, 20
	
		#Verificar se os dois numero são iguais
		beq $t0, $t1, numerosIguais
		bne $t0, $t1, numerosDiferentes
		bgt
		
		#terminar o programa
		li $v0, 10
		syscall
		
	numerosIguais:
		li $v0, 4
		la $a0, mensagem
		syscall	
		
	numerosDiferentes:
		li $v0, 4
		la $a0, mensagem2
		syscall