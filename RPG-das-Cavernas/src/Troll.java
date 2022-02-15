import java.util.Random;

public class Troll extends Personagem{
///Atributos
	private Random random = new Random();
	private String nomeDoTroll;
	
///Metodos
	public Troll(){
		tamanhoMochila = 1;
		nomeDoTroll = criaNome(8);
		mochila = new Item[tamanhoMochila];
	}
	
	public Troll(int sala, Porta porta){
		naSala = sala;
		tamanhoMochila = 1;
		mochila = new Item[1];
		setProximoAOque(porta);
		nomeDoTroll = criaNome(8);
	}
	
	public char getmochila(){
		if(mochila[0]==null){
			return 'a';
		}
		return 'b';
	}
	
	public void setNomeDoTroll(String nomeDoTroll){
		this.nomeDoTroll = nomeDoTroll;
	}
	
	public String getNomeDoTroll(){
		return this.nomeDoTroll;
	}
	
	private String criaNome(int tamanho){
		String novoNome = "";
		for(int i = 0; i<tamanho; i++){
			novoNome = novoNome+((char)(random.nextInt(26)+'A'));
		}
		return novoNome;
	}
	
	public void movimentacao(Sala sala, Jogador player){
		if(mochila[0] instanceof Machado && player.getNaSala() == naSala){
			if(player.removeItem("Pocao") == null){
				sala.adicionaOuro(player.getGold());
				sala.adicionaDiamante(player.getDiamante());
				player.addGold(player.getGold()*(-1));
				player.addDiamante(player.getDiamante()*(-1));
				System.out.println("O troll "+ nomeDoTroll+" atacou você!");
				System.out.println("Voce perdeu os ouros e diamantes");
				mochila[0] =null;
				return;
			}else{
				System.out.println("O troll "+ nomeDoTroll+" atacou você!");
				System.out.println("Perdeu uma poção!");
				mochila[0] =null;
				return;
			}
		}
		//System.out.println((mochila[0] == null)+ " " + (sala.getItem("Machado") != null));
		if(mochila[0] == null && sala.getItem("Machado") != null){
			if(proximoAOque instanceof Machado){
				pegaItem((Item)proximoAOque, sala);
				proximoAOque = null;
				return;
			}else{
				setProximoAOque(sala.getItem("Machado"));
				return;
			}
		}else{
			if(proximoAOque instanceof Porta){
				if(!moverParaSala((Porta)proximoAOque)){
					proximoAOque = null;
				}
				proximoAOque = null;
				return;
			}else{
				Porta porta = sala.portas[random.nextInt(3)];
				while(porta.getParaQualSala() == -1){
					porta = sala.portas[random.nextInt(3)];
				}
				setProximoAOque(porta);
				return;
			}
		}
	}
	
	public void setProximoAOque(Object proximoAOque) {
		if(proximoAOque instanceof Machado || proximoAOque instanceof Porta){
			super.setProximoAOque(proximoAOque);
		}
	}
	
	public boolean moverParaSala(Porta porta){
		if(porta.getParaQualSala() != 20){
			super.moverParaSala(porta);
			return true;
		}else{
			return false;
		}
	}
	
	public boolean pegaItem(Item item, Sala sala){
		if(item instanceof Machado){
			super.pegaItem(item, sala, tamanhoMochila);
			return true;
		}else{
			return false;
		}
	}
}
