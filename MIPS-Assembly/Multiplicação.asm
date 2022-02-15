#Multiplicação
.data
.text
	addi $t0, $zero, 100
	addi $t1, $zero, 10
	
	mult $t0, $t1
	mflo $t2
	
	li $v0, 1
	move $a0, $t2
	syscall