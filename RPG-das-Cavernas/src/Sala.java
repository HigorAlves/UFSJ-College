import java.util.ArrayList;
import java.util.Collections;

public class Sala{
	/*
	 * Nomes das salas vão de 0 até 19
	*/
	
///Atributos
	private int id;
	Porta portas[] = new Porta[3];
	private Ouro ouro = new Ouro();
	private Diamante diamante = new Diamante();
	ArrayList<Item> itens = new ArrayList<Item>();
	
///Métodos
	public Sala(int id){
		for(int i = 0; i<3; i++){
			portas[i] = new Porta(i);
		}
		this.id = id;
		itens.clear();
		itens.add(ouro);
		itens.add(diamante);
		ouro.setQuantidade(0);
		diamante.setQuantidade(0);
	}
	
	public int getId(){
		return this.id;
	}
	
	public void adicionaOuro(int valor){
		this.ouro.setQuantidade(valor+this.ouro.getQuantidade());
	}
        
    public void setOuro(int quantidade){
        this.ouro.setQuantidade(quantidade);
    }
	
	public int getOuro(){
		return this.ouro.getQuantidade();
	}
	
	public void adicionaDiamante(int valor){
		this.diamante.setQuantidade(valor+this.ouro.getQuantidade());
	}
        
    public void setDiamante(int quantidade){
        this.diamante.setQuantidade(quantidade);
    }
	
	public int getDiamante(){
		return this.diamante.getQuantidade();
	}
	
	public void adicionaItens(Item item){
		itens.add(item);
	}
	
	public Item getItem(String item){
		for(Item valoresDaLista: itens){
			if(valoresDaLista.getClass().getName().toLowerCase().equals(item.toLowerCase())){
				return valoresDaLista;
			}
		}
		return null;
	}
	
	public void trancaPorta(int porta){
		Mapa.salas[id].portas[porta].setTrancada(true);
		int outraSala = Mapa.salas[id].portas[porta].getParaQualSala();
		for(int i = 0; i < 3; i++){
			if(Mapa.salas[outraSala].portas[i].getParaQualSala() == id){
				Mapa.salas[outraSala].portas[i].setTrancada(true);
			}
		}
	}
	
	public void destrancaPorta(int porta){
		Mapa.salas[id].portas[porta].setTrancada(false);
		int outraSala = Mapa.salas[id].portas[porta].getParaQualSala();
		for(int i = 0; i < 3; i++){
			if(Mapa.salas[outraSala].portas[i].getParaQualSala() == id){
				Mapa.salas[outraSala].portas[i].setTrancada(false);
			}
		}
	}
	
	public void mostraPortas(){
		for(int i = 0; i < 3; i++){
			if(portas[i].getParaQualSala() != -1){
				System.out.print("<Porta "+(char)(i+65)+">"); //+": "+portas[i].isTrancada()
			}
		}
		System.out.println();
	}
	
	public void mostraItem(){
		int qntMachado = 0;
		int qntPocao = 0;
		int qntChave = 0;
		
		for(Item valoresDaLista: itens){
			if(valoresDaLista instanceof Machado){
				qntMachado++;
			}else 
			if(valoresDaLista instanceof Pocao){
				qntPocao++;
			}else
			if(valoresDaLista instanceof Chave){
				qntChave++;
			}
		}
		System.out.print("machado x"+qntMachado);
		System.out.println("| poção x"+qntPocao);
		System.out.println("chave x"+qntChave);
	}
}