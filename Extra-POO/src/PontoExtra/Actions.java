package PontoExtra;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.Scanner;

import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JTextField;

public class Actions {
	private String fileName = "dados.csv";
	File file = new File(fileName);
	
	public void btSave(List<Pessoa> pessoa, JButton btSalvar, JTextField id, JTextField nome, JTextField sobrenome, JTextField idade, JTextField telefone, JComboBox<?> maiorIdade,JCheckBox masculino) {
		btSalvar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Pessoa pes = new Pessoa();
				pes = saveObject(pes, id, nome, sobrenome, idade, telefone, maiorIdade, masculino);
				pessoa.add(saveObject(pes, id, nome, sobrenome, idade, telefone, maiorIdade, masculino));
				saveArq(pes);
			}
		});
	}
	
	private Pessoa saveObject(Pessoa pessoa, JTextField id, JTextField nome, JTextField sobrenome, JTextField idade, JTextField telefone, JComboBox maiorIdade,JCheckBox masculino) {
		String text = id.getText();
		pessoa.setId(Integer.parseInt(text));
		pessoa.setNome(nome.getText());
		pessoa.setSobrenome(sobrenome.getText());
		text = idade.getText();
		pessoa.setIdade(Integer.parseInt(text));
		pessoa.setTelefone(telefone.getText());
		if (maiorIdade.getSelectedIndex() == 0) {
			pessoa.setMaiorIdade(true);
		}else {
			pessoa.setMaiorIdade(false);
		}
		if (masculino.isSelected()) {
			pessoa.setSexo("Masculino");
		}else {
			pessoa.setSexo("Feminino");
		}
		return pessoa;
	}
	
	private void saveArq(Pessoa pessoa) {
		try {
			if(!file.exists()) {
				file.createNewFile();
			}
			FileWriter fw = new FileWriter(file.getAbsolutePath(), true);
			
			fw.append("\n");
			fw.append("" + pessoa.getId());
			fw.append(",");
			fw.append(pessoa.getNome());
			fw.append(",");
			fw.append(pessoa.getSobrenome());
			fw.append(",");
			fw.append("" + pessoa.getIdade());
			fw.append(",");
			fw.append(pessoa.getTelefone());
			fw.append(",");
			fw.append("" + pessoa.isMaiorIdade());
			fw.append(",");
			fw.append(pessoa.getSexo());
			
			fw.flush();
			fw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
