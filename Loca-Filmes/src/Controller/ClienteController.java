package Controller;

import Model.Cliente;
import miscellaneous.Database;
import miscellaneous.FabricaAbstrata;

/**
 * @author Higor Alves
 */
public class ClienteController implements Controller{
    private Cliente cliente;
    
    public boolean addRow(String nome, int idade){
        try{
            if (nome.equals("")){
                return false;
            }else{
                cliente = (Cliente)FabricaAbstrata.getFabrica("cliente").criarModelo();
            
                cliente.setId(Database.getInstancia().getClienteId());
                cliente.setNome(nome);
                cliente.setIdade(idade);
            
                if (Database.getInstancia().addData(cliente)){
                    Database.getInstancia().setClienteId(1);
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
        Database.getInstancia().removeData(id);
        return true;
    }
    public boolean alterarRow(int id, String nome, int idade, String newNome, int newIdade){
        cliente = (Cliente) FabricaAbstrata.getFabrica("cliente").criarModelo();
        cliente.setId(id);
        cliente.setNome(nome);
        cliente.setIdade(idade);
        
        if (Database.getInstancia().editData(cliente)){
            int index = Database.getInstancia().getClientes().indexOf(cliente);
            cliente.setNome(newNome);
            cliente.setIdade(newIdade);
            Database.getInstancia().getClientes().set(index, cliente);
            return true;
        }
        return false;
    }
    
    public void salvarArq(String path){
        ArqEscritor.getInstancia().cSave(Database.getInstancia().getClientes(), path);
    }
    public void abrirArq(String path){
        ArqEscritor.getInstancia().cLoad(path);
        int index = Database.getInstancia().getClientes().size();
        Database.getInstancia().setClienteId(index);
    }
}
