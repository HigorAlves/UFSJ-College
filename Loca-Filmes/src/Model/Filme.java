package Model;

/**
 *
 * @author Higor Alves
 */
public class Filme implements Model, Comparable<Filme>{
    private int id;
    private String nome;
    private int faixaEtaria;
    private String alugado;

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

    public String getAlugado() {
        return alugado;
    }

    public void setAlugado(String alugado) {
        this.alugado = alugado;
    }
    
    public int getFaixaEtaria(){
        return faixaEtaria;
    }
    
    public void setFaixaEtaria(int faixaEtaria){
        this.faixaEtaria = faixaEtaria;
    }

    @Override
    public int compareTo(Filme o) {
        return nome.compareToIgnoreCase(o.getNome());
    }
    
    public boolean equals(Object o){
        if (o instanceof Filme){
            return nome.equalsIgnoreCase(((Filme) o).getNome());
        }
        return false;
    }
}
