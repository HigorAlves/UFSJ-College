.data

	A: .word 89,666,10 # declaracao array

.text
	Main:
		li $a0, 3 # parameter n
		sll $a0, $a0, 2 # number of bytes in array A
		
	outer:
		sub $t0, $a0, 8 # $t0: j-1
		li $t1, 0 # no swap yet
		
	inner:
		lw $t2, A+4($t0) # $t2 <- A[j]
		lw $t3, A($t0) # $t3 <- A[j-1]
		bgt $t2, $t3, no_swap # A[j] <= A[j-1]?
		sw $t2, A($t0) # A[j-1] <- $t2 \ move bubble
		sw $t3, A+4($t0) # A[j] <- $t3 / $t2 upwards
		li $t1, 1 # swap occurred
		
	no_swap:
		sub $t0, $t0, 4 #proximo elemento do array (next array element)
		bgez $t0, inner # more?
		bnez $t1, outer # did we swap?
		li $v0, 10 # exit
		syscall 
