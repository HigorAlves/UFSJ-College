/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

/**
 *
 * @author Higor Alves
 */
public class Locacao implements Model, Comparable<Locacao>{
    private String filme;
    private String cliente;

    public String getFilme() {
        return filme;
    }

    public void setFilme(String filme) {
        this.filme = filme;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    @Override
    public int compareTo(Locacao o) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    public boolean equals(Object o){
        if (o instanceof Locacao){
            return cliente.equals(((Locacao) o).getCliente()) && filme.equals(((Locacao)o).getFilme());
        }
        return false;
    }
}
