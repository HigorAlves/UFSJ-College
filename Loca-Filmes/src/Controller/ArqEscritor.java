package Controller;

import Model.Cliente;
import Model.Filme;
import Model.Locacao;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.Scanner;
import javax.swing.JFileChooser;
import miscellaneous.Database;

/**
 * @author Higor Alves
 */
public class ArqEscritor {
    private static ArqEscritor instancia = null;
    private String FileName = "";
    File File;
    
    private Cliente cliente;
    private Filme filme;
    private Locacao locacao;
    
    private ArqEscritor(){
    }
    
    public void lLoad(String path){
        FileName = path;
        File = new File(FileName);
        try {
            Scanner input = new Scanner(File);
            input.nextLine();
            
            while(input.hasNext()) {
                Locacao locacao = new Locacao();
		String data = input.next(); //Pega linha toda
		String[] values = data.split(","); //Parte as partes da linha e joga no vetor de string
                
                locacao.setCliente(values[0]);
                locacao.setFilme(values[1]);
                
		Database.getInstancia().addData(locacao);
            }
            input.close();
	} catch (FileNotFoundException e) {
	}	
    }
    
    public void lSave(List<Locacao> locacoes, String path) {		
        FileName = path;
        File = new File(FileName);
        try {
            if(!File.exists()) {
                File.createNewFile();
            }
            FileWriter fw = new FileWriter(File.getAbsolutePath(), true);
            for (Locacao l: locacoes) {
                fw.append("\n");
		fw.append(l.getCliente());
		fw.append(",");
		fw.append(""+l.getFilme());
            }
            fw.flush();
            fw.close();
	} catch (IOException e) {
            e.printStackTrace();
	}
    }
    
    public void fLoad(String path){
        FileName = path;
        File = new File(FileName);
        try {
            Scanner input = new Scanner(File);
            input.nextLine();
            while(input.hasNext()) {
                Filme filme = new Filme();
		String data = input.next(); //Pega linha toda
		String[] values = data.split(","); //Parte as partes da linha e joga no vetor de string
                
                filme.setNome(values[0]);
                filme.setFaixaEtaria(Integer.parseInt(values[1]));
                filme.setAlugado(values[2]);
                
                filme.setId(Database.getInstancia().getFilmes().size());
		Database.getInstancia().addData(filme);
            }
            input.close();
	} catch (FileNotFoundException e) {
	}	
    }
    
    public void fSave(List<Filme> filmes, String path) {		
        FileName = path;
        File = new File(FileName);
        try {
            if(!File.exists()) {
                File.createNewFile();
            }
            FileWriter fw = new FileWriter(File.getAbsolutePath(), true);
            for (Filme f: filmes) {
                fw.append("\n");
		fw.append(f.getNome());
		fw.append(",");
		fw.append(""+f.getFaixaEtaria());
                fw.append(",");
                fw.append(""+f.getAlugado());
            }
            fw.flush();
            fw.close();
	} catch (IOException e) {
            e.printStackTrace();
	}
    }
    
//Carregar arquivos para classe clientes.
    public void cLoad(String path){
        FileName = path;
        File = new File(FileName);
        try {
            Scanner input = new Scanner(File);
            input.nextLine();
            while(input.hasNext()) {
                Cliente cliente = new Cliente();
		String data = input.next(); //Pega linha toda
		String[] values = data.split(","); //Parte as partes da linha e joga no vetor de string
		cliente.setNome(values[0]);
        	cliente.setIdade(Integer.parseInt(values[1]));
                cliente.setId(Database.getInstancia().getClientes().size());
		Database.getInstancia().addData(cliente);
            }
            input.close();
	} catch (FileNotFoundException e) {
	}	
}

    //Salvar dados dos clientes no arquivo.
    public void cSave(List<Cliente> clientes, String path) {		
        FileName = path;
        File = new File(FileName);
        try {
            if(!File.exists()) {
                File.createNewFile();
            }
            FileWriter fw = new FileWriter(File.getAbsolutePath(), true);
            for (Cliente cli: clientes) {
                fw.append("\n");
		fw.append(cli.getNome());
		fw.append(",");
		fw.append(""+cli.getIdade());
            }
            fw.flush();
            fw.close();
	} catch (IOException e) {
            e.printStackTrace();
	}
    }
    
    public static ArqEscritor getInstancia(){
        if(instancia  == null){
            instancia = new ArqEscritor();
        }
        return instancia;
    }
}
