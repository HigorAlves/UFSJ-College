package miscellaneous;

import Controller.Controller;
import Controller.FilmeController;
import Controller.LocacaoController;
import Model.Filme;
import Model.Locacao;
import Model.Model;
import View.FilmeView;
import View.LocacaoView;
import View.View;

/**
 * @author Higor Alves
 */
public class LocacaoFabrica extends FabricaAbstrata{

    @Override
    public View criarView() {
        return LocacaoView.getInstancia();
    }

    @Override
    public Model criarModelo() {
        return new Locacao();
    }

    @Override
    public Controller criarControle() {
        return new LocacaoController();
    }
    
}
