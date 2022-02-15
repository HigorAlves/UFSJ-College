#Hello World em Assembly

.data
	Mensagem: .asciiz "Hello World\n"

.text
	li $v0, 4
	la $a0, Mensagem
	syscall