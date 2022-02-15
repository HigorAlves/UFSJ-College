package miscellaneous;

import Model.Cliente;
import Model.Filme;
import Model.Locacao;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import java.lang.NumberFormatException;

/**
 * @author Higor Alves
 */
public class Database {
    private static Database instancia = null;
    
    private int clienteId;
    private int filmeId;

    private List<Cliente> clientes;
    private List<Filme> filmes;
    private List<Locacao> locacoes;
    
    private Database(){
        clientes = new LinkedList<>();
        filmes = new LinkedList<>();
        locacoes = new LinkedList<>();
        clienteId = 0;
        filmeId = 0;
    }
    
    //METODOS CLIENTES
    public int getClienteId(){
        return this.clienteId;
    }
    public void setClienteId(int id){
        this.clienteId += id;
    }
    
    public void setClientes(List<Cliente> clientes){
        this.clientes.addAll(clientes);
    }
    public List<Cliente> getClientes(){
        return clientes;
    }  
    public boolean addData(Cliente cliente){
        return clientes.add(cliente);
    }
    public boolean removeData(int id){
        for (Cliente c: this.clientes){
            if (c.getId() == id){
                this.clientes.remove(c);
                return true;
            }
        }
        return false;
    }    
    public boolean editData(Cliente cliente){
        if(clientes.contains(cliente)){
            return true;
        }
        return false;
    }
    
    //METODOS FILMES
    public int getFilmeId(){
        return this.filmeId;
    }
    public void setFilmeId(int id){
        this.filmeId += id;
    }
    public boolean addData(Filme filme){
        return filmes.add(filme);
    }
    public boolean FeditData(Filme filme){
        if(filmes.contains(filme)){
            return true;
        }
        return false;
    }
    public List<Filme> getFilmes(){
        return filmes;
    }
    public boolean removeDataF(int id){
        for (Filme f: this.filmes){
            if (f.getId() == id){
                this.filmes.remove(f);
                return true;
            }
        }
        return false;
    }
    
    //METODOS LOCACAO
     public boolean addData(Locacao locacao){
        return locacoes.add(locacao);
    }
    public boolean lEditData(Locacao locacao){
        if(locacoes.contains(locacao)){
            return true;
        }
        return false;
    }
    public List<Locacao> getLocacaoes(){
        return locacoes;
    }
    public boolean removeDataL(Locacao locacao){
        locacoes.remove(locacao);
        return true;
    }
    
    public static Database getInstancia(){
        if (instancia == null){
            instancia = new Database();
        }
        return instancia;
    }
}
