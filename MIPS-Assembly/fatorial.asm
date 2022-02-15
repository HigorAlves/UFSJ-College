.globl main
.data
  msgprompt: .word msgprompt_data
  msgres1: .word msgres1_data
  msgres2: .word msgres2_data

  msgprompt_data: .asciiz "Entre com um valor positivo: "
  msgres1_data: .asciiz "O fatorial de "
  msgres2_data: .asciiz " é "


.text
main:
  # Escrevendo no prompt
  #printf("Entre com um valor positivo: ");
  la      $t0, msgprompt    
  lw      $a0, 0($t0)       
  li      $v0, 4           
  syscall                   

 
  li      $v0, 5           
  syscall                   
  move    $t0, $v0          

  move    $a0, $t0          
  addi    $sp, $sp, -12     
  sw      $t0, 0($sp)       
  sw      $ra, 8($sp)      
  jal     factorial         

 

  lw      $s0, 4($sp)       


  la      $t1, msgres1     
  lw      $a0, 0($t1)       
  li      $v0, 4            
  syscall                   

  lw      $a0, 0($sp)       
  li      $v0, 1            
  syscall                  

  la      $t2, msgres2     
  lw      $a0, 0($t2)       
  li      $v0, 4            
  syscall                   

  move    $a0, $s0          
  li      $v0, 1            
  syscall                   

  addi    $sp, $sp, 12      # move stack pointer back down where we started

  # return 0;
  li      $v0, 10           # system call for exit
  syscall                   # exit!



.text
factorial:
  
  lw      $t0, 0($sp)       
  #if (x == 0)
  beq     $t0, 0, returnOne 
  addi    $t0, $t0, -1      

  
  addi    $sp, $sp, -12     
  sw      $t0, 0($sp)       
  sw      $ra, 8($sp)       

  jal     factorial         

  
  lw      $ra, 8($sp)      
  lw      $t1, 4($sp)       

  lw      $t2, 12($sp)      

  mul     $t3, $t1, $t2     

  sw      $t3, 16($sp)      

  addi    $sp, $sp, 12      

  jr      $ra               

.text
#return 1;
returnOne:
  li      $t0, 1           
  sw      $t0, 4($sp)      
  jr $ra               
