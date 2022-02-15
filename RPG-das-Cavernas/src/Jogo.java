
public class Jogo {
///Atributos
	public static final Machado MACHADO = new Machado();
	public static final Pocao POCAO = new Pocao();
	public static final Chave CHAVE = new Chave();
	private enum comando { moveTo, view, pickUp, drop, lock, trowAxe, exit, quit}
	private enum portas { A, B, C}
	
///Metodos
	public static void main(String[] args) {
		Mapa mapa = new Mapa();
		Comandos comandos = new Comandos();		
		String acao[] = {"view",""};
		while(mapa.player.getNaSala() != 20 && !acao[0].equals("quit")){
			//mapa.exibeTroll();
			mapa.moveTroll();
			acao = comandos.leituraDoTeclado();

            if(acao[0].equals(comando.moveTo.name())){ ///Mover para proximo do item
				if(acao[1].toUpperCase().equals(portas.A.name())){
					comandos.moveTo(mapa.player, mapa.salas[mapa.player.getNaSala()].portas[portas.A.ordinal()]);
				}else 
					if(acao[1].toUpperCase().equals(portas.B.name())){
					comandos.moveTo(mapa.player, mapa.salas[mapa.player.getNaSala()].portas[portas.B.ordinal()]);
				}else 
					if(acao[1].toUpperCase().equals(portas.C.name())){
					comandos.moveTo(mapa.player, mapa.salas[mapa.player.getNaSala()].portas[portas.C.ordinal()]);
				}else{
					if(acao[1].equals("gold")){
						acao[1] = "ouro";
					}
					comandos.moveTo(mapa.player, mapa.salas[mapa.player.getNaSala()].getItem(acao[1]));
				}
			}else 
                if(acao[0].equals(comando.view.name())){ ///Visualizar sala
				comandos.view(mapa.player, mapa.salas[mapa.player.getNaSala()], mapa.troll);
			}else 
				if(acao[0].equals(comando.pickUp.name())){ ///Pegar item	
				comandos.pickUp(mapa.player, mapa.player.getProximoAOque(), mapa.salas[mapa.player.getNaSala()], mapa.troll);
			}else 
				if(acao[0].equals(comando.drop.name())){ ///Retirar item
				comandos.drop(mapa.player, acao[1]);
			}else 
				if(acao[0].equals(comando.lock.name())){ ///Retirar item
				comandos.lock(mapa.player, mapa.salas[mapa.player.getNaSala()]);
			}else 
				if(acao[0].equals(comando.trowAxe.name())){ ///Lançar o machado
				comandos.trowAxe(mapa.player, acao[1], mapa.troll);
			}else 
				if(acao[0].equals(comando.exit.name())){ ///Lançar o machado
				comandos.exit(mapa.player);
			}else 
				if(acao[0].equals(comando.quit.name())){ ///Sair do jogo
				System.out.println("Saiu do programa");
			}else{ ///Quando não houver o comando
				System.out.println("Não há esse comando");
			}
		}
	}

}