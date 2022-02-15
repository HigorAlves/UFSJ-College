package PontoExtra;

public class Pessoa {
	private int id;
	private String nome;
	private String sobrenome;
	private int idade;
	private String telefone;
	private String sexo;
	private boolean maiorIdade;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getSobrenome() {
		return sobrenome;
	}
	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}
	public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) {
		this.idade = idade;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public boolean isMaiorIdade() {
		return maiorIdade;
	}
	public void setMaiorIdade(boolean maiorIdade) {
		this.maiorIdade = maiorIdade;
	}
}
