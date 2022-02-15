package miscellaneous;

import Controller.Controller;
import Controller.FilmeController;
import Model.Filme;
import Model.Model;
import View.FilmeView;
import View.View;

/**
 * @author Higor Alves
 */
public class FilmeFabrica extends FabricaAbstrata{

    @Override
    public View criarView() {
        return FilmeView.getInstancia();
    }

    @Override
    public Model criarModelo() {
        return new Filme();
    }

    @Override
    public Controller criarControle() {
        return new FilmeController();
    }
    
}
