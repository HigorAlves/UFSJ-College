.data
	mensagem: .asciiz "Ola, todo mundo.\nMeu nome é Higor.\n"
.text
	main: 
		jal display
		
	#Isto é tipo um return 0 para falar que o programa acabou
	li $v0, 10
	syscall
	
	display:
		li $v0, 4
		la $a0, mensagem
		syscall
		
		jr $ra #volta pro main