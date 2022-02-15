#Subtração
.data
.text
	addi $t0, $zero, 10
	addi $t1, $zero, 3
	
	sub $t2, $t0, $t1
	
	li $v0, 1
	move $a0, $t2
	syscall