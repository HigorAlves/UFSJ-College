import java.util.ArrayList;

public class Jogador extends Personagem{
///Atributos
	
///Métodos
	public Jogador(Porta entrada){ //Construtor
		tamanhoMochila = 7;
		mochila = new Item[tamanhoMochila];
		mochila[5] = new Ouro();
		mochila[6] = new Diamante();
		setGold(0);
		setNaSala(0); //Ele está na sala 1
		setProximoAOque(entrada); //Ele está perto da porta C
	}
	
	public int getGold() {
		return mochila[5].getQuantidade();
	}
	
	private void setGold(int gold) {
		this.mochila[5].setQuantidade(gold);
	}
	
	public void addGold(int quantidade){
		int antigo = mochila[5].getQuantidade();
		setGold(quantidade+antigo);
	}
	
	public int getDiamante() {
		return mochila[6].getQuantidade();
	}
	
	private void setDiamante(int diamante) {
		this.mochila[6].setQuantidade(diamante);
	}
	
	public void addDiamante(int quantidade){
		int antigo = mochila[6].getQuantidade();
		setDiamante(quantidade+antigo);
	}
	
	public boolean moverParaSala(Porta porta){
		if(!porta.isTrancada()){
			if(porta.getParaQualSala() == 20){
				System.out.println("Parabéns vc chegou ao final");
				System.out.println("Ouro: "+getGold());
				System.out.println("Diamante: "+getGold());
				setNaSala(porta.getParaQualSala());
				return true;
			}
			for(int i = 0; i < 3; i++){
				if(Mapa.salas[porta.getParaQualSala()].portas[i].getParaQualSala() == naSala){
					setProximoAOque(Mapa.salas[porta.getParaQualSala()].portas[i]);
				}
			}
			setNaSala(porta.getParaQualSala());
			return true;
		}else{
			for(int i = 0; i<5; i++){
				if(mochila[i] instanceof Chave){
					mochila[i] = null;
					porta.setTrancada(false);
					System.out.println("Abriu a porta!");
					moverParaSala(porta);
					return true;
				}
			}
			System.out.println("A porta está trancada!");
		}
		return false;
	}
	
	public boolean pegaItem(Object item, Sala sala){
		if(proximoAOque instanceof Ouro){
			System.out.println("Pegou "+sala.getOuro()+" ouros");
			addGold(sala.getOuro());
            sala.setOuro(0);
			return true;
		}else if(proximoAOque instanceof Diamante){
			System.out.println("Pegou "+sala.getDiamante()+" diamantes");
			addDiamante(sala.getDiamante());
            sala.setDiamante(0);
			return true;
		}else if(proximoAOque instanceof Item){
			for(int i = 0; i < 5; i++){
				if (mochila[i] == null){
					Mapa.salas[naSala].itens.remove(proximoAOque);
					mochila[i] = (Item)item;
					System.out.println("Pegou "+item.getClass().getName().toLowerCase());
					proximoAOque = null;
					return true;
				}
			}
			System.out.println("Mochila cheia");
			return false;
		}else{
			System.out.println("Não pode pegar esse item!");
			return false;
		}
	}
	
	public Item removeItem(String item){
		for(int i = 0; i < 5; i++){
			if(mochila[i] != null && mochila[i].getClass().getName().toLowerCase().equals(item.toLowerCase())){
				Item pegaItem = mochila[i];
				proximoAOque = null;
				mochila[i] = null;
				return pegaItem;
			}
		}
		return null;
	}
	
	public void mostraStatus(){
		int qntMachado = 0;
		int qntPocao = 0;
		int qntChave = 0;
		for(int i = 0; i<5; i++){
			if(mochila[i] instanceof Machado){
				qntMachado++;
			}else 
			if(mochila[i] instanceof Pocao){
				qntPocao++;
			}else
			if(mochila[i] instanceof Chave){
				qntChave++;
			}
		}
		System.out.println("Jogador:");
		System.out.println("machado x"+qntMachado+"| poçao x"+qntPocao+"| chave x"+qntChave);
		System.out.println("ouro x"+getGold()+"| diamante x"+getDiamante());
	}
	
	public void visualizarTroll(ArrayList<Troll> trolls) {
		//Imprime os Trolls presentes
		System.out.println("\tTrolls");
		for(Troll troll: trolls){
			if(troll.getNaSala() == naSala){
				System.out.println("Troll "+troll.getNomeDoTroll());
			}
		}
		System.out.println("------------------------");
	}
	
	public void visualizarASala(Sala sala){
		//Mostra qual sala está
		System.out.println("Sala "+(sala.getId()+1)+": <"+sala.getOuro()+" gold>"+"<"+sala.getDiamante()+" diamante>");
		
		//imprime as portas disponiveis
		System.out.println("\tPortas");
		sala.mostraPortas();
		System.out.println("------------------------");
		
		//Imprime os itens disponiveis
		System.out.println("\tItens");
		sala.mostraItem();
		System.out.println("------------------------");
	}
}
