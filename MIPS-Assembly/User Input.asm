.data
	pergunta: .asciiz "Entre com um numero:"
	mensagem: .asciiz "\nSeu numero foi:"
.text
	#Vamos fazer a pergunta ao usuario
	li $v0, 4
	la $a0, pergunta
	syscall
	
	#vamos pegar o input do usuario
	li $v0, 5
	syscall
	
	#passar o valor para t0
	move $t0, $v0
	
	#imprimir o valor inserido
	li $v0, 4
	la $a0, mensagem
	syscall
	
	li $v0, 1
	move $a0, $t0
	syscall