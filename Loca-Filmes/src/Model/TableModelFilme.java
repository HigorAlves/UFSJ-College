package Model;

import java.util.List;
import javax.swing.table.AbstractTableModel;

/**
 * @author Higor Alves
 */
public class TableModelFilme extends AbstractTableModel{
    private List<Filme> filmes;
    private final String[] colunas = {"ID","Titulo","Faixa Etaria","Alugado"};
    
    public TableModelFilme(List<Filme> filmes){
        this.filmes = filmes;
    }
     public void updateTable(){
        this.fireTableDataChanged();
    }
    
    @Override
    public String getColumnName(int column) {
        return colunas[column];
    }

    @Override
    public int getRowCount() {
        return filmes.size();
    }

    @Override
    public int getColumnCount() {
        return colunas.length;
    }

    @Override
    public Object getValueAt(int linha, int coluna) {
        switch(coluna){
            case 0:
                return filmes.get(linha).getId();
            case 1:
                return filmes.get(linha).getNome();
            case 2:
                return filmes.get(linha).getFaixaEtaria();
            case 3:
                return filmes.get(linha).getAlugado();
            default:
                return null;
        }
    }

    @Override
    public void setValueAt(Object valor, int linha, int coluna) {
        switch(coluna){
            case 0:
                filmes.get(linha).setId(Integer.parseInt((String)valor));
                break;
            case 1:
                filmes.get(linha).setNome((String)valor);
                break;
            case 2:
                filmes.get(linha).setFaixaEtaria(Integer.parseInt((String)valor));
                break;
            case 3:
                filmes.get(linha).setAlugado((String) valor);
                break;
            default:  
                break;
        }
        this.fireTableRowsUpdated(linha, linha);
    }
}
