import java.util.ArrayList;
import java.util.Scanner;

public class Comandos {
///Atributos
	public static final Machado MACHADO = new Machado();
	public static final Pocao POCAO = new Pocao();
	public static final Chave CHAVE = new Chave();
	
///Métodos
	public String[] leituraDoTeclado(){
		Scanner scan = new Scanner(System.in);
		System.out.print("Player> ");
		return scan.nextLine().trim().split("\\s+");
	}
	
	public void view(Jogador player, Sala sala, ArrayList<Troll> trolls){
		player.visualizarASala(sala);
		player.visualizarTroll(trolls);
		player.mostraStatus();
	}
	
	public void exit(Jogador player){
		if(player.getProximoAOque() instanceof Porta){
			player.moverParaSala((Porta)player.getProximoAOque());
		}else{
			System.out.println("Você não está proximo a uma porta");
		}
	}
	
	public void moveTo(Jogador player, Object item){
		player.setProximoAOque(item);
	}
	
	public boolean pickUp(Jogador player, Object item, Sala sala, ArrayList<Troll> lista){ ///Pega um objeto
		for(Troll troll: lista){
			if(troll.getNaSala() == player.getNaSala()){
				if(player.getProximoAOque() instanceof Ouro || player.getProximoAOque() instanceof Diamante){
					System.out.println("Não pode pegar ouro e diamante, quando há trolls por perto");
					return false;
				}
			}
		}
		return player.pegaItem(item, sala);
	}
	
	public boolean drop(Jogador player, String item){
		Item itemMochila = player.removeItem(item);
		if(itemMochila != null){
			System.out.println("Largou "+itemMochila.getClass().getName());
			Mapa.salas[player.getNaSala()].adicionaItens(itemMochila);
			return true;
		}else if(item.equals("gold")){
			Mapa.salas[player.getNaSala()].adicionaOuro(player.getGold());
			System.out.println("Largou "+player.getGold()+" ouros");
			player.addGold((-1)*player.getGold());
			return true;
		}
		System.out.println("Não há "+item+" na mochila!");
		return false;
	}
	
	public void lock(Jogador player, Sala sala){
		if(player.getProximoAOque() instanceof Porta){
			Porta porta = (Porta)player.getProximoAOque();
			Item pocao = player.removeItem("Pocao");
			if(pocao != null){
				sala.trancaPorta(porta.getNome());
				return;
			}
			System.out.println("Não há poção na mochila");
		}else{
			System.out.println("Isso não é uma porta!");
		}
	}
	
	public boolean trowAxe(Jogador player, String nomeDoTroll, ArrayList<Troll> trolls){
		Item machado = player.removeItem(MACHADO.getClass().getName().toLowerCase());
		if(machado != null){
			for(Troll troll: trolls){
				if(troll.getNomeDoTroll().equals(nomeDoTroll)){
					System.out.println("Matou o troll "+ nomeDoTroll);
					trolls.remove(troll);
					return true;
				}
			}
			System.out.println("Não há troll "+nomeDoTroll+" na sala!");
			return false;
		}
		System.out.println("Você não possui machados!!");
		return false;
	}
}
