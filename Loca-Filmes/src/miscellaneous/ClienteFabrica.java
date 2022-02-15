package miscellaneous;

import Controller.ClienteController;
import Controller.Controller;
import Model.Cliente;
import Model.Model;
import View.ClienteView;
import View.View;

/**
 * @author Higor Alves
 */
public class ClienteFabrica extends FabricaAbstrata {

    @Override
    public View criarView() {
        return ClienteView.getInstancia();
    }

    @Override
    public Model criarModelo() {
        return new Cliente();
    }

    @Override
    public Controller criarControle() {
        return new ClienteController();
    }
    
}
