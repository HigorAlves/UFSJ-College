package Model;

/**
 * @author Higor Alves
 */
public class Cliente extends Pessoa implements Comparable<Cliente>{
    @Override
    public int compareTo(Cliente o) {
        return nome.compareToIgnoreCase(o.getNome());
    }
    
    public boolean equals(Object o){
        if (o instanceof Cliente){
            return nome.equalsIgnoreCase(((Cliente) o).getNome());
        }
        return false;
    }
}
