/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import Model.Cliente;
import Model.Filme;
import Model.Locacao;
import miscellaneous.Database;

/**
 *
 * @author Higor Alves
 */
public class LocacaoController implements Controller{
    private Locacao locacao;
    
    public boolean alugar(String cliente,int indexCliente, String flime){
        for(Filme f: Database.getInstancia().getFilmes()){
            if(f.getNome().equals(flime) && f.getAlugado().equals("falso")){
                if (Database.getInstancia().getClientes().get(indexCliente).getIdade() >= f.getFaixaEtaria()){
                    locacao = new Locacao();
                    locacao.setCliente(cliente);
                    locacao.setFilme(flime);
                    
                    Database.getInstancia().getFilmes().get(f.getId()).setAlugado("Alugado");
                    Database.getInstancia().getLocacaoes().add(locacao);
                    return true;
                }
            }
        }
        return false;
    }
    
    public boolean removerRow(String filme, int index){
        for(Filme f: Database.getInstancia().getFilmes()){
             if(f.getNome().equals(filme) && f.getAlugado().equals("Alugado")){
                 Database.getInstancia().getFilmes().get(f.getId()).setAlugado("falso");
                 Database.getInstancia().getLocacaoes().remove(index);
                 return true;
             }
        }
        return false;
    }
    
    public void salvarArq(String path){
        ArqEscritor.getInstancia().lSave(Database.getInstancia().getLocacaoes(), path);
    }
    public void abrirArq(String path){
        ArqEscritor.getInstancia().lLoad(path);
        int index = Database.getInstancia().getLocacaoes().size();
    }
}
