import java.util.ArrayList;
import java.util.Random;

public class Mapa {
///Atributos
	private Random numeros = new Random();
	public static Sala salas[] = new Sala[20];
	public Jogador player;
	public ArrayList<Troll> troll = new ArrayList<Troll>();
	
///Métodos
	public Mapa(){ //Construtor
		for(int i = 0; i<20; i++){
			salas[i] = new Sala(i);
		}
		troll.clear();
		criaTroll(10);
		criaPocoes(10);
		criaMachados(20);
		criaTesouros(150);
		criaMapaEstatico();
		criaChavesPortasTrancadas();
		player = new Jogador(salas[0].portas[2]);
	}
	
	private void criaTroll(int quantidade){ //Gera os Tesouros
		for(int i = 0; i < quantidade ;i++){
			int sala = numeros.nextInt(18)+2;
			troll.add(new Troll( sala, salas[sala].portas[0])); 
		}
	}
	
	public void exibeTroll(){ //Gera os Tesouros
		for(Troll trolls: troll){
			System.out.println(trolls.getNomeDoTroll()+": "+trolls.getNaSala()+" ->>"+trolls.getmochila()+" "+(trolls.getProximoAOque() instanceof Machado));
		}
	}
	
	public void moveTroll(){
		for(Troll trolls: troll){
			trolls.movimentacao(salas[trolls.getNaSala()], player);
		}
	}
	
	private void criaTesouros(int quantidade){ //Gera os Tesouros
		for(int i = 0; i < quantidade ;i++){
			int salaRandomica = numeros.nextInt(20);
			salas[salaRandomica].adicionaOuro(10);
			salaRandomica = numeros.nextInt(20);
			salas[salaRandomica].adicionaDiamante(1);
		}
	}
	
	private void criaMachados(int quantidade){ //Gera os Machados
		for(int i = 0; i < quantidade ;i++){ 
			int salaRandomica = numeros.nextInt(20);
			Machado machado = new Machado();
			salas[salaRandomica].adicionaItens(machado);
		}
	}
	
	private void criaPocoes(int quantidade){ //Gera os pocoes
		for(int i = 0; i < quantidade ;i++){ 
			int salaRandomica = numeros.nextInt(20);
			Pocao pocao = new Pocao();
			salas[salaRandomica].adicionaItens(pocao);
		}
	}
	
	public void criaChavesPortasTrancadas(){
		//Tranca as portas
		salas[0].trancaPorta(0); //tranca 1 ~ 6
		salas[6].trancaPorta(0); //tranca 7 ~ 12
		salas[7].trancaPorta(0); //tranca 8 ~ 13
		salas[8].trancaPorta(0); //tranca 9 ~ 10
		salas[13].trancaPorta(0);//tranca 14 ~ 15
		salas[17].trancaPorta(0);//tranca 18 ~ 19
		
		//Define as chaves
		int indices[] = {2,5,7,12,13,16};
		for(int i = 0; i < 6; i++){
			Chave chave = new Chave();
			salas[(indices[i]-1)].adicionaItens(chave);
		}
	}
	
	private void criaMapaEstatico(){ ///Porta: A = 0; B = 1; C = 2.
		//Para a Sala 1
		salas[0].portas[0].setParaQualSala(6);
		salas[0].portas[1].setParaQualSala(2);
		salas[0].portas[2].setParaQualSala(1); //Entrada
		
		//Para a Sala 2
		salas[1].portas[0].setParaQualSala(1);
		salas[1].portas[1].setParaQualSala(3);
		
		//Para a Sala 3
		salas[2].portas[0].setParaQualSala(2);
		salas[2].portas[1].setParaQualSala(8);
		
		//Para a Sala 4
		salas[3].portas[0].setParaQualSala(21); //Saida
		salas[3].portas[1].setParaQualSala(5);

		//Para a Sala 5
		salas[4].portas[0].setParaQualSala(10);
		salas[4].portas[1].setParaQualSala(4);
		
		//Para a Sala 6
		salas[5].portas[0].setParaQualSala(1);
		salas[5].portas[1].setParaQualSala(7);

		//Para a Sala 7
		salas[6].portas[0].setParaQualSala(12);
		salas[6].portas[1].setParaQualSala(6);

		//Para a Sala 8
		salas[7].portas[0].setParaQualSala(13);
		salas[7].portas[1].setParaQualSala(3);

		//Para a Sala 9
		salas[8].portas[0].setParaQualSala(10);

		//Para a Sala 10
		salas[9].portas[0].setParaQualSala(9);
		salas[9].portas[1].setParaQualSala(15);
		salas[9].portas[2].setParaQualSala(5);

		//Para a Sala 11
		salas[10].portas[0].setParaQualSala(12);
		salas[10].portas[1].setParaQualSala(16);

		//Para a Sala 12
		salas[11].portas[0].setParaQualSala(11);
		salas[11].portas[1].setParaQualSala(7);
		salas[11].portas[2].setParaQualSala(13);
		
		//Para a Sala 13
		salas[12].portas[0].setParaQualSala(12);
		salas[12].portas[1].setParaQualSala(8);

		//Para a Sala 14
		salas[13].portas[0].setParaQualSala(15);
		salas[13].portas[1].setParaQualSala(19);

		//Para a Sala 15
		salas[14].portas[0].setParaQualSala(14);
		salas[14].portas[1].setParaQualSala(10);
		salas[14].portas[2].setParaQualSala(20);

		//Para a Sala 16
		salas[15].portas[0].setParaQualSala(11);
		salas[15].portas[1].setParaQualSala(17);

		//Para a Sala 17
		salas[16].portas[0].setParaQualSala(16);
		salas[16].portas[1].setParaQualSala(18);

		//Para a Sala 18
		salas[17].portas[0].setParaQualSala(19);
		salas[17].portas[1].setParaQualSala(17);

		//Para a Sala 19
		salas[18].portas[0].setParaQualSala(14);
		salas[18].portas[1].setParaQualSala(18);

		//Para a Sala 20
		salas[19].portas[0].setParaQualSala(15);
	}
}