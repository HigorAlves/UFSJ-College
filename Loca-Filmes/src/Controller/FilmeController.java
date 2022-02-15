package Controller;

import Model.Filme;
import miscellaneous.Database;
import miscellaneous.FabricaAbstrata;
import java.lang.NumberFormatException;


/**
 * @author Higor Alves
 */
public class FilmeController implements Controller{
     private Filme filme;
    
    public boolean addRow(String titulo, int faixaEtaria){
        try{
            if (titulo.equals("")){
                return false;
            }else{
                filme = (Filme)FabricaAbstrata.getFabrica("filme").criarModelo();
                filme.setId(Database.getInstancia().getFilmeId());
                filme.setNome(titulo);
                filme.setFaixaEtaria(faixaEtaria);
                filme.setAlugado("falso");
            
                if (Database.getInstancia().addData(filme)){
                    Database.getInstancia().setFilmeId(1);
                }else {
                    return false;
                }
           }
        }catch(NumberFormatException e){
            return false;
        }
        return true;
    }
    public boolean removerRow(int id){
        Database.getInstancia().removeDataF(id);
        return true;
    }
    public boolean alterarRow(int id, String titulo, int faixaEtaria,String alugado, String newTitulo, int newFaixaEtaria){
        filme = (Filme) FabricaAbstrata.getFabrica("filme").criarModelo();
        filme.setId(id);
        filme.setNome(titulo);
        filme.setFaixaEtaria(faixaEtaria);
        filme.setAlugado(alugado);
        
        if (Database.getInstancia().FeditData(filme)){
            int index = Database.getInstancia().getFilmes().indexOf(filme);
            filme.setNome(newTitulo);
            filme.setFaixaEtaria(newFaixaEtaria);
            Database.getInstancia().getFilmes().set(index, filme);
            return true;
        }
        return false;
    }

    public void salvarArq(String path){
        ArqEscritor.getInstancia().fSave(Database.getInstancia().getFilmes(), path);
    }
    public void abrirArq(String path){
        ArqEscritor.getInstancia().fLoad(path);
        int index = Database.getInstancia().getFilmes().size();
        Database.getInstancia().setFilmeId(index);
    }
}
