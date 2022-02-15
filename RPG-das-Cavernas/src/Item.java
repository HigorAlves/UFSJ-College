
public class Item {
///Atributos
	private int naSala;
	private int quantidade;

///Métodos
	public Item(){
		quantidade = 0;
	}
	
	public Item(int naSala){
		this.naSala = naSala;
		quantidade = 0;
	}

	public int getNaSala() {
		return naSala;
	}
	
	public void setNaSala(int naSala) {
		this.naSala = naSala;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
}
