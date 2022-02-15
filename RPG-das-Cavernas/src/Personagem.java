
public class Personagem {
	protected int naSala;
	protected Object proximoAOque;
	protected Item mochila[];
	protected int tamanhoMochila;
	
	public int getNaSala() {
		return naSala;
	}
	
	public void setNaSala(int naSala) {
		this.naSala = naSala;
	}
	
	public Object getProximoAOque() {
		return proximoAOque;
	}
	
	public void setProximoAOque(Object proximoAOque) {
		this.proximoAOque = proximoAOque;
	}
	
	public boolean moverParaSala(Porta porta){
		if(!porta.isTrancada()){
			for(int i = 0; i < 3; i++){
				if(Mapa.salas[porta.getParaQualSala()].portas[i].getParaQualSala() == naSala){
					setProximoAOque(Mapa.salas[porta.getParaQualSala()].portas[i]);
				}
			}
			setNaSala(porta.getParaQualSala());
			return true;
		}else{
			return false;
		}
	}
	
	public boolean pegaItem(Object item, Sala sala, int tamanho){
		if(proximoAOque instanceof Item){
			for(int i = 0; i < tamanho; i++){
				if (mochila[i] == null){
					Mapa.salas[naSala].itens.remove(proximoAOque);
					mochila[i] = (Item)item;
					return true;
				}
			}
			return false;
		}else{
			return false;
		}
	}
	
	public Item removeItem(String item){
		for(int i = 0; i < tamanhoMochila; i++){
			if(mochila[i] != null && mochila[i].getClass().getName().toLowerCase().equals(item)){
				Item pegaItem = mochila[i];
				proximoAOque = null;
				mochila[i] = null;
				return pegaItem;
			}
		}
		return null;
	}
}
