package Model;

import java.util.List;
import javax.swing.table.AbstractTableModel;

/**
 * @author Higor Alves
 */
public class TableModelLocacao extends AbstractTableModel{
    private List<Locacao> locacoes;
    private final String[] colunas = {"Cliente","Filme"};
    
    public TableModelLocacao(List<Locacao> locacoes){
        this.locacoes = locacoes;
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
        return locacoes.size();
    }

    @Override
    public int getColumnCount() {
        return colunas.length;
    }

    @Override
    public Object getValueAt(int linha, int coluna) {
        switch(coluna){
            case 0:
                return locacoes.get(linha).getCliente();
            case 1:
                return locacoes.get(linha).getFilme();
            default:
                return null;
        }
    }

    @Override
    public void setValueAt(Object valor, int linha, int coluna) {
        switch(coluna){
            case 0:
                locacoes.get(linha).setCliente((String) valor);
                break;
            case 1:
                locacoes.get(linha).setFilme((String) valor);
                break;
            default:  
                break;
        }
        this.fireTableRowsUpdated(linha, linha);
    }
}
