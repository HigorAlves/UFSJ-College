
public class Porta {
///Atributos
	int nome;
	private int paraQualSala;
	private boolean trancada;
	
///Métodos
	public Porta(int nome){
		this.nome = nome;
		paraQualSala = -1; //Valor -1, indica que não há porta
		trancada = false;
	}
	
	public int getNome(){
		return this.nome;
	}
	
	public boolean isTrancada() {
		return trancada;
	}

	public void setTrancada(boolean trancada) {
		this.trancada = trancada;
	}
	
	public int getParaQualSala() {
		return paraQualSala;
	}
	
	public void setParaQualSala(int paraQualSala) {
		this.paraQualSala = paraQualSala-1;
	}
	
}
